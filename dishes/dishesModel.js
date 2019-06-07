const knex = require('knex');
const knexConfig = {
    client: 'sqlite3',
    connection: {
      filename: './data/dishes.db3'
    },
    useNullAsDefault: true
  }
  const db = knex(knexConfig)


module.exports = {
     find,
     findById,
     update,
     remove, 
     add
}

function find() {
    return db('dishes')
}

// function getUserPosts(userId) {
//     return db('posts as p')
//       .join('users as u', 'u.id', 'p.user_id')
//       .select('p.id', 'p.text', 'u.name as postedBy')
//       .where('p.user_id', userId);
//   }
function findById(id) {
    return db('dishes').where({id: id})
    .then( res => {
    return db('recipes')
    .join('dishes', 'dishes.id', 'recipes.dishes_id')
    .select('recipes.id', 'recipes.name')
    .where('recipes.dishes_id', id)
     } )
    
    
}

function update(id, changes) {
    return db('dishes').where({id: id}).update(changes)
}

function update(id, changes) {
    return db('dishes').where({id: id}).update(changes)
}

function remove(id) {
    return db('dishes').where({id: id}).del()
}

function add(body) {
    return db('dishes').insert(body)
}