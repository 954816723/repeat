## AppID(小程序ID)
wx90cde468ab5e892e

## 小程序文件类型  
样式: wxss  
骨架: wxml  
业务: js  
配置: json  

## 基本结构  
全局文件:  
    app.json 全局配置文件  
    app.wxss 全局样式文件  
    app.js  
Page...  
    wxml wxss js json

###### app.js
```js
App({
    onLaunch (options) {
        // Do something initial when launch.
    },
    onShow (options) {
        // Do something when show.
    },
    onHide () {
        // Do something when hide.
    },
    onError (msg) {
        console.log(msg)
    },
    onPageNotFound () {
        // ...
    }
  globalData: 'I am global data'
})
```
###### app.json
```js
// 常用配置
{
    "pages": [
        "pages/index/index",
        "pages/logs/index"
    ],
    "window": {
        "navigationBarTitleText": "微信接口功能演示",
        "navigationBarBackgroundColor": "#ffffff",
        "navigationBarTextStyle": "black",
        "backgroundColor": "#eeeeee",
        "backgroundTextStyle": "light"
    },
    "tabBar": {
        "color":"#ffffff"
        "list": [{
            "pagePath": "pages/index/index",
            "text": "首页",
            "iconPath":"....",
            "selectedIconPath":"...."
        }, {
            "pagePath": "pages/logs/logs",
            "text": "日志"
        }]
    },
    "networkTimeout": {
        "request": 10000,
        "downloadFile": 10000
    },
    "debug": true,
    "navigateToMiniProgramAppIdList": [
        "wxe5f52902cf4de896"
    ]
}
```
###### project.config.json
工具配置  



## App()
App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果  


## 组件式编程  
