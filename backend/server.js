const express = require('express')
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');

// Importing Schema

// Mongoose configuration
mongoose.connection.on('error', err => console.log(err.message + ' is mongo not running?'));
mongoose.connection.on('disconnected', () => console.log('mongoose is disconnected'));

// mongoose connection
mongoose.connect('mongodb://localhost:27017/animals', { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('connected to mongoose'))

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Importing seeds

// seed route

// controllers


app.listen(PORT, () => {
  console.log(`PORT: ${PORT}`);
})
