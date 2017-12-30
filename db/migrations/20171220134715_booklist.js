
exports.up = function(knex, Promise) {
  return knex.schema.createTable('booklist', table => {
    table.increments();
    table.string('book_name').defaultTo('').notNullable();
    table.string('author').defaultTo('').notNullable();
    table.decimal('rating', 4, 2);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('booklist');
};
