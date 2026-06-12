import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import User from "./models/User.js";

const test = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const user = new User({
    name: "Vivek",
    email: "vivek@test.com",
    phone: "9999999999",
    password: "password123",
  });

  await user.save();

  console.log(user);

  process.exit();
};

test();