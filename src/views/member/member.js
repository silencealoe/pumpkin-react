import React,{Component} from 'react'

class Member extends Component{
  constructor(props){
    super(props)
    console.log('初始化state')
  }

  componentWillMount(){
    console.log('组件将要挂载')
  }
  componentDidMount(){
    console.log('组件挂载完成')
  }
  shouldComponentUpdate(){  //优化组件性能
    console.log('shouldcomponntupdate')
    return true
  }
  componentWillUpdate(){
    console.log('组件将要更新')
  }
  componentDidUpdate(){
    console.log('组件更新完成')
  }
  render(){
    console.log('组件挂载中')
    return <div>
      <h2>mypage</h2>
      {
        this.props.children
      }

    </div>
  }
}
export default Member