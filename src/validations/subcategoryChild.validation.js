const Joi = require("joi");

/* Create Subcategory */
const createSubcategoryChild = {
  body: Joi.object().keys({
    subCategory_child_name: Joi.string().required().trim(),
  }),
};

/* Get Subcategory list */
const getSubcategoryChildList = {
  query: Joi.object().keys(),
};

/* Get Subcategory details by id */
const getSubcategoryChildById = {
  params: Joi.object().keys(),
};

/* Subcategory details update by id */
const updateSubcategoryChild = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    subCategory_child_name: Joi.string().required().trim(),
  }),
};

module.exports = {
  createSubcategoryChild,
  getSubcategoryChildList,
  getSubcategoryChildById,
  updateSubcategoryChild,
};
