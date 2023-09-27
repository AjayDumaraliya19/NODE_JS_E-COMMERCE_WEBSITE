const Joi = require("joi");

/* Create Product */
const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    prodcut_dis: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
  }),
};

/* Get Product list */
const getProductList = {
  query: Joi.object().keys(),
};

/* Get Product details by id */
const getProductById = {
  params: Joi.object().keys(),
};

/* Product details update by id */
const updateProduct = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    prodcut_dis: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
  }),
};

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  updateProduct,
};
