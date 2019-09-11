import React,{Component} from 'react'

class Member extends Component{
  render(){
    return <div>
      <h2>mypage</h2>
      {
        this.props.children
      }

    </div>
  }
}
export default Member