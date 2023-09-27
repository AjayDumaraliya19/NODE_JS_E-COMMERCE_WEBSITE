const { subcategoryService } = require("../services");

/* Create Subcategory */
const createSubcategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const subcategory = await subcategoryService.createSubcategory(reqBody);
    if (!subcategory) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Subcategory create  successfully!",
      data: subcategory,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get Subcategory list */
const getSubcategoryList = async (req, res) => {
  try {
    const getList = await subcategoryService.getSubcategoryList();

    res.status(200).json({
      success: true,
      message: "Get subcategory list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get Subcategory details by id */
const getSubcategoryById = async (req, res) => {
  try {
    const subcategoryId = req.params.subcategoryId;
    const getDetails = await subcategoryService.getUserById(subcategoryId);
    if (!getDetails) {
      throw new Error("Subcategory  not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Subcategory details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* Subcategory details update by id */
const updateSubcategory = async (req, res) => {
  try {
    const subcategoryId = req.params.subcategoryId;
    const subcategoryExists = await subcategoryService.getSubcategoryById(
      subcategoryId
    );
    if (!subcategoryExists) {
      throw new Error("Subcategory not found!");
    }

    await subcategoryService.updateSubcategory(subcategoryId, req.body);

    res.status(200).json({
      success: true,
      message: "Subcategory details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete Subcategory */
const deleteSubcategory = async (req, res) => {
  try {
    const subcategoryId = req.params.subcategoryId;
    const subcategoryExists = await subcategoryService.getSubcategoryById(
      subcategoryId
    );
    if (!subcategoryExists) {
      throw new Error("Subcategory not found!");
    }

    await subcategoryService.deleteSubcategory(subcategoryId);

    res.status(200).json({
      success: true,
      message: "Subcategory delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createSubcategory,
  getSubcategoryList,
  getSubcategoryById,
  updateSubcategory,
  deleteSubcategory,
};
