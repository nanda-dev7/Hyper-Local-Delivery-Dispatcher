import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

import {
  assignDelivery,
  getDeliveries,
  acceptDelivery,
  completeDelivery,
} from "../controllers/deliveryController.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  assignDelivery
);

router.get("/", authMiddleware, getDeliveries);

router.patch("/:id/accept", authMiddleware, acceptDelivery);

router.patch("/:id/complete", authMiddleware, completeDelivery);

export default router;