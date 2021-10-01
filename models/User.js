// For future update, no feature in frontend yet
const mongoose = require("../database/connection");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    id: false,
    toJSON: {
        virtuals: true,
        transform: (_doc, ret) => {
            delete ret.password
            return ret
        }
    }
})

module.exports = mongoose.model("User", userSchema);