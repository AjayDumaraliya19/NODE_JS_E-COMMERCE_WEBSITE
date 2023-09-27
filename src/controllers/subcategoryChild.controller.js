const { subcategoryChildService } = require("../services");

/* Create Subcategory-child */
const createSubcategoryChild = async (req, res) => {
  try {
    const reqBody = req.body;

    const subcategoryChild =
      await subcategoryChildService.createSubcategoryChild(reqBody);
    if (!subcategoryChild) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Subcategory-Child create  successfully!",
      data: subcategoryChild,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get Subcategory-child list */
const getSubcategoryChildList = async (req, res) => {
  try {
    const getList = await subcategoryChildService.getSubcategoryChildList();

    res.status(200).json({
      success: true,
      message: "Get subcategory-child list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get Subcategory-child details by id */
const getSubcategoryChildById = async (req, res) => {
  try {
    const subcategoryChildId = req.params.subcategoryChildId;
    const getDetails = await subcategoryChildService.getSubcategoryChildById(
      subcategoryChildId
    );
    if (!getDetails) {
      throw new Error("Subcategory-child  not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Subcategory-child details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* Subcategory-child details update by id */
const updateSubcategoryChild = async (req, res) => {
  try {
    const subcategoryChildId = req.params.subcategoryChildId;
    const subcategoryChildExists =
      await subcategoryChildService.getSubcategoryChildById(subcategoryChildId);
    if (!subcategoryChildExists) {
      throw new Error("Subcategory-child not found!");
    }

    await subcategoryChildService.updateSubcategoryChild(
      subcategoryChildId,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "SubCategory-child details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete Subcategory-child */
const deleteSubcategoryChild = async (req, res) => {
  try {
    const subcategoryChildId = req.params.subcategoryChildId;
    const subcategoryChildExists =
      await subcategoryChildService.getSubcategoryChildById(subcategoryChildId);
    if (!subcategoryChildExists) {
      throw new Error("Subcategory-child not found!");
    }

    await subcategoryChildService.deleteSubcategoryChild(subcategoryChildId);

    res.status(200).json({
      success: true,
      message: "Subcategory-child delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createSubcategoryChild,
  getSubcategoryChildList,
  getSubcategoryChildById,
  updateSubcategoryChild,
  deleteSubcategoryChild,
};
