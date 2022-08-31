require("dotenv").config();
import mongoose from "mongoose";
const DB_NAME = process.env.DB_NAME || "";

export const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
};

export const discconectDB = async () => {
  await mongoose.disconnect();
};
