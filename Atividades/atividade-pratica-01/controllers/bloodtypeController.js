const BloodtypeModel = require("../models/Bloodtype")

const bloodtypeController = {

    create: async(req, res) => {
        try {
            
            const bloodtype = {
                id: req.body.id,
                type: req.body.type,
                factor: req.body.factor
            }

            const response = await BloodtypeModel.create(bloodtype)

            res.status(201).json({response, msg: "Bloodtype successfully registered!"})
        } catch (error) {

            console.log(error)
            
        }
    }, 

    getAll: async(req, res) => {
        try {
            
            const bloodtype = await BloodtypeModel.find()

            res.json(bloodtype)

        } catch (error) {

            console.log(error)
            
        }
    },

    getID: async(req, res) => {
        try {
            
            const id = req.params.id
            const bloodtype = await BloodtypeModel.findById(id)

            if(!bloodtype){
                res.status(4-4).json({msg: "blood type not found"})
                return
            }
            res.json(bloodtype)
        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req,res) => {
        try {

            const id = req.params.id
            const bloodtype = await BloodtypeModel.findById(id)

            if(!bloodtype){
                res.status(4-4).json({msg: "blood type not found"})
                return
            }

            const deleteBloodtype = await BloodtypeModel.findByIdAndDelete(id)
            res.status(200).json({deleteBloodtype, msg:"blood type removed"})
            
        } catch (error) {
            console.log(error)
        }
    },

    update: async (req, res) => {
        
        const id = req.params.id

        const bloodtype = {
            id: req.body.id,
            type: req.body.type,
            factor: req.body.factor
        }

        const updateBloodtype = await BloodtypeModel.findByIdAndUpdate(id)

        if (!bloodtype) {
            res.status(404).json({ updateBloodtype, msg: "blood type not found" });
            return;
        }
        res.status(200).json({bloodtype, msg: "blood type updated"})
    }

}

module.exports = bloodtypeController