const Joi = require("joi");

const UserValidationSchema = Joi.object({
    firstName: Joi.string()
        .max(512)
        .required(),
    lastName: Joi.string()
        .max(512)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    phone: Joi.number(),
    studiesLevel: Joi.number().required()
});

module.exports = UserValidationSchema;