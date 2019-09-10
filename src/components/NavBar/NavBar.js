import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Icon } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import navBar from './NavBar.module.scss'

class MyNavBar extends Component{
  constructor(props) {
    super(props)
    this.state={
      child:'i am child'
    }
  }
  render(){
    return <div className={navBar.commonHeader}>
      <ul className={navBar.headerlist}>
          <li>
            <Icon type="left" style={{marginTop:'.3rem',color:'black'}} size="lg"></Icon>
          </li>
          <li>{this.props.title}</li>
          <li onClick={this.handleClick.bind(this)}>{this.props.action}</li>
      </ul>
    </div>
  }
  handleClick(){
    console.log(this.props)
    this.props.action ==='sign in' ? this.props.history.push('/member/login'):this.props.history.push('/member/register')
  }
}
export default withRouter(MyNavBar)