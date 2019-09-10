import React,{Component} from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import { List, InputItem,Button,Checkbox} from 'antd-mobile';
import axios from 'axios'

const AgreeItem = Checkbox.AgreeItem

class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      checkKey:1
    }
  }
  handleCheck(){
    console.log(this)
    this.state.checkKey===0?this.setState({checkKey:1}):this.setState({checkKey:0})
    console.log(this.state.checkKey)
  }
  handleLogin(){
    
  }
  render(){
    return <div>
      <NavBar title="login" action="sign up"></NavBar>
      <div className="form" style={{marginTop:'2rem'}}>
      <List renderHeader={() => ''}>
          <InputItem
            type="email"
            placeholder="huihui@163.com"
            ref="email"
          >邮箱</InputItem>
          <InputItem
            type="password"
            placeholder="*******"
            ref="password"
            maxLength="10"
          >密码</InputItem>
        </List>
        <AgreeItem  onChange={this.handleCheck.bind(this)}>Remember it</AgreeItem>
        <Button type="primary" style={{width:'70%',margin:'1rem auto',background:'pink'}} onClick={this.handleLogin.bind(this)}>Login</Button>
        
        </div>
      
    </div>
  }
}
export default Login