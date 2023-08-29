export function up(knex) {
  return knex.schema.createTable('location', (table) => {
    table.increments('id')
    table.string('name')
  })
}

export function down(knex) {
  return knex.schema.dropTable('location')
}
