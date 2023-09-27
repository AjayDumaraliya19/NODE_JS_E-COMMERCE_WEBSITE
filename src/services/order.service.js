const { Order } = require("../models");

/** Create Order */
const creatOrder = async (reqBody) => {
  return Order.create(reqBody);
};

/** Get Order List */
const getOrderList = async () => {
  return Order.find({ $or: [{ is_active: true }] });
};

/** Get Order By Id */
const getOrderById = async (orderById) => {
  return Order.findById(orderById);
};

/** Order Details by Id */
const updateOrder = async (orderId, updateBody) => {
  return Order.findByIdAndUpdate(orderId, { $set: updateBody });
};

const deleteOrder = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
};

module.exports = {
  creatOrder,
  getOrderList,
  getOrderById,
  updateOrder,
  deleteOrder,
};
