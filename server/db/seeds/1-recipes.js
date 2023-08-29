export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([
    { id: 1, name: 'Buldak', image: '', description: 'url' },
    { id: 2, name: 'Carbonara', image: '', description: 'url' },
  ])
}
