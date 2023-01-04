/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('comicData', function(table) {
    table.increments('id')
    table.string('title')
    table.string('year')
    table.string('issue')
    table.string('grade')
    table.string('image_path')
    table.string('verified')
    table.string('note', 5000)
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('comicData')
};
