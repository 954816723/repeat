let fs = require('fs');
let path = require('path');
let ejs = require('ejs');
let {SyncHook} = require('tapable');
//babylon 将源码转换成ast
// @babel/traverse 遍历到对应节点
// @babel/types 替换遍历好的节点
// @babel/generator 将替换好的节点生成
let babylon = require('babylon');
let t = require('@babel/types');
// es6模块
let traverse = require('@babel/traverse').default;
let generator = require('@babel/generator').default;

class Compiler{
    constructor(config){
        this.config = config;
        // 保存入口文件的路径
        this.entryId;
        // 保存所有的模块依赖
        this.modules = {}
        // 打包入口路径
        this.entry = config.entry;
        // 工作路径
        this.root = process.cwd();
        this.hooks = {
            entryOption:new SyncHook(),
            compile:new SyncHook(),
            afterCompile:new SyncHook(),
            afterPlugins:new SyncHook(),
            run:new SyncHook(),
            emit:new SyncHook(),
            done:new SyncHook(),
        }
        // plugins
        let plugins = this.config.plugins;
        if(Array.isArray(plugins)){
            plugins.forEach(plugin=>{
                plugin.apply(this);
            })
        }

        this.hooks.afterPlugins.call();
    }
    getSource(modulePath){
        let content = fs.readFileSync(modulePath,'utf-8');
        let rules = this.config.module.rules;
        for (let i = 0; i < rules.length; i++) {
            let rule = rules[i];
            let {test,use} = rule;
            let len = use.length - 1;
            
            if (test.test(modulePath)) {
                function normalLoader(){
                    let loader = require(use[len--]);
                    content = loader(content);
                    if(len>=0){
                        normalLoader();
                    }
                }
                normalLoader();
            }
        }

        return content;
    }
    // 解析源码
    parse(source,parentPath){ //AST解析语法树
        let ast = babylon.parse(source);
        let dependencies = [];
        traverse(ast,{
            CallExpression(p){
                let node = p.node;
                if(node.callee.name === 'require'){
                    // 将源码中的require转变成__webpack_require__
                    node.callee.name = '__webpack_require__';
                    let moduleName = node.arguments[0].value;
                    moduleName = moduleName + (path.extname(moduleName)?'':'.js');
                    moduleName = './' + path.join(parentPath,moduleName);
                    dependencies.push(moduleName);
                    node.arguments = [t.stringLiteral(moduleName)];
                }
            }
        });
        
        let sourceCode = generator(ast).code;
        return {sourceCode,dependencies}    
    }
    // 构建模块
    buildModule(modulePath,isEntry){
        // 拿到模块内容
        let source = this.getSource(modulePath);
        // 拿到模块id
        let moduleName = './' + path.relative(this.root,modulePath);
        if (isEntry) {
            this.entryId = moduleName;//保存入口的名字
        }
        // 解析需要把source源码改造,返回一个依赖列表
        let {sourceCode,dependencies} = this.parse(source,path.dirname(moduleName));
        // 把相对路径和模块中的内容对应起来
        this.modules[moduleName] = sourceCode;
        dependencies.forEach(dep=>{  //附模块的递归加载
            this.buildModule(path.join(this.root,dep),false);
        })
    }
    // 发射文件
    emitFile(){
        let main = path.join(this.config.output.path,this.config.output.filename);
        let templateStr = this.getSource(path.join(__dirname,'main.ejs'));
        let code = ejs.render(templateStr,{
            entryId:this.entryId,
            modules:this.modules
        });
        this.assets = {};
        this.assets[main] = code;
        fs.writeFileSync(main,this.assets[main]);
    }
    run(){
        this.hooks.run.call();

        this.hooks.compile.call();
        // 执行,并创建模块的依赖关系   true表示是主模块
        this.buildModule(path.resolve(this.root,this.entry),true);
        this.hooks.afterCompile.call();
        // 发射一个文件,打包后的文件
        this.emitFile();
        this.hooks.emit.call();
        this.hooks.done.call();
    }
}
module.exports = Compiler