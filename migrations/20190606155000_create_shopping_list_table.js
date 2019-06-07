
exports.up = function(knex, Promise) {
    return knex.schema.createTable('shopping_list', function(tbl) {
      
      tbl.increments()
  
  
      //foregin key table
      tbl
      .integer('recipe_ingredients')
      .unsigned()
      .references('id')
      .inTable('recipe_ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.scheme.dropTableIfExists('shopping_list')
  };
  
  