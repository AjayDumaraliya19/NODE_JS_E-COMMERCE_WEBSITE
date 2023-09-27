const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
  {
    Category_child_name: {
      type: String,
      trim: true,
    },
    subcategory: {
      type: mongoose.Types.ObjectId,
      ref: "subcategory",
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

const SubCategory = mongoose.model("SubCategory", subCategorySchema);
module.exports = SubCategory;
