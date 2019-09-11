import React,{Component} from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import { List, InputItem,Button,Checkbox} from 'antd-mobile';
import axios from 'axios'
import md5 from 'js-md5'
import {withRouter} from 'react-router-dom'
import login from './login.module.scss'

const AgreeItem = Checkbox.AgreeItem

class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      checkKey:1,
      error:false
    }
  }
  handleCheck(){
    console.log(this)
    this.state.checkKey===0?this.setState({checkKey:1}):this.setState({checkKey:0})
    console.log(this.state.checkKey)
  }
  handleLogin(){
    console.log('login')
    axios.post('/users/login',{
      email:this.refs.email.state.value,
      password:md5(this.refs.password.state.value)
    }).then(re=>{
      console.log(re.data)
      re.data.ok ? this.props.history.push('/') : this.setState({error:true})
    })
  }
  render(){
    return <div>
      <NavBar title="login" action="sign up"></NavBar>
      <div className="form" style={{marginTop:'2rem'}}>
        {
          this.state.error ? <p className={login.notice}>！用户名和密码不匹配，请重新输入</p> : ''
        }
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
export default withRouter(Login)