const express = require("express");
const { subcategoryChildValidation } = require("../../validations");
const { subcategoryChildController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create subcategory-child */
router.post(
  "/create-subcategoryChild",
  validate(subcategoryChildValidation.createSubcategoryChild),
  subcategoryChildController.createSubcategoryChild
);

/* Get subcategory-child list */
router.get(
  "/subcategoryChild-list",
  validate(subcategoryChildValidation.getSubcategoryChildList),
  subcategoryChildController.getSubcategoryChildList
);

/* Get subcategory-child details by Id */
router.get(
  "/subcategoryChild-details/:subcategoryChildId",
  validate(subcategoryChildValidation.getSubcategoryChildById),
  subcategoryChildController.getSubcategoryChildById
);

/* subcategory-child details update by id */
router.put(
  "/update-subcategoryChild/:subcategoryChildId",
  validate(subcategoryChildValidation.updateSubcategoryChild),
  subcategoryChildController.updateSubcategoryChild
);

/* Delete subcategory-child */
router.delete(
  "/delete-subcategoryChild/:subcategoryId",
  validate(subcategoryChildValidation.getSubcategoryChildById),
  subcategoryChildController.deleteSubcategoryChild
);

module.exports = router;
