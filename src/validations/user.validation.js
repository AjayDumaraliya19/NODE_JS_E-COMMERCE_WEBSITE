const Joi = require("joi");

/* Create user */
const createUser = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    passward: Joi.string().required().trim(),
    mobile: Joi.number().integer().required(),
    address: Joi.string().required().trim(),
  }),
};

/* Get user list */
const getUserList = {
  query: Joi.object().keys(),
};

/* Get user details by id */
const getUserById = {
  params: Joi.object().keys(),
};

/* user details update by id */
const updateUser = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    passward: Joi.string().required().trim(),
    mobile: Joi.number().integer().required(),
    address: Joi.string().required().trim(),
  }),
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUser,
};
