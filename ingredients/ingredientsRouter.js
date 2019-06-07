// endpoints here

const Ingredients = require('./ingredientsModel.js')
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    //res.send('hello world')
    Ingredients.find()
    .then(ingredients => {
      res.status(200).json({ingredients})
    })
    .catch(err => {
      res.status(500).json({message: err})
    })
  })
  
router.get('/:id', validateingredientId, async (req, res) => {

   Ingredients.findById(req.params.id)
    .then(ingredient => {
        res.status(200).json({ingredient})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})
  
router.post('/', validatePost, (req,res) => {
    Ingredients.add(req.body)
    .then(newItem => {    
        res.status(201).json({newItem})
    })
    .catch(err => {
     
        res.status(500).json({message: err})
        
    })
})
  
router.delete('/:id', validateingredientId, async (req, res) => {
    Ingredients.remove(req.params.id)
    .then(ingredient => {

        res.status(200).json({message: 'You have deleted this item'})
    
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
 })
  
router.put('/:id', validateingredientId, validatePost, async (req, res) => { 
    Ingredients.update(req.params.id, req.body)
    .then(ingredient => {
        res.status(200).json({ingredient})
    })
    .catch(err => {
        res.status(500).json({message: err})    
    })
})

  async function validateingredientId( req, res, next) {
 
    const id = await Ingredients.findById(req.params.id);
  if (id.length !== 0) {
    next()
  } else {
    res.status(400).json({message: "Invalid ingredient id"})
  }
  };

  function validatePost(req, res, next) {
    const body = Object.keys(req.body);//converts object to array to get length
    const ingredient = req.body;
    if (ingredient && ingredient.name) {
      next();
    }
    if (body.length <= 0)  {
      res.status(400).json({message: 'missing ingredient data'})
    }
    if ( !ingredient.name ) {
      res.status(400).json({message: 'missing required name field'})
    }
  };

  module.exports = router;