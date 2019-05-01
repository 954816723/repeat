## webpack能做什么
代码转换,文件优化,代码分割,模块合并,自动更新,代码校验,自动发布

## 手动配置webpack
默认配置文件名为 `webpack.config.js`
可以通过过配置`package.json`中的`script:webpack --config webpack.config.my.js`

## 引入第三方模块
1. `expose-loader` 暴露到window上
2. `providePlugin` 给每个模块提供一个$
3. cdn引入不打包 `externals`

## 打包图片
1. js中创建图片引入
2. css中引入
3. html中img引入

## 跨域
1. `http-proxy`将请求代理到express服务器上
2. 通过`before`模拟数据
3. `http-proxy-middleware`在服务端启用webpack,使用相同端口

## tree-shaking
使用`import`在生产环境下,会自动去除没用的代码
`require`不支持
es6模块会将结果放到default上

## 识别.vue
```js
npm install vue-loader vue-template-compiler cache-loader thread-loader -D
npm install vue -S
```
`vue-loader` 用于解析.vue文件
`vue-template-compiler` 用于编译模板
`cache-loader` 用于缓存loader编译的结果
`thread-loader` 使用 worker 池来运行loader，每个 worker 都是一个 node.js 进程。
```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module:{
    rules: [
        {
        test: /\.vue$/,
        use: [
                {
                    loader: 'cache-loader'
                },
                {
                    loader: 'thread-loader'
                },
                {
                    loader: 'vue-loader',
                    options: {
                        compilerOptions: {
                        preserveWhitespace: false
                        },
                    }
                }
            ]
        },
    ]
}
plugins: [
// ...
new VueLoaderPlugin()
]
```

`webpack`
`webpack-cli`
`webpack-dev-server`
`webpack-dev-middleware`
`webpack-merge`
`webpack.ProvidePlugin` 全局注入
`Webpack.BannerPlugin` 版权声明
`Webpack.DefinePlugin` 定义环境变量
`webpack.DllPlugin` 抽取动态链接
`webpack.DllReferencePlugin` 获取动态链接
`webpack.IgnorePlugin` 忽略特定模块
`happypack` 多线程打包

`purifycss-webpack` 消除冗余css
`purify-css`
`glob`
```js
const PurifyCssWebpack = require('purifycss-webpack');
new PurifyCssWebpack({
    paths: glob.sync(path.join(__dirname, '/src/*.html'))
}),
```

###### loader
`css-loader`
`style-loader`
`file-loader`
`html-loader`
`url-loader`
`less`
`less-loader`
`postcss-loader`
`autoprefixer`
`eslint` 代码检查
`eslint-loader`
- Babel默认只转换新的JavaScript句法（syntax），而不转换新的API
`babel-loader` 转换js加载器
`@babel/core`  babel核心模块,转换源代码
`@babel/preset-env`  将ES6转为ES5
`@babel/runtime` 不使用-D
`@babel/polyfill` 不使用-D
`expose-loader` 暴露全局的loader `import $ from 'expose-loader?$!jquery'` 内联loader

###### plugin
`html-webpack-plugin`
`mini-css-extract-plugin`
`terser-webpack-plugin`
`optimize-css-assets-webpack-plugin`
`clean-webpack-plugin` 每次打包删除之前的打包目录
`copy-webpack-plugin` 拷贝文件
`BannerPlugin` 版权声明 webpack内置
`@babel/plugin-syntax-dynamic-import` js懒加载
`@babel/plugin-proposal-class-properties`  兼容ES7 class语法  
`@babel/plugin-proposal-decorators`  兼容ES7 装饰器语法
`@babel/plugin-transform-runtime`  兼容async generator 等方法