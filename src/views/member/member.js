import React,{Component} from 'react'
import store from '../../store/index'
import {changeInputAction,addItemAction,deleteItemAction,getTodoList} from '../../store/actionCreator'
import  TodolistUI from './TodolistUI'
import NavBar from '../../components/NavBar/NavBar'
import axios from 'axios'

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
    this.setState({
      inputVal:""
    })
  }
  handleInput(e){
    let Rex=/^\s*$/
    if(Rex.test(e.target.value)) return false
    const inputAction=changeInputAction(e.target.value.trim())  //去除前后空格
    store.dispatch(inputAction)
  }
  handleDel(index){
    const delAction=deleteItemAction(index)
    store.dispatch(delAction)
  }
  componentDidMount(){
    // const action = getTodoList()
    // store.dispatch(action)
  }
  render(){
    // console.log('组件挂载中')
    return <div>
       <NavBar title="Mypage"></NavBar>
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