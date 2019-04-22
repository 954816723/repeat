const Route = require('./route');
const Layer = require('./layer');
const url = require('url');
const methods = require('methods');
const slice = Array.prototype.slice;
function Router(){
    this.stack = [];
}
// 创建一个Route实例,向当前路由系统中添加一个层
Router.prototype.route = function(path){
    let route = new Route(path);
    let layer = new Layer(path,route.dispatch.bind(route));
    layer.route = route;
    this.stack.push(layer);
    return route;
}
methods.forEach(function (method) {
    Router.prototype[method] = function (path) {
        let route = this.route(path);
        route[method].apply(route,slice.call(arguments,1))
        return this;
    }
})
// Router.prototype.get = function(path,handler){
//     let route = this.route(path);
//     route.get(handler);
// }
Router.prototype.handle = function(req,res,out){
    let idx = 0,self = this;
    let {pathname} = url.parse(req.url,true);
    function next(err){
        if(idx >= self.stack.length){
            return out();
        }
        let layer = self.stack[idx++];
        // console.dir(JSON.stringify(layer));
        
        if(layer.match(pathname) && layer.route && layer.route.handle_method(req.method)){
            if (err) {//处理错误
                layer.handle_error(err,req,res,next);
            }else{
                layer.handle_request(req,res,next);
            }
        }else{
            next();
        }
    }
    next();
}
module.exports = Router;