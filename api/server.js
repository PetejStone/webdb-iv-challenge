const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const dishesRouter = require('../dishes/dishesRouter.js')
const recipeRouter = require('../recipes/recipeRouter.js')
const server = express();
//const cors = require('cors');
//global middleware
server.use(express.json());
server.use(helmet());
server.use(logger)
//server.use(cors())
server.use('/api/dishes',  dishesRouter);
server.use('/api/recipes',  recipeRouter);

server.get('/', (req, res) => {
    res.send('server is working!')
});

function logger(req, res, next) {
  console.log(`${req.method} was requested at ${req.url} on [${new Date().toISOString()}]`)
  next();
};



module.exports = server;