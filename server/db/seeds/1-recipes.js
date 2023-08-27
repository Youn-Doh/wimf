export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('recipes').insert([
    {
      id: 1,
      image: '',
      name: 'Buldak',
      ingredients: 'Chicken thighs',
      reference: 'url',
      pairing: 'Kimchi',
    },
  ])
}
