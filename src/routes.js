import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './App'
import CreateUser from './CreateUser'
import Login from './Login'
import Chat from './Chat'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={CreateUser}/>
      <Route path='/login' component={Login}/>
      <Route path='/chat' component={Chat}/>
    </Route>
  </Router>
)

export default routes
