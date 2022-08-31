require("dotenv").config();
import express, { Application } from "express";
import cors from "cors";
import userRouter from "./src/user";
import { connectDB } from "./config/db";

connectDB();

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/contacts", contactRouter);
app.listen(3000, () => console.log("Server running"));
