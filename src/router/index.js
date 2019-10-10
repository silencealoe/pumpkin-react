import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import React from 'react'
import App from '../App'
import Register from '../views/member/register/register'
import Login from '../views/member/login/login'
import Member from '../views/member/member'
import Index from '../views/index/index'
import Friends from '../views/friends/friends'

var router = (
  <Router>
    <App>
      <Switch>
        <Route path="/" component={Index} exact></Route>
        <Route path="/friends" component={Friends} exact></Route>
        <Route path="/friends/detail" component={Friends} exact></Route>
        <Route path="/member" component={Member} exact ></Route>
        <Route path="/member/register" component={Register}></Route>
        <Route path="/member/login" component={Login}></Route>
      </Switch>
    </App>
  </Router>
)
export default router