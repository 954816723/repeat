## React
- 声明式开发  
- 可与其他框架并存  
- 组件化  
- 单向数据流  
- 视图层框架  
- 函数式编程  

## create-react-app过慢
`npm config set registry https://registry.npm.taobao.org`
- 配置后可通过下面方式来验证是否成功
`npm config get registry`
- 或`npm info express`

## vscode
```json
{
    "version": "0.2.0",
    "configurations": [{
        "name": "Chrome",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:3000",
        "webRoot": "${workspaceRoot}/src",
        "userDataDir": "${workspaceRoot}/.vscode/chrome",
        "sourceMapPathOverrides": {
            "webpack:///src/*": "${webRoot}/*"
        }
    }]
}
```

## jsx

## 父子组件数据传递
父组件上通过再组件上添加属性传递给子组件
子组件通过`this.props.xxx`来获取传递过来的数据
方法也是通过属性传递,但是要注意通过bind改变this指向

## 单向数据流

## setState
```js
this.setState((prevState)=>{

},()=>{
    console.log('回调')
})
```

## props
`import PropTypes from 'prop-types';`
```js
Item.propTypes = {
    content:PropTypes.string.isRequired,
    deleteItem:PropTypes.func,
    index:PropTypes.number,
    test:PropTypes.onOfType([PropTypes.number,PropTypes.string]),
    demo:PropTypes.arrayOf(PropTypes.number,PropTypes.string)
}
Item.defaultProps = {
    content:'hello react'
}
```

## props state render
- 当组件的state或者props发生改变的时候,render函数就会重新执行

## 虚拟DOM/DOM-Diff
1. state数据
2. JSX模版
3. 数据 + 模版生成虚拟DOM
4. 用虚拟DOM的结构生成真实的DOM
5. state发生变化
6. 数据 + 模版生成新的虚拟DOM
7. 原始虚拟DOM与新虚拟DOM比较,找到不同之处
7. 直接操作DOM,改变内容

## ref
`ref={(ele)=>{this.ele = ele}}`

## 生命周期
某一个时刻组件会自动执行的函数
- initialization
    setup props and state
- Mounting
    componentWillMount  在组件即将被挂载到页面的时候执行 只会在第一次被执行
    render
    componentDidMount   在组件被挂载到页面之后,自动被执行 只会在第一次被执行
- Updation
    props
        componentWillReceiveProps 组件从父组件接受参数,如果这个组件第一次存在于父组件中,不会执行,如果之前已经存在父组件中,才会执行
        shouldComponentUpdate   判断是否更新 组件被更新之前,自动执行 返回true/false
        componentWillUpdate     组件被更新之前,自动执行
        render
        ComponentDidUpdate      组件更新完成后,自动执行 ajax
    states
        shouldComponentUpdate   判断是否更新 组件被更新之前,自动执行 返回true/false
        componentWillUpdate     组件被更新之前,自动执行
        render
        componentDidUpdate      组件更新完成后,自动执行
- Unmounting
    componentWillUnmount        当这个组件即将被剔除的时候,自动执行 


## 动画
`npm install react-transition-group`
`import {CSSTransition} from 'react-transition-group'`
```js
<CSSTransition
    in={this.state.show}
    timeout={1000}
    classNames="fade"
    unmountOnExit   //动画完成后移除dom
    onEnter={(el)=>setBtn(false)} //el就是当前元素
    onExited={(el)=>{true}}
    appear={true}   //第一次展示也要有动画效果
>
    <div></div>
</CSSTransition>
```
```js
<TransitionGroup>
    {
        this.state.list.map((item,index)=>{
            return (
                <CSSTransition
                    timeout={1000}
                    classNames="fade"
                    unmountOnExit   //动画完成后移除dom
                    onEnter={(el)=>setBtn(false)} //el就是当前元素
                    onExited={(el)=>{true}}
                    appear={true}   //第一次展示也要有动画效果
                    key={index}
                >
                    <div>{item}</div>
                </CSSTransition>
            )
        })
    }
</TransitionGroup>
```

## Redux
- store是唯一的
- 只有store能够改变自己的内容
- Reducer必须是纯函数
`const store = createStore(reducer)`
`import store from './store`
`store.getState()`
`store.dispatch()`
`store.subscribe(func)`
`store.setState(this.getState())`