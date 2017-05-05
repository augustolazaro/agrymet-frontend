import { combineReducers } from 'redux'

import Auth from './auth'
import Application from './application'
import Reports from './reports'
import farms from './farms'

export default combineReducers({
  Auth,
  Application,
  Reports,
  farms
})
