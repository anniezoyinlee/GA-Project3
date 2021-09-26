const Pokemon = require("../models/Pokemon")
const seedData = require("./seeds.json")

Pokemon.deleteMany()
    .then(() => Pokemon.insertMany(seedData))
    .then(console.log)
    .catch(console.error)
    .finally(process.exit)