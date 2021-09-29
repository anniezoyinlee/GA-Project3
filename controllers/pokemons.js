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
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  Pokemon.find()
    .populate("owner", "email -_id")
    .then((pokemons) => res.json(pokemons))
    .catch(next)
});

// SHOW
router.get('/:id', handleValidateId, (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  Pokemon.findById(req.params.id)
    .populate("owner")
    .then(handleRecordExists)
    .then((pokemon) => {
      res.json(pokemon);
    })
    .catch(next);
});

// CREATE
router.post('/', requireToken, (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
  Pokemon.create({
      ...req.body,
      owner: req.user._id
    })
    .then((pokemon) => res.status(201).json(pokemon))
    .catch(next);
});

// UPDATE
router.put('/:id', handleValidateId, requireToken, (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
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
router.delete('/:id', handleValidateId, requireToken, (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
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