const Joi = require("joi");

const UserValidationSchema = Joi.object({
    name: Joi.string()
        .max(512)
        .required(),
    email: Joi.string()
        .email()
        .required()
        .unique(),
    message: Joi.string()
        .max(4096)
        .required()
});

module.exports = UserValidationSchema;