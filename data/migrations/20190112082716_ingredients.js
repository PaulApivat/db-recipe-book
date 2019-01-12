
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
      table.increments();
      table.string('ingredient_name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
