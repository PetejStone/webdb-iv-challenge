
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { dishes_id: 1,
          name: `Stan's Tacos`},

        { dishes_id: 1,
          name: 'Texas Tacos'},

        { dishes_id: 2,
          name: `Aunt Mae's Pizza`},

        { dishes_id: 2,
          name: `Pete's Pizza`},

        { dishes_id: 3,
          name: 'Worst Beef Stew Ever'}
      ]);
    });
};
