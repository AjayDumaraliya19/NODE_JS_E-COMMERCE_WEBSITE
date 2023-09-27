const { inventoryService } = require("../services");

/* Create inventory */
const createInventory = async (req, res) => {
  try {
    const reqBody = req.body;

    const inventory = await inventoryService.creatInventory(reqBody);
    if (!inventory) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Inventory create  successfully!",
      data: inventory,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get inventory list */
const getInventoryList = async (req, res) => {
  try {
    const getList = await inventoryService.getInventoryList();

    res.status(200).json({
      success: true,
      message: "Get inventory list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get inventory details by id */
const getInventoryById = async (req, res) => {
  try {
    const inventoryId = req.params.inventoryId;
    const getDetails = await inventoryService.getInventoryById(inventoryId);
    if (!getDetails) {
      throw new Error("Inventory not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Inventory details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* inventory details update by id */
const updateInventory = async (req, res) => {
  try {
    const inventoryId = req.params.inventoryId;
    const userExists = await inventoryService.getInventoryById(inventoryId);
    if (!userExists) {
      throw new Error("Inventory not found!");
    }

    await inventoryService.updateInventory(inventoryId, req.body);

    res.status(200).json({
      success: true,
      message: "Invemtory details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete inventory */
const deleteInventory = async (req, res) => {
  try {
    const inventoryId = req.params.inventoryId;
    const inventoryExists = await inventoryService.getInventoryById(
      inventoryId
    );
    if (!inventoryExists) {
      throw new Error("Inventory not found!");
    }

    await inventoryService.deleteInventory(inventoryId);

    res.status(200).json({
      success: true,
      message: "Inventory delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createInventory,
  getInventoryList,
  getInventoryById,
  updateInventory,
  deleteInventory,
};
