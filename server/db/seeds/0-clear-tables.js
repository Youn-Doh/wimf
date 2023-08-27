export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('freezer').del()
  await knex('fridge').del()
  await knex('pantry').del()
  await knex('recipes').del()
}
