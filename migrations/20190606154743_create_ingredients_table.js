
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        //fn that makes primary key called id, auto increments and is an integer
        tbl.increments()
  
        //fns that make a varchar called name, with 128 length, is unique, and not null
        tbl.string('name', 128)
        .notNullable()
        


        
        
    })
};

exports.down = function(knex, Promise) {
    return knex.scheme.dropTableIfExists('ingredients')
};
