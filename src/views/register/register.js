import React,{Component} from 'react';
import './register.module.scss'
import axios from 'axios';

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render(){
    return <div>
      <h2>register</h2>
      <label>
        <span>邮箱：</span>
        <input type="text" ref="email"/>
      </label>
      <label>
        <span>用户名：</span>
        <input type="text" ref="username"/>
      </label>
      <label>
        <span>密码：</span>
        <input type="password" ref="password"/>
      </label>
      <button onClick={this.handleClick.bind(this)}>submit</button>
    </div>
  }
  handleClick(){
    console.log(this.refs.email.value)
    axios.post('/users/register',{
      email:this.refs.email.value,
      username:this.refs.username.value,
      password:this.refs.password.value
    }).then(res=>{
      console.log(res)
      // console.log('success')
    })
  }
}
export default Register