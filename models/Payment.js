// For future update, no feature in frontend yet
const mongoose = require("../database/connection");

const paymentSchema = new mongoose.Schema({
   user: {
     type: Array,
     default: []
   },
   data: {
    type: Array,
    default: []
   },
   pokemon: {
    type: Array,
    default: []
   }
}, { timestamps: true })

module.exports = mongoose.model("Payment", paymentSchema);