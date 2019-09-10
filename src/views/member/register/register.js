import React,{Component} from 'react';
import my from './register.module.scss'
import axios from 'axios';
import NavBar from '../../../components/NavBar/NavBar'
import { List, InputItem,Button} from 'antd-mobile';
import md5 from 'js-md5'
import Loading from '../../../components/Loading/Loading'
import {withRouter} from 'react-router-dom'


class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
      errorShow:false,
      errorchar:'',
      spaceShow:false,
      spacechar:'',
      confirmErr:false,
      loading:false
    }
  }
  render(){
    return <div>
      <NavBar title="register" action="sign in"></NavBar>
      <div className="form" style={{marginTop:'2rem'}}>
        <List renderHeader={() => ''}>
          <InputItem
            type="email"
            placeholder="(最少6个字符)@163.com"
            ref="email"
            onBlur={this.handleEmail.bind(this)}
          >邮箱</InputItem>
          <InputItem
            type="text"
            placeholder="如：'小仙女' 至多5位"
            ref="username"
            maxLength='5'
          >用户名</InputItem>
          <InputItem
            type="password"
            placeholder="6-10位包含数字,字母"
            ref="password"
            maxLength="10"
          >密码</InputItem>
          <InputItem
            type="password"
            placeholder="******"
            maxLength="10"
            ref="confirmps"
          >确认密码</InputItem>
        </List>
      </div>
      {
        this.state.errorShow ?
          <p className={my.fromerror}>!{this.state.errorchar}格式不符合规范</p> : ''
      }
      {
        this.state.spaceShow ?
          <p className={my.fromerror} ref="notice">!{this.state.spacechar}不能为空</p> : ''
      }
      {
        this.state.confirmErr?
        <p className={my.fromerror}>！确认密码错误</p> : ''
      }
        <Button type="primary" style={{width:'70%',margin:'1rem auto',background:'pink'}} onClick={this.handleClick.bind(this)}>confirm</Button>
      {
        this.state.loading?
        <Loading></Loading>:''
      }
    </div>
  }
  handleEmail(){
    console.log(this.refs.email.state.value)
    axios.get('/users/register').then(res=>{
      console.log(res.data)
    })
  }
  handleClick(){
    this.setState({
      errorShow:false,
      spaceShow:false,
      confirmErr:false
    })
    let emailRex = /^(?!_)\w{6,10}@(126|163|qq).com/
    let passwordRex =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/
    let isEmail=emailRex.test(this.refs.email.state.value)
    let testusername=this.refs.username.state.value
    let hasSpace=testusername.includes(' ')
    let ps=this.refs.password.state.value
    let testps=passwordRex.test(this.refs.password.state.value)
    let confirmps=this.refs.confirmps.state.value
    if(!this.refs.email.state.value){
      this.setState({
        spaceShow:true,
        spacechar:'邮箱'
      })
      return 
    }
    if(!isEmail){
      this.setState({
        errorchar:'邮箱',
        errorShow:true
      })
      return 
    }
    if(!testusername){
      this.setState({
        spaceShow:true,
        spacechar:'用户名'
      })
      return 
    }
    if(hasSpace){
      this.setState({
        errorShow:true,
        errorchar:'用户名'
      })
      return 
    }
    if(!ps){
      this.setState({
        spaceShow:true,
        spacechar:'密码'
      })
      return 

    }
    if(!testps){
      console.log('fgdfg')
      this.setState({
        errorShow:true,
        errorchar:'密码'
      })
      return 
    }
    if(!confirmps){
      this.setState({
        spaceShow:true,
        spacechar:'确认密码'
      })
      return
    }
    if(!(ps===confirmps)){
      this.setState({
        confirmErr:true
      })
      return 
    }
    let mdps=md5(this.refs.password.state.value)
    this.setState({
      loading:true
    })
    axios.post('/users/register',{
      email:this.refs.email.state.value,
      username:this.refs.username.state.value,
      password:mdps
    }).then(res=>{
      console.log(res)
      if(res.data.ok){
        this.setState({
          loading:false
        })
        this.props.history.push('/member/login')
      }
    })
  }
}
export default withRouter(Register)