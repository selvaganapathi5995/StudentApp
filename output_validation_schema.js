const Joi = require("@hapi/joi");

const studentDetailsSchema = Joi.object({
  _id: Joi.number()
    .required(),
  name: Joi.string()
    .required()
    .max(30),
  department: Joi.string()
    .required()
    .max(30),
  type: Joi.string()
    .required()
    .min(7)
    .max(30)
});

module.exports = {studentDetailsSchema}