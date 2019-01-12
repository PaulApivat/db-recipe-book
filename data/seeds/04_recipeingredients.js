
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeingredients').insert([
        {dish_id: 1, recipe_id: 1, ingredients_id: 1, quantity: 2.3},
        {dish_id: 1, recipe_id: 1, ingredients_id: 3, quantity: 4.5},
        {dish_id: 1, recipe_id: 2, ingredients_id: 2, quantity: 3.3},
        {dish_id: 1, recipe_id: 2, ingredients_id: 3, quantity: 6.3},
        {dish_id: 1, recipe_id: 2, ingredients_id: 4, quantity: 1.5},
        {dish_id: 2, recipe_id: 3, ingredients_id: 5, quantity: 7.7},
        {dish_id: 2, recipe_id: 4, ingredients_id: 5, quantity: 4.4},
        {dish_id: 3, recipe_id: 5, ingredients_id: 6, quantity: 2.2},
        {dish_id: 3, recipe_id: 5, ingredients_id: 7, quantity: 5.8}
      ]);
    });
};
