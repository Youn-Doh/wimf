export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('freezer').insert([
    { id: 1, name: 'Chicken thighs', image: '', unit: '800g', recipe_id: 1 },
    { id: 2, name: 'Pork mince', image: '', unit: '300g', recipe_id: 1 },
    {
      id: 3,
      name: 'Thai Fish cake',
      image: '',
      unit: '1 container',
      recipe_id: 1,
    },
  ])
}
