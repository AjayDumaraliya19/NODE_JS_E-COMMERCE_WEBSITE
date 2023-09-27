const { Product } = require("../models");

/** Create Product */
const creatProduct = async (reqBody) => {
  return Product.create(reqBody);
};

/** Get Product List */
const getProductList = async () => {
  return Product.find({ $or: [{ is_active: true }] });
};

/** Get Product By Id */
const getProductById = async (productById) => {
  return Product.findById(productById);
};

/** Product Details by Id */
const updateProduct = async (productId, updateBody) => {
  return Product.findByIdAndUpdate(productId, { $set: updateBody });
};

const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
};

module.exports = {
  creatProduct,
  getProductList,
  getProductById,
  updateProduct,
  deleteProduct,
};
