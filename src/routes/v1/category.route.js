const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create Category */
router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  categoryController.createCategory
);

/* Get Category list */
router.get(
  "/category-list",
  validate(categoryValidation.getCategoryList),
  categoryController.getCategoryList
);

/* Get Category details by ID */
router.get(
  "/get-category/:categoryId",
  validate(categoryValidation.getCategoryById),
  categoryController.getCategoryById
);

/* Category details update by id */
router.put(
  "/update-category/:categoryId",
  validate(categoryValidation.updateCategory),
  categoryController.updateCategory
);

/* Delete Category */
router.delete(
  "/delete-category/:categoryId",
  validate(categoryValidation.getCategoryById),
  categoryController.deleteCategory
);

module.exports = router;
