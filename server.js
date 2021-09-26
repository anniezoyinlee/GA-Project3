const express = require('express')
const app = express();
const cors = require('cors');
const Pokemon = require("./models/Pokemon")
const seedData = require("./database/seeds.json")

// controllers
const pokemonController = require('./controllers/pokemons');

// Importing Schema

// middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Configure the route middleware
app.use('/api/pokemons', pokemonController);

// cors
app.use(cors())

// Sample homepage

app.get("/", (req, res, next) => {
    Pokemon.deleteMany()
        .then(() => Pokemon.insertMany(seedData))
        .then(console.log)
        .catch(console.error)
    res.send("Hello World!")
})

app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), () => {
    console.log("Listening on Port " + app.get("port"))
})