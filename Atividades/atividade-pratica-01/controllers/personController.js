const { default: mongoose } = require("mongoose")
const personModel = require("../models/Person")

const personController = {

    create: async(req, res) => {
        try{

            const person = {
                id: req.body.id,
                name: req.body.name,
                number: req.body.number,
                rg: req.body.rg,
                city_id: req.body.city_id,
                type_id:req.body.type_id
            }
            const response = await personModel.create(person)
            
            res.status(201).json({response, msg: "person successfully registered!"})
        
        }catch(error){

            console.log(error)
        }
    },

    getAll: async(req, res) => {
        try{
            const person = await personModel.find()

            res.json(person)

        }catch(error){
            console.log(error)
        }
    },

    getID: async(req, res) => {
        try {
            
            const id = req.params.id
            const person = await personModel.findById(id)

            if(!person){
                res.status(404).json({msg: "person not found"})
                return
            }
            res.json(person)
        } catch (error) {
            console.log(error)
        }
    },
    
    delete: async (req, res) => {
        try {
            const id = req.params.id;
    
            const person = await personModel.findById(id);
    
            const deletePerson = await personModel.findByIdAndDelete(id);
            
            if (!person) {
                res.status(404).json({ deletePerson, msg: "person not found" });
                return;
            }

            res.status(200).json({ deletePerson, msg: "person removed" });
        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {

        const id = req.params.id

        const person = {
            id: req.body.id,
            name: req.body.name,
            number: req.body.number,
            rg: req.body.rg,
            city_id: req.body.city_id,
            type_id:req.body.type_id
        }

        const updatePerson = await personModel.findByIdAndUpdate(id, person)

        if (!person) {
            res.status(404).json({ updatePerson, msg: "person not found" });
            return;
        }
        res.status(200).json({person, msg: "person updated"})


    }
}

module.exports = personController
