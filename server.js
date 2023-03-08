const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')


require('dotenv').config()

const PORT = process.env.PORT

mongoose.connect(process.env.DATABASE_URL)


const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));


// MIDDLEWARE
// Body Parser middleware - give us access to req.body
app.use(express.urlencoded({extended: true}))
// captures requests for put and delete and converts them from a post
app.use(methodOverride("_method"))

app.listen(PORT, () => console.log('pitter patter'))