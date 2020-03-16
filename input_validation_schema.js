const Joi = require("@hapi/joi");

const _id = {
  validate: {
    params: Joi.object({
      _id: Joi.number().required()
    })
  }
};
const type = {
  validate: {
    query: Joi.object({
      type: Joi.string()
        .required()
        .min(7)
        .max(30)
    })
  }
};
const studentDetails = {
  validate: {
    payload: Joi.object({
      _id: Joi.number().required(),
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
    })
  }
};
module.exports = { _id, type, studentDetails };
