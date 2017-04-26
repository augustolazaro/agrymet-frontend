import { SET_APPLICATION } from '../actions/application'

const initialState = {
  application: 'agrymax'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_APPLICATION:
      console.log(action.type, action.application)
      return { application: action.application }
    default:
      return state
  }
}
