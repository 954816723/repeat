import React,{Component} from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store'
import {getVal,getBtn,getDel} from './store/actionCreators';

class App extends Component{
	constructor(props){
		super(props);
		// 通过getState获取store中的数据
		this.state = store.getState();
		this.handleVal = this.handleVal.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtn = this.handleBtn.bind(this);
		store.subscribe(this.handleStoreChange);
	}
	render(){
		return (
			<div>
				<Input 
					style={{width:'300px'}} 
					value={this.state.inputVal}
					onChange={this.handleVal}
				/>
				<Button 
					type="primary"
					onClick={this.handleBtn}
				>提交</Button>
				<List
					// header={<div>Header</div>}
					// footer={<div>Footer</div>}
					bordered
					dataSource={this.state.list}
					renderItem={(item,index) => (<List.Item onClick={this.handleDel.bind(this,index)}>{item}</List.Item>)}
					style={{width:"300px"}}
				/>
			</div>
		)
	}
	handleVal(e){
		const action = getVal(e.target.value);
		store.dispatch(action);
	}
	handleStoreChange(){
		this.setState(store.getState());
	}
	handleBtn(){
		const action = getBtn();
		store.dispatch(action);
	}
	handleDel(index){
		const action = getDel(index);
		store.dispatch(action);
	}
}

export default App;
