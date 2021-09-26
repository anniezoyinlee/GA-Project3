const express = require('express');
const Pokemon = require('../models/Pokemon');
const router = express.Router();

// INDEX
router.get('/', (req, res, next) => {
  Pokemon.find()
    .then((pokemons) => res.json(pokemons))
    .catch(next);
});

// SHOW
router.get('/:id', (req, res, next) => {
  Pokemon.findById(req.params.id)
    .then((pokemon) => {
      if (!pokemon) {
        res.sendStatus(404);
      } else {
        res.json(pokemon);
      }
    })
    .catch(next);
});

// CREATE
router.post('/', (req, res, next) => {
  Pokemon.create(req.body)
    .then((pokemon) => res.status(201).json(pokemon))
    .catch(next);
});

// UPDATE
router.put('/:id', (req, res, next) => {
  Pokemon.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((pokemon) => {
      if (!pokemon) {
        res.sendStatus(404);
      } else {
        res.json(pokemon);
      }
    })
    .catch(next);
});

// DESTROY
router.delete('/:id', (req, res, next) => {
  Pokemon.findOneAndDelete({
    _id: req.params.id,
  })
    .then((pokemon) => {
      if (!pokemon) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch(next);
});

module.exports = router;