// 实现Router和引用的分层
const Router = require('./router');
const http = require('http');
const methods = require('methods');
const slice = Array.prototype.slice;
function Application(){
    // this._router = new Router();
}
Application.prototype.lazyrouter = function(){
    if(!this._router){
        this._router = new Router();
    }
}
methods.forEach(function(method){
    Application.prototype[method] = function(){
        this.lazyrouter();
        this._router[method].apply(this._router,slice.call(arguments))
        return this;
    }
})
// Application.prototype.get = function(path,handler){
//     this.lazyrouter();
//     this._router.get(path,handler);
// }
Application.prototype.listen = function(){
    let self = this;
    let server = http.createServer(function(req,res){
        function done(){//如果没有任何路由规则匹配就走此函数
            res.end(`Cannot ${req.method} ${req.url}`);
        }
        //如果路由系统无法处理,也就是没有一条路由规则跟请求匹配,就会把请求交给done
        self._router.handle(req,res,done);
    });
    server.listen(...arguments);
}
module.exports = Application;