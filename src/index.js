import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, HashRouter } from 'react-router-dom'
import Root from './containers/Root'
import Farm from './containers/Farm'

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={Root} />
      <Route path='/farm' component={Farm} />
    </div>
  </HashRouter>,
  document.getElementById('root')
)
