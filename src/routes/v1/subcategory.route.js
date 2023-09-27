const express = require("express");
const { subcategoryValidation } = require("../../validations");
const { subcategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create subcategory */
router.post(
  "/create-subcategory",
  validate(subcategoryValidation.createSubcategory),
  subcategoryController.createSubcategory
);

/* Get subcategory list */
router.get(
  "/subcategory-list",
  validate(subcategoryValidation.getSubcategoryList),
  subcategoryController.getSubcategoryList
);

/* Get subcategory details by Id */
router.get(
  "/subcategory-details/:subcategoryId",
  validate(subcategoryValidation.getSubcategoryById),
  subcategoryController.getSubcategoryById
);

/* subcategory details update by id */
router.put(
  "/update-subcategory/:subcategoryId",
  validate(subcategoryValidation.updateSubcategory),
  subcategoryController.updateSubcategory
);

/* Delete subcategory */
router.delete(
  "/delete-subcategory/:subcategoryId",
  validate(subcategoryValidation.getSubcategoryById),
  subcategoryController.deleteSubcategory
);

module.exports = router;
