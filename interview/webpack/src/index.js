// // import $ from 'expose-loader?$!jquery'
import $ from 'jquery'
console.log($);
console.log('watch');


import logo from './crossroad.jpg';
let img = new Image();
img.src = logo;
document.body.appendChild(img);

let str = require('./a.js');
//热更新
if(module.hot){
    module.hot.accept('./a.js',()=>{
        let str = require('./a');
        console.log(str);
    })
}

require('./index.css')
let fn = ()=>{
    console.log('str');
}
fn();

@log
class A{
    a = 1;
}
let a = new A();
console.log(a.a);


function log(target){
    console.log(target);
}

let xhr = new XMLHttpRequest();
// xhr.open('GET','/api/user',true);
xhr.open('GET','/user',true);
xhr.onload = function(){
    console.log(xhr.response);
}
xhr.send();

if(DEV){
    console.log(1);
}else{
    console.log(2);
}