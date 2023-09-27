const express = require("express");
const userRoutes = require("./user.model");
const categoryRoutes = require("./category.route");
const subcategoryRoutes = require("./subcategory.route");
const subcategoryChildRoutes = require("./subcategoryChild.route");
const productRoutes = require("./product.model");
const orderRoutes = require("./order.model");
const inventoryRoutes = require("./inventory.model");
const fulfillmentRoutes = require("./fulfillment.model");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/subcategory", subcategoryRoutes);
router.use("/subcategoryChild", subcategoryChildRoutes);
router.use("/product", productRoutes);
router.use("/order", orderRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/fulfillment", fulfillmentRoutes);

module.exports = router;
