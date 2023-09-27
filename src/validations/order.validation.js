const Joi = require("joi");

/* Create Order */
const createOrder = {
  body: Joi.object().keys({
    order_date: Joi.date().required(),
    total_amount: Joi.number().integer().required(),
  }),
};

/* Get Order list */
const getOrderList = {
  query: Joi.object().keys(),
};

/* Get Order details by id */
const getOrderById = {
  params: Joi.object().keys(),
};

/* Order details update by id */
const updateOrder = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    order_date: Joi.date().required(),
    total_amount: Joi.number().integer().required(),
  }),
};

module.exports = {
  createOrder,
  getOrderList,
  getOrderById,
  updateOrder,
};
