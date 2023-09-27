const { productService } = require("../services");

/* Create Product */
const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;

    const product = await productService.createProduct(reqBody);
    if (!product) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Product create  successfully!",
      data: product,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get Product list */
const getProductList = async (req, res) => {
  try {
    const getList = await productService.getProductList();

    res.status(200).json({
      success: true,
      message: "Get product list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get Product details by id */
const getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const getDetails = await productService.getProductById(productId);
    if (!getDetails) {
      throw new Error("Product not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Product details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* Product details update by id */
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productExists = await productService.getProductById(productId);
    if (!productExists) {
      throw new Error("Product not found!");
    }

    await productService.updateProduct(productId, req.body);

    res.status(200).json({
      success: true,
      message: "Product details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete Product */
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productExists = await productService.getProductById(productId);
    if (!productExists) {
      throw new Error("Product not found!");
    }

    await productService.deleteProduct(productId);

    res.status(200).json({
      success: true,
      message: "Product delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  updateProduct,
  deleteProduct,
};
