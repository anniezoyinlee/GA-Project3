const express = require('express');
const {
  requireToken
} = require('../middleware/auth');
const Pokemon = require('../models/Pokemon');
const {
  handleValidateId,
  handleRecordExists,
  handleValidateOwnership
} = require('../middleware/custom_errors');
const router = express.Router();

// INDEX
router.get('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://powerful-taiga-16157.herokuapp.com')
  Pokemon.find()
    .then((pokemons) => res.json(pokemons))
    .catch(next)
});

// SHOW
router.get('/:id', handleValidateId, (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://powerful-taiga-16157.herokuapp.com')
  Pokemon.findById(req.params.id)
    .then(handleRecordExists)
    .then((pokemon) => {
      res.json(pokemon);
    })
    .catch(next);
});

// CREATE
router.post('/', (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://powerful-taiga-16157.herokuapp.com")
  Pokemon.create(req.body)
    .then((pokemon) => res.status(201).json(pokemon))
    .catch(next);
});

// UPDATE
router.put('/:id', handleValidateId, (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://powerful-taiga-16157.herokuapp.com")
  Pokemon.findById(req.params.id)
    .then(handleRecordExists)
    .then((pokemon) => handleValidateOwnership(req, pokemon))
    .then((pokemon) => pokemon.set(req.body).save())
    .then((pokemon) => {
      res.json(pokemon)
    })
    .catch(next);
});

// DESTROY
router.delete('/:id', handleValidateId, (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://powerful-taiga-16157.herokuapp.com")
  Pokemon.findById(req.params.id)
    .then(handleRecordExists)
    .then((pokemon) => handleValidateOwnership(req, pokemon))
    .then((pokemon) => pokemon.remove())
    .then((pokemon) => {
      res.json(pokemon)
      res.sendStatus(204)
    })
    .catch(next);
});

module.exports = router;