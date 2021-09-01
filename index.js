require("dotenv").config()
require("express-async-errors")

// imports
const express = require('express')
const app = express()
const connection = require("./db")
const cors = require("cors")

// importing routes
const signup = require("./controllers/signup")
const login = require("./controllers/login")
const user = require("./routes/user")
const goods = require("./routes/goods")
const brokers = require("./routes/brokers")
const clients = require("./routes/clients")
const quotes = require("./routes/quotes")
const emails = require("./routes/emails")
// const register = require("./controllers/signup")

// the database
connection()

// middlewares
app.use(cors())
app.use(express.json())
app.use("/api/signup", signup)
app.use("/api/login", login)
app.use("/api/users", user)
app.use("/api/goods", goods)
app.use("/api/signup", signup)
app.use("/api/brokers", brokers)
app.use("/api/clients", clients)
app.use("/api/quotation", quotes)
app.use("/api/emails", emails)

// port 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening to port : ${port}`))