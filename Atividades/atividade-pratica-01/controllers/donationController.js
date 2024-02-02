const { default: mongoose } = require("mongoose")
const Donation = require("../models/Donation")

const donationController = {

    create: async(req, res) => {
        try{

            const donation = {
                id: req.body.id,
                person_id: req.body.person_id,
                local_id: req.body.local_id
            }
            const response = await Donation.create(donation)
            
            res.status(201).json({response, msg: "Donation successfully registered!"})
        
        }catch(error){

            console.log(error)
        }
    },

    getAll: async(req, res) => {
        try{
            const donation = await Donation.find()

            res.json(donation)

        }catch(error){
            console.log(error)
        }
    },

    getID: async(req, res) => {
        try {
            
            const id = req.params.id
            const donation = await Donation.findById(id)

            if(!donation){
                res.status(404).json({msg: "donation not found"})
                return
            }
            res.json(donation)
        } catch (error) {
            console.log(error)
        }
    },
    
    delete: async (req, res) => {
        try {
            const id = req.params.id;
    
            const donation = await Donation.findById(id);
    
            if (!donation) {
                res.status(404).json({ deleteDonation, msg: "donation not found" });
                return;
            }
    
            const deleteDonation = await Donation.findByIdAndDelete(id);
            res.status(200).json({ deleteDonation, msg: "donation removed" });
        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {

        const id = req.params.id

        const donation = {
            id: req.body.id,
            person_id: req.body.person_id,
            local_id: req.body.local_id
        }

        const updateDonation = await Donation.findByIdAndUpdate(id, donation)

        if (!donation) {
            res.status(404).json({ updateDonation, msg: "donation not found" });
            return;
        }
        res.status(200).json({donation, msg: "donation updated"})


    }
}

module.exports = donationController