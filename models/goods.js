const mongoose = require("mongoose")
const Joi = require("joi")
const Schema = mongoose.Schema

// creating the goodsschema
const goodsSchema = new Schema({
    number : {
        type: Number,
        dafault: 1
    }, 
    goodsTitle: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    to: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    from: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    currentLocation: {
        type: String,
        minlength: 5,
        maxlength: 255
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    ETD: {
        // I will change to date though
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// the goods model
const Goods = mongoose.model("goods", goodsSchema)

// input validation
const validate = (goods) => {
    const schema = Joi.object({
        number: Joi.number(),
        goodsTitle: Joi.string().min(5).max(255).required(),
        to: Joi.string().min(5).max(255).required(),
        from: Joi.string().min(5).max(255).required(),
        currentLocation: Joi.string().min(5).max(255),
        quantity: Joi.number().min(1).required(),
        ETD: Joi.number().min(1).required()
    })

    return schema.validate(goods)
}

// exports
module.exports.Goods = Goods
module.exports.validate = validate