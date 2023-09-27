const mongoose = require("mongoose");

const fulfillmentSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
    fulfill_status: {
      type: Boolean,
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

const Fulfillment = mongoose.model("Fulfillment", fulfillmentSchema);
module.exports = Fulfillment;
