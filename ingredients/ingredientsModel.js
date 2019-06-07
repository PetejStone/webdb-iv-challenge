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
    return db('ingredients')
}

function findById(id) {
    return db('ingredients').where({id: id})
}

function update(id, changes) {
    return db('ingredients').where({id: id}).update(changes)
}

function update(id, changes) {
    return db('ingredients').where({id: id}).update(changes)
}

function remove(id) {
    return db('ingredients').where({id: id}).del()
}

function add(body) {
    return db('ingredients').insert(body)
}