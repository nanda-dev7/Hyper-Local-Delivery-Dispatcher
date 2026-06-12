import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

import {
  getUsers,
  getDeliveryPartners,
} from "../controllers/userController.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getUsers
);

router.get(
  "/partners",
  authMiddleware,
  roleMiddleware("admin"),
  getDeliveryPartners
);

export default router;