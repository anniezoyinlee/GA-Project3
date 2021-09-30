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
        default: 'https://freepngimg.com/thumb/pokemon/20118-5-pokemon.png',
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true
    }
    // reviews: [String]
}, {
    timestamps: true
})

module.exports = mongoose.model("Pokemon", pokemonSchema);