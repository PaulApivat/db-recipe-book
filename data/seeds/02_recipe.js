
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {recipe_name: 'cali tacos', dish_id: 1, instructions:JSON.stringify(['Brown Ground Beef', 'Warm Taco Shells', 'Put Together Taco']) },
        {recipe_name: 'mex tacos', dish_id: 1, instructions:JSON.stringify(['Regular Ground Beef', 'Hard Taco Shells', 'Add Salsa'])},
        {recipe_name: 'nyc pizza', dish_id: 2, instructions:JSON.stringify(['Flatten Pizza Dough', 'Bake @ 450 for 30 minutes', 'Cut Into 8 Slices'])},
        {recipe_name: 'chicago pizza', dish_id: 2, instructions:JSON.stringify(['Roll Pizza Dough', 'Over Bake for 60 minutes', 'Fill Deep Dish'])},
        {recipe_name: 'hamburger', dish_id: 3, instructions:JSON.stringify(['Grill Paddy', 'Regular Ground Beef', 'Melt Cheese'])}
      ]);
    });
};
