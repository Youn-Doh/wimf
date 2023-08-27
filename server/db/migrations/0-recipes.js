export function up(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id')
    table.string('image')
    table.string('name')
    table.string('ingredients')
    table.string('reference')
    table.string('pairing')
  })
}

export function down(knex) {
  return knex.schema.dropTable('recipes')
}
