
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'ground beef'},
        { name: 'cheddar cheese'},
        { name: 'corn tortillas'},
        { name:  'taco seasoning'},
        { name: 'flour'},
        { name: 'mozzerella cheese'},
        { name: 'pizza sauce'},
        { name: 'water'},
        { name: 'diced pepperoni'},
       
      ]);
    });
};
