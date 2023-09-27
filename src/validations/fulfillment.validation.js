const Joi = require("joi");

/* Create Fulfillment */
const createFulfillment = {
  body: Joi.object().keys({
    fulfill_status: Joi.boolean(),
  }),
};

/* Get Fulfillment list */
const getFulfillmentList = {
  query: Joi.object().keys(),
};

/* Get Fulfillment details by id */
const getFulfillmentById = {
  params: Joi.object().keys(),
};

/* Fulfillment details update by id */
const updateFulfillment = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    fulfill_status: Joi.boolean(),
  }),
};

module.exports = {
  createFulfillment,
  getFulfillmentList,
  getFulfillmentById,
  updateFulfillment,
};
