const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Types.ObjectId,
      ref: "order",
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
    quantity: {
      type: Number,
      trim: true,
    },
    unit_price: {
      type: Number,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Inventory = mongoose.model("Inventry", inventorySchema);
module.exports = Inventory;
