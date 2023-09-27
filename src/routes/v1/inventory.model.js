const express = require("express");
const { inventoryValidation } = require("../../validations");
const { inventoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create Inventory */
router.post(
  "/create-inventory",
  validate(inventoryValidation.createInventory),
  inventoryController.createInventory
);

/* Get Inventory list */
router.get(
  "/invemtory-list",
  validate(inventoryValidation.getInventoryList),
  inventoryController.getInventoryList
);

/* Get Inventory details by ID */
router.get(
  "/get-inventory/:inventoryId",
  validate(inventoryValidation.getInventoryById),
  inventoryController.getInventoryById
);

/* Inventory details update by id */
router.put(
  "/update-inventory/:inventoryId",
  validate(inventoryValidation.updateInventory),
  inventoryController.updateInventory
);

/* Delete Inventory */
router.delete(
  "/delete-inventory/:inventoryId",
  validate(inventoryValidation.getInventoryById),
  inventoryController.deleteInventory
);

module.exports = router;
