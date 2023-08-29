export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del()
  await knex('ingredients').insert([
    {
      id: 1,
      name: 'Chicken thighs',
      image: '',
      units: '800g',
      location_id: 2,
    },
    {
      id: 2,
      name: 'Fresh cream',
      image: '',
      units: '300ml',
      location_id: 1,
    },
    {
      id: 3,
      name: 'Cabbage',
      image: '',
      units: '1',
      location_id: 1,
    },
    {
      id: 4,
      name: 'Onions',
      image: '',
      units: '500g',
      location_id: 3,
    },
    {
      id: 5,
      name: 'Beef mince',
      image: '',
      units: '600g',
      location_id: 2,
    },
  ])
}
