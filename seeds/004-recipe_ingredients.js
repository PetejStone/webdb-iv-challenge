
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1,
         ingredients_id: 1,
         quantity: 1.0},

         {recipe_id: 1,
          ingredients_id: 2,
          quantity: 0.5},

          {recipe_id: 1,
           ingredients_id: 3,
           quantity: 12.0},

           {recipe_id: 1,
            ingredients_id: 4,
            quantity: .25},

            {recipe_id: 2,
            ingredients_id: 1,
            quantity: 1.0},

            {recipe_id: 2,
            ingredients_id: 5,
            quantity: 1.0},

            {recipe_id: 2,
            ingredients_id: 6,
            quantity: 2.0},

            {recipe_id: 2,
            ingredients_id: 7,
            quantity: 0.5},

            {recipe_id: 2,
            ingredients_id: 8,
            quantity: 1.0},

            {recipe_id: 2,
            ingredients_id: 9,
            quantity: 0.5,},

            {recipe_id: 3,
            ingredients_id: 8,
            quantity: 5.0,},

            {recipe_id: 3,
            ingredients_id: 1,
            quantity: 2.0,},

            {recipe_id: 3,
            ingredients_id: 2,
            quantity: 0.5,}

        

      ]);
    });
};
