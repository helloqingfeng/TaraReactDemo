import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST,GET_IMGS} from './actionTypes'

const defaultState={
    inputValue:'输入你的东西',
    list:[],
    imgs:[]
}
export default (state=defaultState,action)=>{
    console.log(state,action);
    // reducer里只能接受state，不能改变state
    if(action.type===CHANGE_INPUT){
        let newState=JSON.parse(JSON.stringify(state)) //深度拷贝
        newState.inputValue=action.value;
        return newState;
    }

    if(action.type===ADD_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        // push新的内容到列表中区
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }

    if(action.type===DELETE_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        // 删除数组对应的值
        newState.list.splice(action.index,1);
        return newState;
    }

    if(action.type===GET_LIST){
        let newState=JSON.parse(JSON.stringify(state));
        // 删除数组对应的值
        // newState.list=newState.list.concat(action.datalist.data.list);
        newState.list=action.datalist.data.list;
        return newState;
    }

    if(action.type===GET_IMGS){
        let newState=JSON.parse(JSON.stringify(state));
        newState.imgs=action.dataimg;
        return newState;
    }

    return state
}