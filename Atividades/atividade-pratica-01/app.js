const express = require("express")
const cors = require("cors")
const app = express()

//DB connection
const connection = require("./db/connect")
connection()

app.use(cors())
app.use(express.json())


//routes
const routes = require("./routes/router")
app.use("/api", routes)

app.listen(5000, function(){
    console.log("Running app")
})

