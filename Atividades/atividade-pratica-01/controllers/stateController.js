const { default: mongoose } = require("mongoose")
const StateModel = require("../models/State")

const stateController = {

    create: async(req, res) => {
        try {

            const state = {
                id: req.body.id,
                name: req.body.name,
                abbreviation: req.body.abbreviation
            } 
            const response = await StateModel.create(state)
        
            res.status(201).json({response, msg: "State successfully registered!"})
        
        } catch (error) {
            
            console.log(error)
        }
    },

    getAll: async(req, res) => {
        try {
            
            const state = await StateModel.find()

            res.json(state)

        } catch (error) {
            console.log(error)
        }
    },

    getID: async(req, res) => {
        try{
            
            const id = req.params.id
            const state = await StateModel.findById(id)

            if(!state){
                res.json(4-4).json({msg: "donation not found"})
                return
            }
            res.json(state)

        }catch(error){
            console.log(error)
        }
    },

    delete: async(req, res) => {
        try {
            
            const id = req.params.id

            const state = await StateModel.findById(id)

            if(!state){
                res.json(4-4).json({msg: "donation not found"})
                return
            }

            const deleteState = await StateModel.findByIdAndDelete(id)
            res.status(200).json({ deleteState, msg: "state removed" });
        } catch (error) {
            console.log(error);
        }
    }, 
    
    update: async(req, res) => {
        
        const id = req.params.id
        
        const state = {
            id: req.body.id,
            name: req.body.name,
            abbreviation: req.body.abbreviation
        }

        const updateState = await StateModel.findByIdAndUpdate(id, state)

        if (!state) {
            res.status(404).json({ updateState, msg: "state not found" });
            return;
        }
        res.status(200).json({state, msg:"state updated"})
    }
}

module.exports = stateController