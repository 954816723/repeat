## ant-design-vue

###### 按钮
`<a-button></a-button>`
- `type` primary dashed danger  
- `shape` circle  
- `icon`
- `loading`
- `ghost`
- `disabled`
- `size` small large
- `block`
- `htmlType`
事件 
- `click`   点击按钮时的回调
###### icon
`<a-icon type=""></a-icon>`
###### Grid栅格
- 24栅格系统
`<a-row></a-row>`
Row
- `align`   top middle bottom
- `gutter`  栅格间隔 { xs: 8, sm: 16, md: 24}
- `justify` start end center space-around space-between
- `type`    flex
Col
- `offset`
- `order`
- `pull`
- `push`
- `span`
- `xs`
- `sm`
- `md`
- `lg`
- `xl`
- `xxl`
###### Layout布局
- Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。
- Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
- Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。
- Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
- Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

- Layout.Sider 支持响应式布局
- 配置 `breakpoint` 属性即生效，视窗宽度小于 `breakpoint` 时 Sider 缩小为 `collapsedWidth` 宽度，若将 `collapsedWidth` 设置为零，会出现特殊 trigger。
Layout 
- `class`
- `style`
- `hasSider`
Sider
- `breakpoint`          触发响应式布局的断点
- `class`               容器 class
- `collapsed(v-model)`  当前收起状态
- `collapsedWidth`      收缩宽度，设置为 0 会出现特殊 trigger
- `defaultCollapsed`    是否默认收起
- `reverseArrow`        翻转折叠提示箭头的方向，当 Sider 在右边时可以使用
- `style`               指定样式
- `theme`               主题颜色 light dark
- `trigger`             自定义 trigger，设置为 null 时隐藏 trigger
- `width`
事件
- `collapse	`
- `breakpoint`
###### Affix固钉
`<a-affix :offsetTop="this.top"></a-affix>`
- `offsetBottom`  距离窗口底部达到指定偏移量后触发
- `offsetTop`     距离窗口顶部达到指定偏移量后触发
- `target`        设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 `() => HTMLElement`
事件 
- `change`        固定状态改变时触发的回调函数
###### Breadcrumb面包屑
`<a-breadcrumb></a-breadcrumb>` 
- `itemRender`                  自定义链接函数，和 vue-router 配置使用， 也可使用slot="itemRender" 和 slot-scope="props"
- `params`                      路由的参数
- `routes`                      router 的路由栈信息
- `separator`                   分隔符自定义
###### dropdown下拉菜单
`<a-dropdown></a-dropdown>`
###### menu导航菜单
```js
<template>
  <a-menu>
    <a-menu-item>菜单项</a-menu-item>
    <a-sub-menu title="子菜单">
      <a-menu-item>子菜单项</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
```
###### pagination分页
`<a-pagination v-model="current" :total="50" showQuickJumper />`
###### steps步骤条
```js
<template>
  <a-steps>
    <a-step status="finish" title="Login">
      <a-icon type="user" slot="icon"/>
    </a-step>
    <a-step status="finish" title="Verification">
      <a-icon type="solution" slot="icon"/>
    </a-step>
    <a-step status="process" title="Pay">
      <a-icon type="loading" slot="icon"/>
    </a-step>
    <a-step status="wait" title="Done">
      <a-icon type="smile-o" slot="icon"/>
    </a-step>
  </a-steps>
</template>
```