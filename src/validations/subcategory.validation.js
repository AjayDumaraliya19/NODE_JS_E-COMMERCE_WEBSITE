const Joi = require("joi");

/* Create Subcategory */
const createSubcategory = {
  body: Joi.object().keys({
    subCategory_name: Joi.string().required().trim(),
  }),
};

/* Get Subcategory list */
const getSubcategoryList = {
  query: Joi.object().keys(),
};

/* Get Subcategory details by id */
const getSubcategoryById = {
  params: Joi.object().keys(),
};

/* Subcategory details update by id */
const updateSubcategory = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    subCategory_name: Joi.string().required().trim(),
  }),
};

module.exports = {
  createSubcategory,
  getSubcategoryList,
  getSubcategoryById,
  updateSubcategory,
};
