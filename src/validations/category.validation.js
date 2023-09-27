const Joi = require("joi");

/* Create Category */
const createCategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_dis: Joi.string().required().trim(),
  }),
};

/* Get Category list */
const getCategoryList = {
  query: Joi.object().keys(),
};

/* Get Category details by id */
const getCategoryById = {
  params: Joi.object().keys(),
};

/* Category details update by id */
const updateCategory = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_dis: Joi.string().required().trim(),
  }),
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryById,
  updateCategory,
};
