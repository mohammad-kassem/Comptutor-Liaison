require("dotenv").config();
import express, { Application } from "express";
import cors from "cors";
import { connectDB } from "./config/db";

connectDB();

const app: Application = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log("Server running"));
