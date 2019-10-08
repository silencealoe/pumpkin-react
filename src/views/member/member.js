import React,{Component} from 'react'
import {List,Input,Button,Icon} from 'antd'
import 'antd/dist/antd.css'
import store from '../../store/index'
// import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from '../../store/actionTypes'
import {changeInputAction,addItemAction,deleteItemAction} from '../../store/actionCreator'

class Member extends Component{
  constructor(props){
    super(props)
    this.handleInput=this.handleInput.bind(this)
    this.storeChange=this.storeChange.bind(this)
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
      <div className="inputblock" style={{marginTop:20}}>
        
          <Input placeholder="write something" size="large" allowClear  style={{width:200}} prefix={<Icon type="user" />}  onPressEnter={this.handleAdd.bind(this)} onChange={this.handleInput}/>
          <Button type="primary" size="large" style={{verticalAlign:'top'}} onClick={this.handleAdd.bind(this)}>add</Button>

         <List
         style={{marginTop:10}}
         bordered
         size="large"
         dataSource={this.state.datalist}
         renderItem={(item,index)=>(
           <List.Item>
             {item}
             <Button className="del" style={{color:'#1890ff',float:"right",verticalAlign:'top'}} onClick={this.handleDel.bind(this,index)}>delete</Button>
           </List.Item>
         )}
         ></List>
      </div>
      {
        this.props.children
      }

    </div>
  }
}
export default Member