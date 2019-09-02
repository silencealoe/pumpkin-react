import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import React from 'react'
import App from '../App'
import Register from '../views/register/register'

var router = (
  <HashRouter>
    <App>
      <Switch>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </App>
  </HashRouter>
)
export default router