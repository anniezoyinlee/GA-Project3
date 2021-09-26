//Dependencies
const mongoose = require("mongoose")

//Environment Variables
const mongoURI = process.env.NODE_ENV === "production" ?
    process.env.MONGODB_URI :
    "mongodb://localhost/sanctuary"

//Connect to mongoDB
mongoose.connect(mongoURI)
    .then((instance) => console.log(`Connected to MongoDB: ${instance.connections[0].name}`))
    .catch((err) => console.error("Failed to connect.", err))

module.exports = mongoose