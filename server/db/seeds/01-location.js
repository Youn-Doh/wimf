export async function seed(knex) {
  await knex('location').insert([
    { id: 1, name: 'Fridge' },
    { id: 2, name: 'Freezer' },
    { id: 3, name: 'Pantry' },
  ])
}
