
const Joi = require("@hapi/joi");

let myFunc = function (req, res, next) {

const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .trim()
    .required(),

  lastname: Joi.string()
    .min(1)
    .trim()
    .required(),

  age: Joi.number()
    .min(18)
    .required(),

  class: Joi.string().min(3),

  location: Joi.any().allow("BER", "HH", "DUS")
});

    const validation = schema.validate(req.body)
    // console.log(validation.error)
    if (validation.error){
        
        res.send('Error_________'); 
    }else {
        next()
    }

}

module.exports = myFunc;