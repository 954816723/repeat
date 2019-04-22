const http = require('http');
const url = require('url');
function createApplication(){
    let app = function(req,res){
        let {pathname} = url.parse(req.url,true);
        let index = 0;
        function next(err){
            if(index >= app.routes.length){
                return res.end(`Cannot ${req.method} ${pathname}`)
            }
            let route = app.routes[index++];
            if(err){//错误中间件
                if(route.method === 'middle'){
                    if (route.path === '/' || pathname.startsWith(route.path + '/') || pathname === route.path) {
                        if(route.handler.length === 4){
                            route.handler(err,req, res, next);
                        }else{
                            next(err);
                        }
                    }else{
                        next(err);
                    }
                }else{
                    next(err);
                }
            }else{
                if (route.method === 'middle') { //中间件
                    if(route.path === '/' || pathname.startsWith(route.path+'/') || pathname === route.path){
                        route.handler(req,res,next);
                    }else{
                        next();
                    }
                }else{//路由
                    if(route.paramsName){//有路径参数
                        let matchers = pathname.match(route.path);
                        if(matchers){
                            let params = {};
                            for (let i = 0; i < route.paramsName.length; i++) {
                                params[route.paramsName[i]] = matchers[i+1];
                            }
                            req.params = params;
                            route.handler(req,res);
                        }else{
                            next();
                        }
                    }else{
                        if ((pathname === route.path || route.path === "*") && (req.method.toLowerCase() === route.method || route.method === 'all')) {
                            return route.handler(req,res);
                        }else{
                            next();
                        }
                    }
                }
            }
        }
        next();
        // for (let i = 0; i < app.routes.length; i++) {
        //     let route = app.routes[i];
        //     let reqMethod = req.method.toLowerCase();
        //     if ((pathname === route.path || route.path === "*") && (reqMethod === route.method || route.method === 'all')) {
        //         return route.handler(req,res);
        //     }
        // }
    };
    app.listen = function(){
        let server = http.createServer(app);
        server.listen.apply(server,arguments);
    };
    // 存储路由规则
    app.routes = [];
    let methods = http.METHODS;
    methods.forEach(function(method){
        method = method.toLowerCase();
        app[method] = function(path,handler){
            let layer = {
                method,
                path,
                handler
            };
            // 判断是否有路径参数
            if (path.includes(':')) {
                let paramsName = [];
                // 1. 将原来的路径转为正则表达式
                // 2. 提取出变量名
                path = path.replace(/:([^\/]+)/g,function(){
                    paramsName.push(arguments[1]);
                    return '([^\/]+)';
                });
                layer.path = new RegExp(path);
                layer.paramsName = paramsName;
            }
            app.routes.push(layer);
        }
    })
    // all方法匹配所有http请求方法
    app.all = function(path,handler){
        app.routes.push({
            method:'all',
            path,
            handler
        })
    }
    // use添加一个中间件
    app.use = function(path,handler){
        if (typeof handler !== 'function') {
            handler = path;
            path = '/';
        }
        app.routes.push({
            method:'middle',
            path,
            handler
        })
    }
    // 内置中间件,为请求和响应添加一些方法和属性
    app.use(function(req,res,next){
        const urlObj = url.parse(req.url,true);
        req.query = urlObj.query;
        req.path = urlObj.pathname;
        req.hostname = req.headers['host'].split(':')[0];
        next();
    })
    return app;
}
module.exports = createApplication;