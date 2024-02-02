const mongoose = require("mongoose")
const {Schema} = mongoose

const locationSchema = new Schema({
    id: {
        type: Number,
        required: true
    }, 
    name: {
        type: String,
        required: true
    }, 
    street: {
        type: String,
        required: true
    }, 
    complement: {
        type: String,
        required: true
    }, 
    city_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true
    }
}, {timestamps: true})

const location = mongoose.model("Location", locationSchema)

module.exports = location