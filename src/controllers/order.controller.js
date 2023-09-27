const { orderService } = require("../services");

/* Create Order */
const createOrder = async (req, res) => {
  try {
    const reqBody = req.body;

    const order = await orderService.creatOrder(reqBody);
    if (!order) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Order create  successfully!",
      data: order,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get Order list */
const getOrderList = async (req, res) => {
  try {
    const getList = await orderService.getOrderList();

    res.status(200).json({
      success: true,
      message: "Get order list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get Order details by id */
const getOrderById = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const getDetails = await orderService.getOrderById(orderId);
    if (!getDetails) {
      throw new Error("Order not Found!");
    }

    res.status(200).json({
      success: true,
      message: "order details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* Order details update by id */
const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderExists = await orderService.getOrderById(orderId);
    if (!orderExists) {
      throw new Error("Order not found!");
    }

    await orderService.updateOrder(orderId, req.body);

    res.status(200).json({
      success: true,
      message: "Order details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete Order */
const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderExists = await orderService.getOrderById(orderId);
    if (!orderExists) {
      throw new Error("Order not found!");
    }

    await orderService.deleteOrder(orderId);

    res.status(200).json({
      success: true,
      message: "Order delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrderList,
  getOrderById,
  updateOrder,
  deleteOrder,
};
