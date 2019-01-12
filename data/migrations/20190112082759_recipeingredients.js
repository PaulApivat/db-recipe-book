
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeingredients', table => {
      table.increments();
      table.integer('dish_id').unsigned();
      table.foreign('dish_id').references('id').on('dish');
      table.integer('recipe_id').unsigned();
      table.foreign('recipe_id').references('id').on('recipe');
      table.integer('ingredients_id').unsigned();
      table.foreign('ingredients_id').references('id').on('ingredients');
      table.float('quantity');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipeingredients');
};
