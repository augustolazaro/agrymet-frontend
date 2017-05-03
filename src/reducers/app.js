import { combineReducers } from 'redux'

import Auth from './auth'
import Application from './application'
import Reports from './reports'

export default combineReducers({
  Auth,
  Application,
  Reports
})
