(function(modules) { // webpackBootstrap
var installedModules = {};
function __webpack_require__(moduleId) {
if(installedModules[moduleId]) {//./src/index.js
return installedModules[moduleId].exports;
}
// Create a new module (and put it into the cache)
var module = installedModules[moduleId] = {
i: moduleId,
l: false,
exports: {}
};

// Execute the module function
modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

// Flag the module as loaded
module.l = true;

// Return the exports of the module
return module.exports;
}


// expose the modules object (__webpack_modules__)
__webpack_require__.m = modules;

// expose the module cache
__webpack_require__.c = installedModules;

// define getter function for harmony exports
__webpack_require__.d = function(exports, name, getter) {
if(!__webpack_require__.o(exports, name)) {
Object.defineProperty(exports, name, { enumerable: true, get: getter });
}
};

// define __esModule on exports
__webpack_require__.r = function(exports) {
if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
}
Object.defineProperty(exports, '__esModule', { value: true });
};

// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
if(mode & 1) value = __webpack_require__(value);
if(mode & 8) return value;
if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
var ns = Object.create(null);
__webpack_require__.r(ns);
Object.defineProperty(ns, 'default', { enumerable: true, value: value });
if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return
value[key]; }.bind(null, key));
return ns;
};

// getDefaultExport function for compatibility with non-harmony modules
__webpack_require__.n = function(module) {
var getter = module && module.__esModule ?
function getDefault() { return module['default']; } :
function getModuleExports() { return module; };
__webpack_require__.d(getter, 'a', getter);
return getter;
};

// Object.prototype.hasOwnProperty.call
__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

// __webpack_public_path__
__webpack_require__.p = "";


// Load entry module and return exports
// 入口模块
return __webpack_require__(__webpack_require__.s = "./src\js\main.js");
})
({
    
        "./src\js\main.js": //key -> 模块的路径
        (function(module, exports,__webpack_require__) { //value -> 函数
        eval(`let str = __webpack_require__("./src\\js\\a.js");

__webpack_require__("./src\\css\\style.less");

console.log(str);`);
        }),
    
        "./src\js\a.js": //key -> 模块的路径
        (function(module, exports,__webpack_require__) { //value -> 函数
        eval(`let str = __webpack_require__("./src\\js\\test\\b.js");

module.exports = str;`);
        }),
    
        "./src\js\test\b.js": //key -> 模块的路径
        (function(module, exports,__webpack_require__) { //value -> 函数
        eval(`module.exports = 'hehe';`);
        }),
    
        "./src\css\style.less": //key -> 模块的路径
        (function(module, exports,__webpack_require__) { //value -> 函数
        eval(`let style = document.createElement('style');
style.innerHTML = "body {\\n  background: red;\\n}\\n";
document.head.appendChild(style);`);
        }),
    
});