export function up(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.string('description')
  })
}

export function down(knex) {
  return knex.schema.dropTable('recipes')
}
