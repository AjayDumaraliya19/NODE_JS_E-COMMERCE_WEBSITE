const { Fulfillment } = require("../models");

/** Create Fulfilment */
const creatFulfilment = async (reqBody) => {
  return Fulfillment.create(reqBody);
};

/** Get Fulfilment List */
const getFulfilmentList = async () => {
  return Fulfillment.find({ $or: [{ is_active: true }] });
};

/** Get Fulfilment By Id */
const getFulfilmentById = async (fulfilmentById) => {
  return Fulfillment.findById(fulfilmentById);
};

/** Fulfilment Details by Id */
const updateFulfilment = async (fulfilmentId, updateBody) => {
  return Fulfillment.findByIdAndUpdate(fulfilmentId, { $set: updateBody });
};

const deleteFulfilment = async (fulfilmentId) => {
  return Fulfillment.findByIdAndDelete(fulfilmentId);
};

module.exports = {
  creatFulfilment,
  getFulfilmentList,
  getFulfilmentById,
  updateFulfilment,
  deleteFulfilment,
};
