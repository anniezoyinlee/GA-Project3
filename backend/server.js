const express = require('express')
const app = express();
const cors = require('cors');

// Importing Schema

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cors
app.use(cors())

// Importing seeds

// seed route

// controllers


app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), () => {
    console.log("Listening on Port" + app.get("port"))
})