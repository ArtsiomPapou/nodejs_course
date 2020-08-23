import Joi from 'joi';
export const userSchemes = {
  addUser: Joi.object().keys({
    login: Joi.string().required(),
    age: Joi.number().min(4).max(130).required(),
    password: Joi.string()
      .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]+$')).required(),
    isDeleted: Joi.boolean().required()
  }),

  updateUser: Joi.object().keys({
    login: Joi.string().min(4).max(130),
    age: Joi.number().min(4).max(130),
    password: Joi.string()
      .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]+$')),
    isDeleted: Joi.boolean()
  })
}
