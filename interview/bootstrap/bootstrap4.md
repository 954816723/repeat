## Bootstrap 4 CDN
<!-- 新 Bootstrap4 核心 CSS 文件 -->
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.0/css/bootstrap.min.css">
<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<!-- popper.min.js 用于弹窗、提示、下拉菜单 -->
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<!-- 最新的 Bootstrap4 核心 JavaScript 文件 -->
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.0/js/bootstrap.min.js"></script>

`<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`

## 容器类
`.container` 类用于固定宽度并支持响应式布局的容器。
`.container-fluid` 类用于 100% 宽度，占据全部视口（viewport）的容器。

## 网格系统
`.col-`    针对所有设备
`.col-sm-` 平板 - 屏幕宽度等于或大于 576px
`.col-md-` 桌面显示器 - 屏幕宽度等于或大于 768px)
`.col-lg-` 大桌面显示器 - 屏幕宽度等于或大于 992px)
`.col-xl-` 超大桌面显示器 - 屏幕宽度等于或大于 1200px)

## 偏移列
偏移列通过 `offset-*-*` 类来设置。第一个星号( * )可以是 sm、md、lg、xl，表示屏幕设备类型，第二个星号( * )可以是 1 到 11 的数字

## 颜色
- 文字颜色
`.text-muted, .text-primary, .text-success, .text-info, .text-warning, .text-danger, .text-secondary, .text-white, .text-dark .text-light`
- 背景颜色
`.bg-primary, .bg-success, .bg-info, .bg-warning, .bg-danger, .bg-secondary, .bg-dark 和 .bg-light`

## 按钮
`btn btn-primary btn-secondary btn-success btn-info btn-warning btn-danger btn-dark btn-light btn-link`
`btn-outline-primary ...`
` btn-lg btn-sm`
`.btn-block 块级按钮`
`active disabled `

## 按钮组
` .btn-group`
`.btn-group-lg|sm` 设置大小
` .btn-group-vertical` 垂直按钮组

## 下拉菜单
```html
<div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Dropdown button
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Link 1</a>
    <a class="dropdown-item" href="#">Link 2</a>
    <a class="dropdown-item" href="#">Link 3</a>
  </div>
</div>
```

## 折叠
```html
<button data-toggle="collapse" data-target="#demo">折叠</button>
<div id="demo" class="collapse">
Lorem ipsum dolor text....
</div>
```

## 导航
- 水平导航栏
可以在 `<ul>` 元素上添加 `.nav`类，在每个 `<li>` 选项上添加 `.nav-item` 类，在每个链接上添加 `.nav-link` 类:
`.justify-content-center`   导航居中显示
`.justify-content-end`      导航右对齐
`.nav-justified`            设置导航项齐行等宽显示
`.flex-column`  创建垂直导航
`.nav-tabs` 将导航转化为选项卡 `.active` 类来标记
