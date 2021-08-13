const mongoose = require("mongoose")
const Joi = require("joi")
const Schema = mongoose.Schema

// creating the schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 7,
        max: 100
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 1500
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    date : {
        type: Date,
        default: Date.now
    }
})

// the model
const User = mongoose.model("user", userSchema)

// input validation
const validate = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(100).required(),
        email: Joi.string().min(7).max(100).required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }),
        password: Joi.string().min(8).max(100).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        isAdmin: Joi.boolean()
    })

    return schema.validate(user)
}

// exports
module.exports.User = User
module.exports.validate = validate