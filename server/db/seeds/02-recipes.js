export async function seed(knex) {
  await knex('recipes').insert([
    { id: 1, name: 'Buldak', image: '', description: 'url' },
    { id: 2, name: 'Carbonara', image: '', description: 'url' },
  ])
}
