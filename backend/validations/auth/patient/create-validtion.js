const Joi = require('joi');

const createPatientValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().trim().min(2).max(50).required().messages({
      'string.empty': 'الاسم مطلوب',
      'string.min': 'الاسم يجب أن يكون على الأقل حرفين',
      'string.max': 'الاسم يجب أن يكون أقل من 50 حرف',
      'any.required': 'الاسم مطلوب',
    }),

    surname: Joi.string().trim().min(2).max(50).required().messages({
      'string.empty': 'الاسم الأخير مطلوب',
      'string.min': 'الاسم الأخير يجب أن يكون على الأقل حرفين',
      'string.max': 'الاسم الأخير يجب أن يكون أقل من 50 حرف',
      'any.required': 'الاسم الأخير مطلوب',
    }),

    age: Joi.number().integer().min(0).max(120).required().messages({
      'number.base': 'العمر يجب أن يكون رقماً',
      'number.integer': 'العمر يجب أن يكون رقماً صحيحاً',
      'number.min': 'العمر يجب أن يكون أكبر من أو يساوي 0',
      'number.max': 'العمر يجب أن يكون أقل من 120',
      'any.required': 'العمر مطلوب',
    }),

    gender: Joi.string().valid('Male', 'Female').required().messages({
      'any.only': 'الجنس يجب أن يكون ذكر أو أنثى',
      'any.required': 'الجنس مطلوب',
    }),

    email: Joi.string().trim().lowercase().email().required().messages({
      'string.empty': 'البريد الإلكتروني مطلوب',
      'string.email': 'البريد الإلكتروني غير صحيح',
      'any.required': 'البريد الإلكتروني مطلوب',
    }),

    phoneNumber: Joi.string()
      .trim()
      .pattern(/^[\+]?[0-9\s\-\(\)]{10,}$/)
      .required()
      .messages({
        'string.empty': 'رقم الهاتف مطلوب',
        'string.pattern.base': 'رقم الهاتف غير صحيح',
        'any.required': 'رقم الهاتف مطلوب',
      }),

    doctorId: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({
        'string.empty': 'معرف الطبيب مطلوب',
        'string.pattern.base': 'معرف الطبيب غير صحيح',
        'any.required': 'معرف الطبيب مطلوب',
      }),
  });

  return schema.validate(data);
};

module.exports = { createPatientValidation };
