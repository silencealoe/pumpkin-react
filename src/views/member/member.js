import React,{Component} from 'react'
import store from '../../store/index'
import {changeInputAction,addItemAction,deleteItemAction} from '../../store/actionCreator'
import  TodolistUI from './TodolistUI'

class Member extends Component{
  constructor(props){
    super(props)
    this.handleInput=this.handleInput.bind(this)
    this.storeChange=this.storeChange.bind(this)
    this.handleAdd=this.handleAdd.bind(this)
    this.state=store.getState()
    store.subscribe(this.storeChange)
  }
  storeChange(){
    this.setState(store.getState())
  }

  handleAdd(){
    if(this.state.inputval==="") return
    const action = addItemAction()
    store.dispatch(action)
  }
  handleInput(e){
    let Rex=/^\s*$/
    if(Rex.test(e.target.value)) return false
    const inputAction=changeInputAction(e.target.value.trim())
    store.dispatch(inputAction)
  }
  handleDel(index){
    const delAction=deleteItemAction(index)
    store.dispatch(delAction)
  }
  render(){
    // console.log('组件挂载中')
    return <div>
      <h2>mypage</h2>
      <TodolistUI 
        inputval={this.state.inputval}
        handleAdd={this.handleAdd} 
        handleInput={this.handleInput}
        datalist={this.state.datalist}
        handleDel={this.handleDel}
      />
      {
        this.props.children
      }

    </div>
  }
}
export default Member