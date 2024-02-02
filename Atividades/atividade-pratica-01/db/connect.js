const mongoose = require("mongoose")

async function main(){
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect("mongodb+srv://mariafagunde:N54aXLq8bzewCsf5@doacaosanguinea-api.kwjlev6.mongodb.net/?retryWrites=true&w=majority")
        console.log("Data base connected")
    }catch(error){
        console.log(`Erro: ${error}`)
    }

}

module.exports = main;