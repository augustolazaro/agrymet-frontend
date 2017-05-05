import { ADD_FARM } from '../actions/farms'

const farm = (state = {}, action) => {
  switch (action.type) {
    case ADD_FARM:
      return {
        id: action.id,
        coords: action.coords
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
        farm(undefined, action)
      ]
    default:
      return state
  }
}

export default farms
