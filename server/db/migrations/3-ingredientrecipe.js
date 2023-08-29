export function up(knex) {
  return knex.schema.createTable('ingredientrecipe', (table) => {
    table.increments('id')
    table.integer('ingredients_id').references('ingredients.id')
    table.integer('recipes_id').references('recipes.id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('ingredientrecipe')
}
