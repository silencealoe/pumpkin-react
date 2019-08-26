import React,{Component} from 'react';
import header from './Header.module.scss'

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      headerlist:['首页','主题','故事','故事大赛','APP下载','学堂']
    }
  }
  render(){
    return(
      <header>
        <ul className={header.headerlist}>
           {
             this.state.headerlist.map((item,index)=>
               <li className={header.headeritem} key={index}>{item}</li>
             )
           }
        </ul>
      </header>
    )
  }
}

export default Header