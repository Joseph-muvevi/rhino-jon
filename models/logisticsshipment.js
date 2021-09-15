const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;

// the logisticsShipmentSchema
const logisticsShipmentSchema = new Schema(
  {
    fullnames: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    email: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    company: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    departurecity: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    departurecountry: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    arrivalcity: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    arrivalcountry: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    logisticstype: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    weight: {
      type: Number,
      required: true,
      min: 1,
      max: 50000,
    },
    weightunit: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    producttype: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    pieces: {
      type: Number,
      required: true,
      min: 1,
      max: 50000,
    },
    departuredate: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    departuretime: {
      type: String,
      required: true,
      min: 3,
      max: 100,
    },
    arrivaltime: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    arrivaldate: {
      type: String,
      required: true,
      min: 3,
      max: 100,
    },
    trackno: {
      type: String,
      required: true,
      min: 3,
      max: 100,
    },
    notes: {
      type: String,
      required: true,
      minLength: 20,
      maxLength: 2000,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// the model
const LogisticsShipment = mongoose.model(
  "Logistics Shipment",
  logisticsShipmentSchema
);

// validation
const validate = (logisticsShipment) => {
  const schema = Joi.object({
    fullnames: Joi.string().min(3).max(100).required(),
    email: Joi.string()
      .min(3)
      .max(100)
      .required()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "org", "ke"] },
      }),
    company: Joi.string().min(3).max(100).required(),
    departurecity: Joi.string().min(3).max(50).required(),
    departurecountry: Joi.string().min(3).max(50).required(),
    arrivalcity: Joi.string().min(3).max(50).required(),
    arrivalcountry: Joi.string().min(3).max(50).required(),
    logisticstype: Joi.string().min(3).max(50).required(),
    weight: Joi.number().min(1).max(50000000).required(),
    weightunit: Joi.string().min(3).max(100).required(),
    producttype: Joi.string().min(3).max(50).required(),
    pieces: Joi.number().min(1).max(50000000).required(),
    departuredate: Joi.string().min(3).max(100).required(),
    departuretime: Joi.string().min(3).max(100).required(),
    arrivaldate: Joi.string().min(3).max(100).required(),
    arrivaltime: Joi.string().min(3).max(100).required(),
    trackno: Joi.string().min(3).max(100).required(),
    notes: Joi.string().min(20).max(2000).required(),
  });

  return schema.validate(logisticsShipment);
};

module.exports.LogisticsShipment = LogisticsShipment;
module.exports.validate = validate;
