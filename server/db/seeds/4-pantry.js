export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('pantry').insert([
    { id: 1, name: 'Kumara noodles', image: '', unit: '1 bag', recipe_id: 1 },
    { id: 2, name: 'White fungus', image: '', unit: 'half bag', recipe_id: 1 },
    { id: 3, name: 'Pancake mix', image: '', unit: '1 carton', recipe_id: 1 },
  ])
}
