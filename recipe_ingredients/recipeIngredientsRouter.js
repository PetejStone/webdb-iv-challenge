// endpoints here

const RecipeIngredients = require('./recipeIngredientsModel.js')
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    //res.send('hello world')
    RecipeIngredients.find()
    .then(recipeIngredients => {
      res.status(200).json({recipeIngredients})
    })
    .catch(err => {
      res.status(500).json({message: err})
    })
  })
  
router.get('/:id', validateRecipeIngredientId, async (req, res) => {

   RecipeIngredients.findById(req.params.id)
    .then(recipeIng => {
        res.status(200).json({recipeIng})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})
  
router.post('/', validatePost, (req,res) => {
    RecipeIngredients.add(req.body)
    .then(newItem => {    
        res.status(201).json({newItem})
    })
    .catch(err => {
     
        res.status(500).json({message: err})
        
    })
})
  
router.delete('/:id', validateRecipeIngredientId, async (req, res) => {
    RecipeIngredients.remove(req.params.id)
    .then(recipe => {

        res.status(200).json({message: 'You have deleted this item'})
    
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
 })
  
router.put('/:id', validateRecipeIngredientId, validatePost, async (req, res) => { 
    RecipeIngredients.update(req.params.id, req.body)
    .then(recipe => {
        res.status(200).json({recipe})
    })
    .catch(err => {
        res.status(500).json({message: err})    
    })
})

  async function validateRecipeIngredientId( req, res, next) {
 
    const id = await RecipeIngredients.findById(req.params.id);
  if (id.length !== 0) {
    next()
  } else {
    res.status(400).json({message: "Invalid Recipe id"})
  }
  };

  function validatePost(req, res, next) {
    const body = Object.keys(req.body);//converts object to array to get length
    const recipeIng = req.body;
    if (recipeIng && recipeIng.recipe_id || recipeIng.ingredients_id ) {
      next();
    }
    if (body.length <= 0)  {
      res.status(400).json({message: 'missing recipe data'})
    }
    if ( !recipeIng.recipeIng_recipe.id ) {
      res.status(400).json({message: 'missing required recipe_id field'})
    }
    if ( !recipeIng.recipeIng_ingredients.id  ) {
        res.status(400).json({message: 'missing required ingredients_id field'})
      }
  };

  module.exports = router;