const express = require("express");
const { fulfillmentValidation } = require("../../validations");
const { fulfillmentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create fulfillment */
router.post(
  "/create-fulfillment",
  validate(fulfillmentValidation.createFulfillment),
  fulfillmentController.createFulfillment
);

/* Get fulfillment list */
router.get(
  "/fulfillment-details",
  validate(fulfillmentValidation.getFulfillmentById),
  fulfillmentController.getFulfilmentById
);

/* Get fulfillment details by ID */
router.get(
  "/get-fulfillment/:fulfillmentId",
  validate(fulfillmentValidation.getFulfillmentById),
  fulfillmentController.getFulfilmentById
);

/* fulfillment details update by id */
router.put(
  "/update-fulfillment/:fulfillmentId",
  validate(fulfillmentValidation.updateFulfillment),
  fulfillmentController.updateFulfillment
);

/* Delete fulfillment */
router.delete(
  "/delete-fulfilment/:fulfillmentId",
  validate(fulfillmentValidation.getFulfillmentById),
  fulfillmentController.deleteFulfillment
);

module.exports = router;
