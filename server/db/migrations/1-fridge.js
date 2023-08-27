export function up(knex) {
  return knex.schema.createTable('fridge', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.string('unit')
    table.integer('recipe_id').references('recipes.id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('fridge')
}
