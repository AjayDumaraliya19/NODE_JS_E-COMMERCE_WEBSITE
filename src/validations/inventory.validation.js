const Joi = require("joi");

/* Create Inventory */
const createInventory = {
  body: Joi.object().keys({
    quantity: Joi.number().integer().required(),
    unit_price: Joi.number().integer().required(),
  }),
};

/* Get inventory list */
const getInventoryList = {
  query: Joi.object().keys(),
};

/* Get inventory details by id */
const getInventoryById = {
  params: Joi.object().keys(),
};

/* inventory details update by id */
const updateInventory = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    quantity: Joi.number().integer().required(),
    unit_price: Joi.number().integer().required(),
  }),
};

module.exports = {
  createInventory,
  getInventoryList,
  getInventoryById,
  updateInventory,
};
