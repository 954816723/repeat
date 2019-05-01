## 常用配置

## webpack打包过程
1、读取配置文件，按命令 初始化 配置参数，创建 Compiler 对象；
2、调用插件的 apply 方法 挂载插件 监听，然后从入口文件开始执行编译；
3、按文件类型，调用相应的 Loader 对模块进行 编译，并在合适的时机点触发对应的事件，调用 Plugin 执行，最后再根据模块 依赖查找 到所依赖的模块，递归执行第三步；
4、将编译后的所有代码包装成一个个代码块 (Chuck)， 并按依赖和配置确定 输出内容。这个步骤，仍然可以通过 Plugin 进行文件的修改;
5、最后，根据 Output 把文件内容一一写入到指定的文件夹中，完成整个过程；

## chunk、bundle和module有什么区别？
chunk是指webpack在进行模块的依赖分析的时候，代码分割出来的代码块
bundle是由webpack打包出来的文件
module是开发中的单个模块

## hash、chunkhash和contenthash的区别？
hash:所有文件hash都相同,只要改变内容跟之前的不一致,都有hash都改变
chunkhash:根据不同的入口文件进行依赖文件解析,构建对应chunk,产生对应hash值,但项目主入口文件和对应的依赖css文件被打包在一个模块,有一个改变就都改变
contenthash:由文件内容产生hash值

## loader与plugin的实现原理和区别？
babel流程:ES6代码输入——>babylon进行解析——>得到AST——>使用babel-traverse对AST树进行遍历转译——>得到新的AST树——>使用babel-generator通过AST树生成ES5

Loader是文件加载器,webpack分析代码时,通过test匹配对应的文件,加载资源文件,从下到上利用use中定义的各个loader,对文件进行一些处理,最终引入到打包出的文件中
plugin可以自定义webpack的打包过程,在webpack运行的声明周期中会广播出许多事件,plugin可以监听这些事件,根据需求在相应的事件对打包内容进行修改

区别:
loader是一个转换器,将一个文件编译成另一个文件
plugin是一个扩展器,扩展webpack的功能,不是直接操作文件,而是监听打包过程中的某些节点,执行任务

## 模块化介绍一下，什么是编译时优化

## webpack如何优化编译速度
代码优化,去除无用代码,减少代码体积,使用cdn引入
代码分割,optimization中splitChunks分割代码块
局部引入一些类库,避免无用的文件引入
缩小编译范围,loader中使用exclude和include,noParse避免对非模块化文件的加载
resolve中配置alias,减少路径检索
使用dllPlugin或dllReferencePlugin进行预先构建,将第三方库单独构建
使用happypack进行多线程打包
webpack-bundle-analyze对打包后的文件进行分析,profile：true，对各个编译阶段耗时进行监控
升级最新版本webpack

## 使用过的插件