const mongoose = require("mongoose")

const {Schema} = mongoose

const citySchema = new Schema({
    id: {
        type: Number,
        required: true
    }, 
    name: {
        type: String,
        required: true
    }, 
    state_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State',
        required: true
    }
},{timestamps: true})

const city = mongoose.model("City", citySchema)

module.exports = city