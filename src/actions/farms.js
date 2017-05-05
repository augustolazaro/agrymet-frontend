export const ADD_FARM = 'ADD_FARM'
export const NEW_FARM = 'NEW_FARM'

let nextId = 0
export function addFarm(coords) {
  return {
    type: 'ADD_FARM',
    id: nextId++,
    coords
  }
}

export function newFarm(coords) {
  return {
    type: 'NEW_FARM',
    id: nextId++,
    coords
  }
}
