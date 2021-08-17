const mongoose = require("mongoose")
const Joi = require("joi")
const Schema = mongoose.Schema

// creating the schema
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    lastname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    city: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    country: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    accountCode: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 200
    },
    telephone: {
        type: String,
        required: true,
        minlength: 7,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 2000
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
        firstname: Joi.string().min(5).max(100).required(),
        lastname: Joi.string().min(5).max(100).required(),
        city: Joi.string().min(3).max(100).required(),
        country: Joi.string().min(3).max(100).required(),
        accountCode: Joi.string().min(6).max(200).required(),
        telephone: Joi.string().min(7).max(30).required(),
        email: Joi.string().min(7).max(100).required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }),
        password: Joi.string().min(8).max(100).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        isAdmin: Joi.boolean()
    })

    return schema.validate(user)
}

// exports
module.exports.User = User
module.exports.validate = validate