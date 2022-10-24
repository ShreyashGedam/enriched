const express = require("express")
const enrichedRouter = require("./routes/enriched")
require("dotenv").config()

const app = express()

app.use(express.json())

app.use('/enriched',enrichedRouter)

app.listen( process.env.PORT , () => {

    console.log("Server is listening to port 8000")
})