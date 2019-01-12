
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'brown ground beef'},
        {ingredient_name: 'regular ground beef'},
        {ingredient_name: 'taco shells'},
        {ingredient_name: 'salsa'},
        {ingredient_name: 'pizza dough'},
        {ingredient_name: 'paddy'},
        {ingredient_name: 'cheese'}
      ]);
    });
};
