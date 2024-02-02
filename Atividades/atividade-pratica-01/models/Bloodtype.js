const mongoose = require("mongoose")

const {Schema} = mongoose

const bloodtypeSchema = new Schema({
    id: {
        type: Number,
        required: true
    }, 
    type: {
        type: String,
        required: true
    },
    factor: {
        type: String,
        required: true
    }
}, {timestamps: true})

const bloodtype = mongoose.model("Bloodtype", bloodtypeSchema)

module.exports = bloodtype
