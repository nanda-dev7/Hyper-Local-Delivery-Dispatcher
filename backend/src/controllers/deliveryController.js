import Delivery from "../models/Delivery.js";
import Order from "../models/Order.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export const assignDelivery = asyncHandler(async (req, res) => {
  const { orderId, partnerId } = req.body;

  const order = await Order.findById(orderId);

  if (!order) {
    throw new ApiError(404, "Order not found");
  }

  const delivery = await Delivery.create({
    order: orderId,
    partner: partnerId,
    status: "assigned",
  });

  order.status = "assigned";
  await order.save();

  res.status(201).json(
    new ApiResponse(
      201,
      "Delivery assigned successfully",
      delivery
    )
  );
});

export const getDeliveries = asyncHandler(async (req, res) => {
  let deliveries;

  if (req.user.role === "delivery_partner") {
    deliveries = await Delivery.find({
      partner: req.user.id,
    })
      .populate("order")
      .populate("partner", "name email");
  } else {
    deliveries = await Delivery.find()
      .populate("order")
      .populate("partner", "name email");
  }

  res.status(200).json(
    new ApiResponse(
      200,
      "Deliveries fetched",
      deliveries
    )
  );
});

export const acceptDelivery = asyncHandler(async (req, res) => {
  const delivery = await Delivery.findById(
    req.params.id
  );

  if (!delivery) {
    throw new ApiError(404, "Delivery not found");
  }

  delivery.status = "accepted";

  await delivery.save();

  res.status(200).json(
    new ApiResponse(
      200,
      "Delivery accepted",
      delivery
    )
  );
});

export const completeDelivery = asyncHandler(async (req, res) => {
  const delivery = await Delivery.findById(
    req.params.id
  );

  if (!delivery) {
    throw new ApiError(404, "Delivery not found");
  }

  delivery.status = "delivered";

  await delivery.save();

  const order = await Order.findById(
    delivery.order
  );

  if (order) {
    order.status = "delivered";
    await order.save();
  }

  res.status(200).json(
    new ApiResponse(
      200,
      "Delivery completed",
      delivery
    )
  );
});