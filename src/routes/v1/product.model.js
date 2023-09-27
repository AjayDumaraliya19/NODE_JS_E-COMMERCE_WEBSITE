const express = require("express");
const { productValidation } = require("../../validations");
const { productController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create Product */
router.post(
  "/create-product",
  validate(productValidation.createProduct),
  productController.createProduct
);

/* Get Product list */
router.get(
  "/product-list",
  validate(productValidation.getProductList),
  productController.getProductList
);

/* Get Product details by ID */
router.get(
  "/get-product/:productId",
  validate(productValidation.getProductById),
  productController.getProductById
);

/* Product details update by id */
router.put(
  "/update-product/:productId",
  validate(productValidation.updateProduct),
  productController.updateProduct
);

/* Delete Product */
router.delete(
  "/delete-product/:productId",
  validate(productValidation.getProductById),
  productController.deleteProduct
);

module.exports = router;
