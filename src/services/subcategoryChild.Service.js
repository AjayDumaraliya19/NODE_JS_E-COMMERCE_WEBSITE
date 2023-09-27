const { SubcategoryChild } = require("../models");

/** Create Subcategory */
const createSubcategoryChild = async (reqBody) => {
  return SubcategoryChild.create(reqBody);
};

/** Get Subcategory list */
const getSubcategoryChildList = async () => {
  return SubcategoryChild.find({ $or: [{ is_active: true }] });
};

/** Get Subcategory details by Id */
const getSubcategoryChildById = async (subcategoryChildId) => {
  return SubcategoryChild.findById(subcategoryChildId);
};

/** Subcategory details update by Id */
const updateSubcategoryChild = async (subcategoryChildId, updateBody) => {
  return SubcategoryChild.findByIdAndUpdate(subcategoryChildId, {
    $set: updateBody,
  });
};

/** Delete Subcategory */
const deleteSubcategoryChild = async (subcategoryChildId) => {
  return SubcategoryChild.findByIdAndDelete(subcategoryChildId);
};

module.exports = {
  createSubcategoryChild,
  getSubcategoryChildList,
  getSubcategoryChildById,
  updateSubcategoryChild,
  deleteSubcategoryChild,
};
