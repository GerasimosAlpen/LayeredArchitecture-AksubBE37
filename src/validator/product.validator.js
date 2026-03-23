import Joi from "joi";

export const createProductSchema = 
Joi.object({
  name: Joi.string()
    .trim()
    .min(3)
    .max(100)
    .required(),

  description: Joi.string()
    .trim()
    .min(3)
    .max(255)
    .required(),

  quantity: Joi.number()
    .integer()
    .min(0)
    .required()
    .strict()
})