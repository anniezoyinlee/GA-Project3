const express = require('express');
const Pokemon = require('../models/Pokemon');
const router = express.Router();

// INDEX
router.get('/', (req, res) => {
  Pokemon.find().then((pokemons) => res.json(pokemons));
});

// SHOW
router.get('/:id', (req, res) => {
  Pokemon.findById(req.params.id)
    .then(pokemon => {
      if (!pokemon) {
        res.sendStatus(404);
      } else {
        res.json(pokemon);
      }
    });
});

// CREATE
router.post('/', (req, res) => {
  Pokemon.create(req.body).then((pokemon) => res.json(pokemon));
});

// UPDATE
router.put('/:id', (req, res) => {
  Pokemon.findOneAndUpdate(
    { _id: req.params.id }, 
    req.body, 
    {new: true,})
      .then((pokemon) => {
        if (!pokemon) {
          res.sendStatus(404);
        } else {
          res.json(pokemon);
        }
      });
});

// DESTROY
router.delete('/:id', (req, res) => {
  Pokemon.findOneAndDelete({_id: req.params.id,})
    .then(pokemon => {
      if (!pokemon) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    });
});

module.exports = router;