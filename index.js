require("dotenv").config()
require("express-async-errors")

// imports
const express = require('express')
const app = express()
const connection = require("./db")

// importing routes
const signup = require("./controllers/signup")
const login = require("./controllers/login")
const user = require("./routes/user")
const goods = require("./routes/goods")
const brokers = require("./routes/brokers")
const clients = require("./routes/clients")
const quotes = require("./routes/quotes")

// the database
connection()

// middlewares
app.use(express.json())
app.use("/api/signup", signup)
app.use("/api/login", login)
app.use("/api/user", user)
app.use("/api/goods", goods)
app.use("/api/brokers", brokers)
app.use("/api/clients", clients)
app.use("/api/quotation", quotes)

// port 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening to port : ${port}`))