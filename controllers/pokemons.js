const express = require('express');
const {
  requireToken
} = require('../middleware/auth');
const Pokemon = require('../models/Pokemon');
const {
  handleValidateId,
  handleRecordExists
} = require('../middleware/custom_errors');
const router = express.Router();

// INDEX
router.get('/', (req, res, next) => {
  Pokemon.find()
    .then((pokemons) => res.json(pokemons))
});

// SHOW
router.get('/:id', handleValidateId, (req, res, next) => {
  Pokemon.findById(req.params.id)
    .then(handleRecordExists)
    .then((pokemon) => {
      res.json(pokemon);
    })
    .catch(next);
});

// CREATE
router.post('/', requireToken, (req, res, next) => {
  Pokemon.create(req.body)
    .then((pokemon) => res.status(201).json(pokemon))
    .catch(next);
});

// UPDATE
router.put('/:id', handleValidateId, (req, res, next) => {
  Pokemon.findOneAndUpdate({
      _id: req.params.id
    }, req.body, {
      new: true,
    })
    .then(handleRecordExists)
    .then((pokemon) => {
      res.json(pokemon);
    })
    .catch(next);
});

// DESTROY
router.delete('/:id', handleValidateId, (req, res, next) => {
  Pokemon.findOneAndDelete({
      _id: req.params.id,
    })
    .then(handleRecordExists)
    .then((pokemon) => {
      res.sendStatus(204);
    })
    .catch(next);
});

module.exports = router;