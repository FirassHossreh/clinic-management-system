const joi = require("joi");
const loginValidation = obj => {
  const loginValidationSchema = joi.object({
    email: joi.string().trim().lowercase().email().required(),
    password: joi.string().min(6).required(),
  });
  return loginValidationSchema.validate(obj);
};
module.exports = {
  loginValidation,
};
