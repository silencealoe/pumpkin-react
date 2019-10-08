import React, { Component } from 'react'
import {List,Input,Button,Icon} from 'antd'
import 'antd/dist/antd.css'
class TodolistUI extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="inputblock" style={{marginTop:20}}>
        
      <Input placeholder="write something" size="large" allowClear  value={this.props.inputval} style={{width:200}} prefix={<Icon type="user" />}  onPressEnter={this.props.handleAdd} onChange={this.props.handleInput}/>
      <Button type="primary" size="large" style={{verticalAlign:'top'}} onClick={this.props.handleAdd}>add</Button>

     <List
     style={{marginTop:10}}
     bordered
     size="large"
     dataSource={this.props.datalist}
     renderItem={(item,index)=>(
       <List.Item>
         {item}
         <Button className="del" style={{color:'#1890ff',float:"right",verticalAlign:'top'}} onClick={this.props.handleDel.bind(this,index)}>delete</Button>
       </List.Item>
     )}
     ></List>
  </div>
     );
  }
}
 
export default TodolistUI;