import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import footer from './FooterTab.module.scss'

class FooterTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bardata:['life','koubei','friends','my']
    };
  }
  render() {
    return <div>
        <ul className={footer.footerbar}>
          <li>
            <NavLink  activeClassName={footer.active} to="/" exact>
              life
            </NavLink>
          </li>
         <li>
         <NavLink  activeClassName={footer.active} to="/b" exact>
            koubei
          </NavLink>   
        </li>  
        <li>
        <NavLink  activeClassName={footer.active} to="/a" exact>
            friends
          </NavLink>
        </li>
        <li>
          <NavLink  activeClassName={footer.active} to="/member" exact>
            my
          </NavLink>
          </li>
        </ul>
      </div>

    
  }
}
export default FooterTab
