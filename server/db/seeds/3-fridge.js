export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('fridge').insert([
    { id: 1, name: 'Cabbage', image: '', unit: '1', recipe_id: 1 },
    { id: 2, name: 'Kimchi', image: '', unit: '1 container', recipe_id: 1 },
    { id: 3, name: 'Coriander', image: '', unit: 'half bag', recipe_id: 1 },
  ])
}
