import { SET_APPLICATION } from '../actions/application'

const initialState = {
  application: 'agrymax'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_APPLICATION:
      return { application: action.application }
    default:
      return state
  }
}
