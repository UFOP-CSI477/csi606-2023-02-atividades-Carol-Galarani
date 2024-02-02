const { default: mongoose } = require("mongoose")
const locationModel = require("../models/Location")

const locationController = {

    create: async(req, res) => {
        try{

            const location = {
                id: req.body.id,
                name: req.body.name,
                street: req.body.street,
                complement: req.body.complement,
                city_id: req.body.city_id
            }
            const response = await locationModel.create(location)
            
            res.status(201).json({response, msg: "location successfully registered!"})
        
        }catch(error){

            console.log(error)
        }
    },

    getAll: async(req, res) => {
        try{
            const location = await locationModel.find()

            res.json(location)

        }catch(error){
            console.log(error)
        }
    },

    getID: async(req, res) => {
        try {
            
            const id = req.params.id
            const location = await locationModel.findById(id)

            if(!location){
                res.status(404).json({msg: "location not found"})
                return
            }
            res.json(location)
        } catch (error) {
            console.log(error)
        }
    },
    
    delete: async (req, res) => {
        try {
            const id = req.params.id;
    
            const location = await locationModel.findById(id);
    
            if (!location) {
                res.status(404).json({ deleteLocation, msg: "location not found" });
                return;
            }
    
            const deleteLocation = await locationModel.findByIdAndDelete(id);
            res.status(200).json({ deleteLocation, msg: "location removed" });
        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {

        const id = req.params.id

        const location = {
            id: req.body.id,
            name: req.body.name,
            street: req.body.street,
            complement: req.body.complement,
            city_id: req.body.city_id
        }

        const updateLocation = await locationModel.findByIdAndUpdate(id, location)

        if (!location) {
            res.status(404).json({ updateLocation, msg: "location not found" });
            return;
        }
        res.status(200).json({location, msg: "location updated"})


    }
}

module.exports = locationController