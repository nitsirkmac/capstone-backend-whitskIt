const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const cors = require('cors')
const morgan = require('morgan')


require('dotenv').config()

const PORT = process.env.PORT

mongoose.connect(process.env.DATABASE_URL)


const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));


const WhiskItRecipeSchema = new mongoose.Schema({
    name: String,
    author: String,
    prepTime: String,
    cookTime: String,
    ingredients: String,
    instructions: String,
    image: String,
})

// MIDDLEWARE
// Body Parser middleware - give us access to req.body
app.use(express.urlencoded({extended: true}))
// captures requests for put and delete and converts them from a post
app.use(methodOverride("_method"))
app.use(cors()) // to prevent cors errors, open access to all origins
app.use(morgan("dev")) // logging
app.use(express.json()) // parse json bodies


app.get('/', (req, res) => {
    res.send('whisk me away')
})

app.get('/recipes', (req, res) => {
    res.send('/recipes Index Route')
})

app.listen(PORT, () => console.log('pitter patter'))