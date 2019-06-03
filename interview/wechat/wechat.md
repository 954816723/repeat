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
// App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果  
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
###### [page].js
```js
//index.js
Page({
  data: {
    text: "This is page data."
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  onResize: function() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})
```
###### project.config.json
工具配置  

## 组件式编程  


