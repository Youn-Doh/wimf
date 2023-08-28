import connection from './connection.js'

export function getRecipes(db = connection) {
  return db('recipes').select()
}

export function getFridge(db = connection) {
  return db('fridge').select()
}

export function getFreezer(db = connection) {
  return db('freezer').select()
}

export function getPantry(db = connection) {
  return db('pantry').select()
}
