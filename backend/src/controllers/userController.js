import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");

  res.status(200).json(
    new ApiResponse(200, "Users fetched successfully", users)
  );
});

export const getDeliveryPartners = asyncHandler(async (req, res) => {
  const partners = await User.find({
    role: "delivery_partner",
  }).select("-password");

  res.status(200).json(
    new ApiResponse(
      200,
      "Delivery partners fetched successfully",
      partners
    )
  );
});