export const ADD_FARM = 'ADD_FARM'

let nextId = 0
export function addFarm(coords) {
  return {
    type: 'ADD_FARM',
    id: nextId++,
    coords
  }
}
