export async function seed(knex) {
  await knex('ingredientrecipe').del()
  await knex('ingredients').del()
  await knex('recipes').del()
  await knex('location').del()
}
