const express = require("express");
const { orderValidation } = require("../../validations");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create Order */
router.post(
  "/create-order",
  validate(orderValidation.createOrder),
  orderController.createOrder
);

/* Get Order list */
router.get(
  "/order-list",
  validate(orderValidation.getOrderList),
  orderController.getOrderList
);

/* Get Order details by ID */
router.get(
  "/get-order/:orderId",
  validate(orderValidation.getOrderById),
  orderController.getOrderById
);

/* Order details update by id */
router.put(
  "/update-order/:orderId",
  validate(orderValidation.updateOrder),
  orderController.updateOrder
);

/* Delete Order */
router.delete(
  "/delete-order/:orderId",
  validate(orderValidation.getOrderById),
  orderController.deleteOrder
);

module.exports = router;
