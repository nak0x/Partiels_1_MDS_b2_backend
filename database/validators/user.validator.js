const Joi = require("joi");

const UserValidationSchema = Joi.object({
    name: Joi.string()
        .max(512)
        .required(),
    email: Joi.email()
        .required(),
    message: Joi.string()
        .max(4096)
        .required()
});

module.exports = UserValidationSchema;