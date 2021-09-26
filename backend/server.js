const express = require('express')
const app = express();
const cors = require('cors');

// Importing Schema

// middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())

app.get("/", (req, res, next) => {
    res.send("Hello World!")
})

app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), () => {
    console.log("Listening on Port " + app.get("port"))
})