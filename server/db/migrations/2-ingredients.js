export function up(knex) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.string('units')
    table.integer('location_id').references('location.id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('ingredients')
}
