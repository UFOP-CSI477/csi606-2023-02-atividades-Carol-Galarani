const { default: mongoose } = require("mongoose")
const cityModel = require("../models/City")
const stateModel = require("../models/State")

const cityController = {

    create: async (req, res) => {
        try {
           
            const city = await cityModel.create({
                id: req.body.id,
                name: req.body.name,
                state_id: req.body.state_id
            })
            const response = await cityModel.create(city)

            res.status(201).json({ response, msg: 'City successfully registered!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating city.' });
        }
    },

    getAll: async(req, res) => {
        try{
            const city = await cityModel.find()

            res.json(city)

        }catch(error){
            console.log(error)
        }
    },

    getID: async(req, res) => {
        try {
            
            const id = req.params.id
            const city = await cityModel.findById(id)

            if(!city){
                res.status(404).json({msg: "city not found"})
                return
            }
            res.json(city)
        } catch (error) {
            console.log(error)
        }
    },
    
    delete: async (req, res) => {
        try {
            const id = req.params.id;
    
            const city = await cityModel.findById(id);
    
            if (!city) {
                res.status(404).json({ msg: "City not found" });
                return;
            }
    
            const deleteCity = await cityModel.findByIdAndDelete(id);
            res.status(200).json({ deleteCity, msg: "City removed" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Internal server error" });
        }
    },
    

    update: async (req, res) => {

        const id = req.params.id

        const city = {
            id: req.body.id,
            name: req.body.name,
            state_id: req.body.state_id,
        }

        const updateCity = await cityModel.findByIdAndUpdate(id, city)

        if (!city) {
            res.status(404).json({ updateCity, msg: "city not found" })
            return;
        }
        res.status(200).json({city, msg: "city updated"})


    }
}

module.exports = cityController
