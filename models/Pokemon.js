const mongoose = require("../database/connection");

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    // reviews: [String]
}, {
    timestamps: true
})

module.exports = mongoose.model("Pokemon", pokemonSchema); 