import React, { Component } from 'react';
import TodoUI from './TodoUI'
import store from './store'
import axios from 'axios'
import {changeInputAction,addItemAction,deleteItemAction,getListAction,getImgsAction} from './store/actionBuild'


class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue=this.changeInputValue.bind(this);
        this.storeChange=this.storeChange.bind(this);
        this.clickBtn=this.clickBtn.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        store.subscribe(this.storeChange)
    }


    render() { 
        return (
            <TodoUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            imgs={this.state.imgs}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            deleteItem={this.deleteItem}
            ></TodoUI>
         );
    }

    componentDidMount(){
        axios.get('https://easy-mock.com/mock/5d3734d52cac0e2b10c4be18/twice001/poet').then((res)=>{
            console.log(res);
            const datalist=res.data;
            const action=getListAction(datalist);
            store.dispatch(action);
        });

        axios.get('https://easy-mock.com/mock/5d3734d52cac0e2b10c4be18/twice001/girl')
        .then((res) => {
          const dataimg=res.data.results;
          console.log(dataimg);
          const action=getImgsAction(dataimg);
          store.dispatch(action);
        })
    }


    changeInputValue(e){
        console.log(e.target.value);
        const action=changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState());
    }

    clickBtn(){
        console.log('清风徐徐')
        const action=addItemAction()
        store.dispatch(action);
    }

    deleteItem(index){
        console.log(index)
        const action=deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default Todolist;