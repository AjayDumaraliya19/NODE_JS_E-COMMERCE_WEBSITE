const mongoose = require("mongoose");

const subCategoryChildSchema = new mongoose.Schema(
  {
    subCategory_name: {
      type: String,
      trim: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
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

const SubcategoryChild = mongoose.model("SubcategoryChild", subCategoryChildSchema);
module.exports = SubcategoryChild;
