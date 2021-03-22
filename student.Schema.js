const joi = require("joi");

const schema = {
    student: joi.object({
        name: joi.string().max(20).required(),
        regid: joi.number().integer().max(10000000).message("Invalid Regid").required(),
        class: joi.string().max(8).required(),
        gender: joi.string().valid("M","F","O").required()
        
    })
};
module.exports = schema