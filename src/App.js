import React,{Component} from 'react';
import './App.css';
import FooterTab from './components/FooterTab/FooterTab'
import store from './store/index'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      isShow:store.getState().footerShow
    }
    this.storeChange=this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  storeChange(){
    this.setState({
      isShow:store.getState().footerShow
    })
  }
  render(){
    return(
      <div>
        {
          this.props.children
        }
        {
          store.getState().footerShow?
          <FooterTab></FooterTab> : ''
        }
      </div>
    )
  }
}



export default App;
