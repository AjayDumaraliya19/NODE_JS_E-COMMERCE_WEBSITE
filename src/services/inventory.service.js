const { Inventory } = require("../models");

/** Create Inventory */
const creatInventory = async (reqBody) => {
  return Inventory.create(reqBody);
};

/** Get Inventory List */
const getInventoryList = async () => {
  return Inventory.find({ $or: [{ is_active: true }] });
};

/** Get Inventory By Id */
const getInventoryById = async (inventoryById) => {
  return Inventory.findById(inventoryById);
};

/** Inventory Details by Id */
const updateInventory = async (inventoryId, updateBody) => {
  return Inventory.findByIdAndUpdate(inventoryId, { $set: updateBody });
};

const deleteInventory = async (inventoryId) => {
  return Inventory.findByIdAndDelete(inventoryId);
};

module.exports = {
  creatInventory,
  getInventoryList,
  getInventoryById,
  updateInventory,
  deleteInventory,
};
