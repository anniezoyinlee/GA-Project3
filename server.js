const express = require('express');
const app = express();
const cors = require('cors');
const Pokemon = require("./models/Pokemon");
const User = require("./models/User")
const seedData = require("./database/seeds.json");

// controllers
const userController = require('./controllers/users');
const pokemonController = require('./controllers/pokemons');

// Require the error handlers
const {
    handleErrors,
    handleValidationErrors
} = require('./middleware/custom_errors');

// middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Configure the route middleware
app.use('/api', userController);
app.use('/api/pokemons', pokemonController);

// cors
const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions))

// Sample homepage
app.get("/", (req, res, next) => {
    Pokemon.deleteMany()
    console.log(seedData)
        .then(() => Pokemon.insertMany(seedData))
        .then(() => Pokemon.updateMany({}, {
            "$set": {
                owner: "61526cf1fe14bc2bf5b7dfce"
            }
        }))
    // .then(console.log)
    res.send("Hello World!")
});

// Handling Errors 
app.use(handleValidationErrors);
app.use(handleErrors);

app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), () => {
    console.log("Listening on Port " + app.get("port"))
});