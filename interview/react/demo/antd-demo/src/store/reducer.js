import {CHANGE_INPUT_VALUE,ADD_LIST_VALUE,DEL_LIST_VALUE} from './actionTypes';

const defaultState = {
    inputVal:'123',
    list:[1,2]
}
// reducer返回一个函数
// state = defaultState设置默认数据
// reducer可以接受state,但是不能修改state
export default (state = defaultState,action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputVal = action.value;
        return newState;
    }
    if (action.type === ADD_LIST_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal = '';
        return newState;
    }
    if (action.type === DEL_LIST_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        return newState;
    }
    return state;
}