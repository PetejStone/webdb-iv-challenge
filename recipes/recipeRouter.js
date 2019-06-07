// endpoints here

const Recipes = require('./recipeModel.js')
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    //res.send('hello world')
    Recipes.find()
    .then(recipes => {
      res.status(200).json({recipes})
    })
    .catch(err => {
      res.status(500).json({message: err})
    })
  })
  
router.get('/:id', validateRecipeId, async (req, res) => {

   Recipes.findById(req.params.id)
    .then(recipe => {
        res.status(200).json({recipe})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})
  
router.post('/', validatePost, (req,res) => {
    Recipes.add(req.body)
    .then(newItem => {    
        res.status(201).json({newItem})
    })
    .catch(err => {
     
        res.status(500).json({message: err})
        
    })
})
  
router.delete('/:id', validateRecipeId, async (req, res) => {
    Recipes.remove(req.params.id)
    .then(recipe => {

        res.status(200).json({message: 'You have deleted this item'})
    
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
 })
  
router.put('/:id', validateRecipeId, validatePost, async (req, res) => { 
    Recipes.update(req.params.id, req.body)
    .then(recipe => {
        res.status(200).json({recipe})
    })
    .catch(err => {
        res.status(500).json({message: err})    
    })
})

  async function validateRecipeId( req, res, next) {
 
    const id = await Recipes.findById(req.params.id);
  if (id.length !== 0) {
    next()
  } else {
    res.status(400).json({message: "Invalid Recipe id"})
  }
  };

  function validatePost(req, res, next) {
    const body = Object.keys(req.body);//converts object to array to get length
    const recipe = req.body;
    if (recipe && recipe.name || recipe.dishes_id ) {
      next();
    }
    if (body.length <= 0)  {
      res.status(400).json({message: 'missing recipe data'})
    }
    if ( !recipe.name ) {
      res.status(400).json({message: 'missing required name field'})
    }
    if ( !recipe.dishes_id ) {
        res.status(400).json({message: 'missing required dishes_id field'})
      }
  };

  module.exports = router;