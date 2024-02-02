const mongoose = require("mongoose")
const {Schema} = mongoose

const personSchema = new Schema({
    id: {
        type: Number,
        required: true
    }, 
    name: {
        type: String,
        required: true
    }, 
    number: {
        type: Number,
        required: true
    }, 
    rg: {
        type: String,
        required: true
    }, 
    city_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true
    }, 
    type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bloodtype',
        required: true
    }
}, {timestamps: true})

const person = mongoose.model("Person", personSchema)

module.exports = person