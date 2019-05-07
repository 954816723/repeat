import React , {Component,Fragment} from 'react';
import Item from './item'
import axios from 'axios'

// Fragment占位符
class App extends Component {
	constructor(props){
		super(props);
		// this.state组件的状态
		this.state = {
			inputValue:'hello react',
			list:['hello','react']
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleBtn = this.handleBtn.bind(this);
		this.handleLi = this.handleLi.bind(this);
	}
 
	render(){
		return (
			<Fragment>
				<div>
					{/* 注释 */}
					<label htmlFor="area">输入</label>
					<input id='area' className="input"
						value={this.state.inputValue}
						onChange={this.handleChange}
						ref={(input)=>this.input = input}
					/>
					<button onClick={this.handleBtn}>提交</button>
				</div>
				<ul>
					{this.getItem()}
				</ul>
			</Fragment>
		)
	}

	componentDidMount(){
		axios.get('api/todolist').then((res) => {
			console.log(res);
		})
	}
	getItem(){
		return this.state.list.map((item,index)=>{
				return (
					<div key={index}>
						<Item 
							content={item} 
							index={index}
							deleteItem={this.handleLi}
						/>
						{/* {<li 
							key={index} onClick={this.handleLi.bind(this,index)}
							dangerouslySetInnerHTML={{__html:item}}
						></li>} */}
					</div>
				)
			})
	}
	handleChange(e){
		// const value = e.target.value;
		const value = this.input.value
		this.setState(()=>{
			return {
				inputValue:value
			}
		});
		// this.setState({
		// 	inputValue:e.target.value
		// })
	}
	handleBtn(){
		this.setState((prevState)=>({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}));
		// this.setState({
		// 	list:[...this.state.list,this.state.inputValue],
		// 	inputValue:''
		// })
	}
	handleLi(index){
		// immutable
		// state不能做任何直接的改变
		this.setState((prevState)=>{
			const list = [...prevState.list];
			list.splice(index,1);
			return {list}
		})
		// const list = [...this.state.list];
		// list.splice(index,1);
		// this.setState({
		// 	list:list
		// })
	}
}
export default App



// import React from 'react';

// function App() {
//   // 这里也是jsx语法
//   return (
//     <div className="App">
//         hello world
//     </div>
//   );
// }

// export default App;
