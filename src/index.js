import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import AppReducer from './reducers/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(
  AppReducer
)

console.log(store.getState())

ReactDOM.render(
  <Provider store={ store }>
    <App logged={true} />
  </Provider>,
  document.getElementById('root')
)
