import React,{Component} from 'react';
import { Icon} from 'antd-mobile';
import loading from './Loading.module.scss'

class Loading extends Component{
  render(){
    return(
      <div className={loading.loading}>
        <Icon type="loading" size="lg"/>
      </div>
    )
  }
}
export default Loading