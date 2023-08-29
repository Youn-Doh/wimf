export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ingredientrecipe').del()
  await knex('ingredientrecipe').insert([
    { id: 1, ingredients_id: 1, recipes_id: 1 },
    { id: 2, ingredients_id: 2, recipes_id: 2 },
  ])
}
