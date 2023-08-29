export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('location').del()
  await knex('location').insert([
    { id: 1, name: 'Fridge' },
    { id: 2, name: 'Freezer' },
    { id: 3, name: 'Pantry' },
  ])
}
