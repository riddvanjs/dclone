const Joi = require("joi")

const AddMemberSchemaValidation = Joi.object({
    email: Joi.string().required().min(3).max(30)
        .error(() => ({
            message: 'Email is verplicht.',
        })),
    password: Joi.string().required().error(() => ({
        message: 'Wachtwoord is verplicht.',
    })),
    accounts: Joi.array().required().error(() => ({
        message: 'Accounts zijn verplicht.',
    })),
});

module.exports = {
    AddMemberSchemaValidation
}