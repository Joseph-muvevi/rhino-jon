const mongoose = require("mongoose")
const Joi = require("joi")
const Schema = mongoose.Schema

// the schema
const quoteSchema = new Schema({
    title: {
        type : String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    company: {
        type : String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    email: {
        type : String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    phone: {
        type : String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    city: {
        type : String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    country: {
        type : String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    message: {
        type : String,
        required: true,
        minlength: 20,
        maxlength: 2000
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// the model
const Quote = mongoose.model('quote', quoteSchema)

// validation
const validate = (quote) => {
    const schema = Joi.object({
        title: Joi.string().min(5).max(100).required(),
        company: Joi.string().min(5).max(100).required(),
        email: Joi.string().min(5).max(100).required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'ke'] } }),
        phone: Joi.string().min(5).max(100).required(),
        city: Joi.string().min(5).max(100).required(),
        country: Joi.string().min(5).max(100).required(),
        message: Joi.string().min(20).max(2000).required()
    })

    return schema.validate(quote)
}

module.exports.Quote = Quote 
module.exports.validate = validate
