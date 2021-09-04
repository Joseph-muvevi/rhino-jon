const mongoose = require("mongoose")
const Joi = require("joi")
const Schema = mongoose.Schema

// the storageShipmentSchema
const storageShipmentSchema = new Schema({
    fullnames: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100
    },
    company: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100
    },
    storagecity: {
        type: String,
        required: true,
        minLength:3,
        maxLength: 50
    },
    storagecountry: {
        type: String,
        required: true,
        minLength:3,
        maxLength: 50
    },
    warehousetype: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    weight: {
        type: Number,
        required: true,
        min: 1,
        max: 50000
    },
    weightunit: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    producttype: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    pieces: {
        type: Number,
        required: true,
        min: 1,
        max: 50000
    },
    datein: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100
    },
    intime: {
        type: String,
        required: true,
        min: 3,
        max: 100
    },
    dateout: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100
    },
    outtime: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100
    },
    notes: {
        type: String,
        required: true,
        minLength: 20,
        maxLength: 2000
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

// the model
const StorageShipment = mongoose.model("Storage Shipment", storageShipmentSchema)

// validation
const validate = (storageShipment) => {
    const schema = Joi.object({
        fullnames: Joi.string().min(3).max(100).required(),
        email: Joi.string().min(3).max(100).required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'ke'] } }),
        company: Joi.string().min(3).max(100).required(),
        storagecity: Joi.string().min(3).max(50).required(),
        storagecountry: Joi.string().min(3).max(50).required(),
        warehousetype: Joi.string().min(3).max(50).required(),
        weight: Joi.number().min(1).max(50000).required(),
        weightunit: Joi.string().min(3).max(100).required(),
        producttype: Joi.string().min(3).max(50).required(),
        pieces: Joi.number().min(1).max(50000).required(),
        datein: Joi.string().min(3).max(100).required(),
        intime: Joi.string().min(3).max(100).required(),
        dateout: Joi.string().min(3).max(100).required(),
        outtime: Joi.string().min(3).max(100).required(),
        storetrackno: Joi.string().min(3).max(100).required(),
        notes: Joi.string().min(20).max(2000).required()
    })

    return schema.validate(storageShipment)
}

module.exports.StorageShipment = StorageShipment 
module.exports.validate = validate