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
            <NavLink  activeClassName={footer.active} to="/c" replace>
              life
            </NavLink>
          </li>
         <li>
         <NavLink  activeClassName={footer.active} to="/b" replace>
            koubei
          </NavLink>   
        </li>  
        <li>
        <NavLink  activeClassName={footer.active} to="/a" replace>
            friends
          </NavLink>
        </li>
        <li>
          <NavLink  activeClassName={footer.active} to="/member" replace>
            my
          </NavLink>
          </li>
        </ul>
      </div>

    
  }
}
export default FooterTab
