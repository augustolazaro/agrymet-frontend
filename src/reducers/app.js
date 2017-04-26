import { combineReducers } from 'redux'

import Auth from './auth'
import Application from './application'

export default combineReducers({
  Auth,
  Application
})
