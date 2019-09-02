import React,{Component} from 'react';
import './App.css';

import Register from './views/register/register'
import FooterTab from './components/FooterTab/FooterTab'

class App extends Component{
  render(){
    return(
      <div>
        
        {/* <Register></Register> */}
        {
          this.props.children
        }
        <FooterTab></FooterTab>

      </div>
    )
  }
}



export default App;
