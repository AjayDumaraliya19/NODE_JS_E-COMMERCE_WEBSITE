const { fulfillmentService } = require("../services");

/* Create fulfillment */
const createFulfillment = async (req, res) => {
  try {
    const reqBody = req.body;

    const fulfillment = await fulfillmentService.creatFulfilment(reqBody);
    if (!fulfillment) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Fulfillment create  successfully!",
      data: fulfillment,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get fulfillment list */
const getFulfillmentList = async (req, res) => {
  try {
    const getList = await fulfillmentService.getFulfilmentList();

    res.status(200).json({
      success: true,
      message: "Get fulfilment list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get fulfillment details by id */
const getFulfilmentById = async (req, res) => {
  try {
    const fulfillmentId = req.params.fulfillmentId;
    const getDetails = await fulfillmentService.getFulfilmentById(
      fulfillmentId
    );
    if (!getDetails) {
      throw new Error("Fulfillment not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Fulfillment details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* fulfillment details update by id */
const updateFulfillment = async (req, res) => {
  try {
    const fulfillmentId = req.params.fulfillmentId;
    const getDetails = await fulfillmentService.getFulfilmentById(
      fulfillmentId
    );
    if (!getDetails) {
      throw new Error("Fulfillment not Found!");
    }

    await fulfillmentService.updateFulfilment(fulfillmentId, req.body);

    res.status(200).json({
      success: true,
      message: "Fulfillment details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete fulfillment */
const deleteFulfillment = async (req, res) => {
  try {
    const fulfillmentId = req.params.fulfillmentId;
    const getDetails = await fulfillmentService.getFulfilmentById(
      fulfillmentId
    );
    if (!getDetails) {
      throw new Error("Fulfillment not Found!");
    }

    await fulfillmentService.deleteFulfilment(fulfillmentId);

    res.status(200).json({
      success: true,
      message: "Fulfillment delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createFulfillment,
  getFulfillmentList,
  getFulfilmentById,
  updateFulfillment,
  deleteFulfillment,
};
