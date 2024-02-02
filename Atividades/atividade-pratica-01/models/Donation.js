const mongoose = require("mongoose")

const {Schema} = mongoose
const donationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    person_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },
    local_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    }
}, { timestamps: true });

const donation = mongoose.model("Donation", donationSchema);

module.exports = donation;
