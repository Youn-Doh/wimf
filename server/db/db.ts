import connection from './connection.js'

// Fridge
export async function getFridge(db = connection) {
  return await db('location')
    .join('ingredients', 'ingredients.location_id', 'location.id')
    .where('ingredients.location_id', 1)
    .select()
}

export async function addToFridge(db = connection) {
  return await db('ingredients').insert(name)
}

export async function deleteFromFridge(id: number, db = connection) {
  return await db('ingredients').where('id', id).delete()
}

export async function editFridgeItem(
  id: number,
  ingredients: string,
  db = connection
) {
  return await db('ingredients')
    .where('id', id)
    .update({ ingredients: ingredients })
}

// Freezer
export async function getFreezer(db = connection) {
  return await db('location')
    .join('ingredients', 'ingredients.location_id', 'location.id')
    .where('ingredients.location_id', 2)
    .select()
}

export async function addToFreezer(db = connection) {
  return await db('ingredients').insert(name)
}

export async function deleteFromFreezer(id: number, db = connection) {
  return await db('ingredients').where('id', id).delete()
}

// Pantry
export async function getPantry(db = connection) {
  return await db('location')
    .join('ingredients', 'ingredients.location_id', 'location.id')
    .where('ingredients.location_id', 3)
    .select()
}

export async function addToPantry(db = connection) {
  return await db('ingredients').insert(name)
}

export async function deleteFromPantry(id: number, db = connection) {
  return await db('ingredients').where('id', id).delete()
}

// Recipe
export async function getRecipes(db = connection) {
  return db('ingredientrecipe').select()
}
