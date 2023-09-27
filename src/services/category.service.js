const { Category } = require("../models");

/** Create Category */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/** Get Category list */
const getCategoryList = async () => {
  return Category.find({ $or: [{ is_active: true }] });
};

/** Get Category by Id */
const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

/** Update Category */
const updateCategory = async (categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

/** Delete Category */
const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
