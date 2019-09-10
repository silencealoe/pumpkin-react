import React,{Component} from 'react';
import './App.css';
import FooterTab from './components/FooterTab/FooterTab'

class App extends Component{
  render(){
    return(
      <div>
        {
          this.props.children
        }
        <FooterTab></FooterTab>
      </div>
    )
  }
}



export default App;
