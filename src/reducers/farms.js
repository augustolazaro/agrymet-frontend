import { ADD_FARM } from '../actions/farms'

const farm = (state = {}, action) => {
  switch (action.type) {
    case ADD_FARM:
      return {
        id: action.id,
        coords: actions.coords
      }
    default:
      return state
  }
}

const farms = (state = [], action) => {
  switch (action.type) {
    case ADD_FARM:
      return [
        ...state,
        todo(undefined, action)
      ]
    default:
      return state
  }
}

export default farms
