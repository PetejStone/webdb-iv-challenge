// endpoints here

const Dishes = require('./dishesModel.js')
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    //res.send('hello world')
    Dishes.find()
    .then(dishes => {
      res.status(200).json({dishes})
    })
    .catch(err => {
      res.status(500).json({message: err})
    })
  })
  
router.get('/:id', validateDishId, async (req, res) => {

   Dishes.findById(req.params.id)
    .then(dish => {
        res.status(200).json({dish})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})
  
router.post('/', validatePost, (req,res) => {
    Dishes.add(req.body)
    .then(newItem => {    
        res.status(201).json({newItem})
    })
    .catch(err => {
     
        res.status(500).json({message: err})
        
    })
})
  
router.delete('/:id', validateDishId, async (req, res) => {
    Dishes.remove(req.params.id)
    .then(dish => {

        res.status(200).json({message: 'You have deleted this item'})
    
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
 })
  
router.put('/:id', validateDishId, validatePost, async (req, res) => { 
    Dishes.update(req.params.id, req.body)
    .then(dish => {
        res.status(200).json({dish})
    })
    .catch(err => {
        res.status(500).json({message: err})    
    })
})

  async function validateDishId( req, res, next) {
 
    const id = await Dishes.findById(req.params.id);
  if (id.length !== 0) {
    next()
  } else {
    res.status(400).json({message: "Invalid dish id"})
  }
  };

  function validatePost(req, res, next) {
    const body = Object.keys(req.body);//converts object to array to get length
    const dish = req.body;
    if (dish && dish.name) {
      next();
    }
    if (body.length <= 0)  {
      res.status(400).json({message: 'missing dish data'})
    }
    if ( !dish.name ) {
      res.status(400).json({message: 'missing required name field'})
    }
  };

  module.exports = router;