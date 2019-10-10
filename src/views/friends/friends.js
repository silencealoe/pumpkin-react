import React, { Component ,Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.clickBtn=this.clickBtn.bind(this)
  }
  clickBtn(){
    this.props.history.push('/member/login')
  }
  render() { 
    return ( 
      <Fragment>
        <NavBar title="friends"></NavBar>
        <List renderHeader={() => 'My friends'} className="my-list">
        <List.Item extra="10:30" align="top" thumb="/static/img/tom.png" multipleLine onClick={this.clickBtn}>
          Tom
           <List.Item.Brief style={{fontSize:12}}>今天还好吗？</List.Item.Brief>
        </List.Item>
      </List>


      </Fragment>
     );
  }
}
 
export default withRouter(Friends);