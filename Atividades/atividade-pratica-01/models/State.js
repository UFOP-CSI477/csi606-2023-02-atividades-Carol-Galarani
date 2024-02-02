const mongoose = require("mongoose")

const {Schema} = mongoose

const stateSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    abbreviation: {
        type: String,
        required: true
    }
}, {timestamps: true})

const state = mongoose.model("State", stateSchema)

module.exports = state