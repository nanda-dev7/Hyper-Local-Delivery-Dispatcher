import express from "express";

import {
  createOrder,
  getOrders,
  getOrder,
  updateOrderStatus,
} from "../controllers/orderController.js";

import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createOrder);

router.get("/", authMiddleware, getOrders);

router.get("/:id", authMiddleware, getOrder);

router.patch("/:id/status", authMiddleware, updateOrderStatus);

export default router;