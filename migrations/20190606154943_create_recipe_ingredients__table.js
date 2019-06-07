
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', function(tbl) {
        //fn that makes primary key called id, auto increments and is an integer
        tbl.increments()
     
        //foregin key table
        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipies')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        
    

        //foregin key table
        tbl
        .integer('ingredients_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        //floating points number for quantity
        tbl.float('quantity', 128)
        .notNullable()
     
 
    })
};

exports.down = function(knex, Promise) {
    return knex.scheme.dropTableIfExists('recipe_ingredients')
};
