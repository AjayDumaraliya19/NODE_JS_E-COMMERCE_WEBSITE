const { SubCategory } = require("../models");

/** Create Subcategory */
const createSubcategory = async (reqBody) => {
  return SubCategory.create(reqBody);
};

/** Get Subcategory list */
const getSubcategoryList = async () => {
  return SubCategory.find({ $or: [{ is_active: true }] });
};

/** Get Subcategory details by Id */
const getSubcategoryById = async (subcategoryId) => {
  return SubCategory.findById(subcategoryId);
};

/** Subcategory details update by Id */
const updateSubcategory = async (subcategoryId, updateBody) => {
  return SubCategory.findByIdAndUpdate(subcategoryId, { $set: updateBody });
};

/** Delete Subcategory */
const deleteSubcategory = async (subcategoryId) => {
  return SubCategory.findByIdAndDelete(subcategoryId);
};

module.exports = {
  createSubcategory,
  getSubcategoryList,
  getSubcategoryById,
  updateSubcategory,
  deleteSubcategory,
};
