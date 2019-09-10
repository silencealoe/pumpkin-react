import React,{Component} from 'react'

class Member extends Component{
  render(){
    return <div>
      {
        this.props.children
      }

    </div>
  }
}
export default Member