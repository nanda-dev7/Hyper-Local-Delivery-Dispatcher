import Order from "../models/Order.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export const createOrder = asyncHandler(async (req, res) => {
  const { pickupLocation, dropLocation, parcelType, weight } = req.body;

  const order = await Order.create({
    customer: req.user.id,
    pickupLocation,
    dropLocation,
    parcelType,
    weight,
  });

  res
    .status(201)
    .json(new ApiResponse(201, "Order created successfully", order));
});

export const getOrders = asyncHandler(async (req, res) => {
  let orders;

  if (req.user.role === "customer") {
    orders = await Order.find({
      customer: req.user.id,
    }).sort({
      createdAt: -1,
    });
  } else {
    orders = await Order.find()
      .populate("customer", "name email role")
      .sort({
        createdAt: -1,
      });
  }

  res.status(200).json(
    new ApiResponse(
      200,
      "Orders fetched successfully",
      orders
    )
  );
});

export const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate("customer", "name email role");

  if (!order) {
    throw new ApiError(404, "Order not found");
  }

  res.status(200).json(
    new ApiResponse(
      200,
      "Order fetched successfully",
      order
    )
  );
});

export const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const order = await Order.findById(req.params.id);

  if (!order) {
    throw new ApiError(404, "Order not found");
  }

  order.status = status;

  await order.save();

  res.status(200).json(
    new ApiResponse(
      200,
      "Order status updated",
      order
    )
  );
});