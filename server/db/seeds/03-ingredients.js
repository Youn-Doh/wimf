export async function seed(knex) {
  await knex('ingredients').insert([
    {
      id: 1,
      name: 'Chicken thighs',
      image:
        'https://sargentfarms.ca/cdn/shop/products/thigh_afd36181-2c30-4585-ae58-c4c59ce79578.jpg?v=1588263405',
      units: '800g',
      location_id: 2,
    },
    {
      id: 2,
      name: 'Fresh cream',
      image:
        'https://bellyfull.net/wp-content/uploads/2021/11/Whipped-Cream-blog-2.jpg',
      units: '300ml',
      location_id: 1,
    },
    {
      id: 3,
      name: 'Cabbage',
      image:
        'https://www.veggiefresh.co.nz/cdn/shop/products/1587687891774_1050x700.jpg?v=1644814454',
      units: '1',
      location_id: 1,
    },
    {
      id: 4,
      name: 'Onions',
      image:
        'https://www.southernliving.com/thmb/lz4xg7kerf1aCahRlp4WhLbYi5k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1279120925-1-175489607f764e03be03927e5b90c11a.jpg',
      units: '500g',
      location_id: 3,
    },
    {
      id: 5,
      name: 'Beef mince',
      image:
        'https://static.wixstatic.com/media/40ddac_4d10780e04414414ae35e5856e9eede7~mv2.jpg/v1/fill/w_520,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/40ddac_4d10780e04414414ae35e5856e9eede7~mv2.jpg',
      units: '600g',
      location_id: 2,
    },
  ])
}
