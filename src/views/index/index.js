import React,{Component,Fragment} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import ListItem from '../../components/listItem'
import {CSSTransition} from 'react-transition-group'
class Index extends Component{
  constructor(props){
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.state={
      isLogin:true,
      inputVal:'',
      username:'',
      addlist:[],
      addlist2:[],
      isShow:false
    }
  }
 handleAdd(){
   this.setState({
     addlist2:[...this.state.addlist2,this.state.inputVal],
     inputVal:''
   },()=>{  //在虚拟dom执行完成之后执行
     console.log(this.p1.querySelectorAll('div').length)
   })


 }
 
 componentDidMount(){
   console.log('挂载完成')
   axios.get('http://rap2api.taobao.org/app/mock/232506/huitest',{
     params:{
       userid:100001
     }
   }).then(res=>{
    //  console.log('获取数据成功',res.data)
    this.setState({
      username:res.data.username
    })

   })
   
 }
 shouldComponentUpdate(){
  console.log('shouldcomponntupdate')
  return true
}
componentWillUpdate(){
  console.log('组件将要更新')
}
componentDidUpdate(){
  console.log('组件更新完成')
}
 handleChange(e){
   this.setState({   //异步完成，虚拟dom渲染需要一定的时间
     inputVal:this.input1.value
   })
 }
 deleteItem(index){
   console.log(index)
   let list = this.state.addlist2
   list.splice(index,1)
   this.setState({
     addlist2:list
   })
   

 }
 handleBtn(){
   this.setState({
     isShow:!this.state.isShow
   })
 }
  render(){
    console.log('挂载中')
    return( <Fragment>
      <NavBar title="index"></NavBar>
    <h2>welcome--{this.state.username}</h2>
     {/* <input type="text" value={this.state.inputVal} onChange={this.handleChange.bind(this)}/> */}
      {/* <button onClick={this.handleAdd}>添加</button> */}
      <ul>
        {
          this.state.addlist.map((item,index)=>(
            <li onClick={this.handleDelete.bind(this,index)} key={item+index}>{item}</li>

          )
          )


        }
      </ul>
      <input type="text" value={this.state.inputVal} onChange={this.handleChange.bind(this)} ref={(input)=>{this.input1=input}}/>
      <button onClick={this.handleAdd}>添加2</button>
      <div ref={(p)=>{this.p1=p}}>
      {
       this.state.addlist2.map((item,index)=>(
         <ListItem content={item} key={item+index} index={index} deleteItem={this.deleteItem.bind(this,index)}></ListItem>

       )
       ) 
      }

      </div>

      <button className="bossbtn" onClick={this.handleBtn.bind(this)}>召唤Boss</button>
      <CSSTransition in={this.state.isShow} timeout={2000} classNames="boss-text" className="boss" unmountOnExit>
        <h2 className={this.state.isShow?'show':'hide'}>我是Boss</h2>
      </CSSTransition>
    
    </Fragment>
    )
  }
  componentWillMount(){
    console.log('assdsf')
    axios.get('/index').then(res=>{
      console.log(res.data)
      if(res.data.login){
        this.setState({
          username:res.data.username
        })
      } else {
        console.log()
        this.props.history.push('/member/login')
      }
  
    })
    
  }
}

//propTypes校验传递的值


export default withRouter(Index)

//单向数据流

//函数式编程

//生命周期


