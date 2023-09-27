const { categoryService } = require("../services");

/* Create Category */
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const category = await categoryService.createCategory(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Category create  successfully!",
      data: category,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get Category list */
const getCategoryList = async (req, res) => {
  try {
    const getList = await categoryService.getCategoryList();

    res.status(200).json({
      success: true,
      message: "Get category list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get Category details by id */
const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const getDetails = await categoryService.getCategoryById(categoryId);
    if (!getDetails) {
      throw new Error("Category not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Category details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* Category details update by id */
const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const userExists = await categoryService.getCategoryById(categoryId);
    if (!userExists) {
      throw new Error("Category not found!");
    }

    await categoryService.updateCategory(categoryId, req.body);

    res.status(200).json({
      success: true,
      message: "Category details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete Category */
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const categoryExists = await categoryService.getCategoryById(categoryId);
    if (!categoryExists) {
      throw new Error("Category not found!");
    }

    await categoryService.deleteCategory(categoryId);

    res.status(200).json({
      success: true,
      message: "Category delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
