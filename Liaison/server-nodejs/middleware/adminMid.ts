import { NextFunction, Request, Response } from "express";
import User from "../model/user";
const jwt = require("jsonwebtoken");
const TOKEN_SECRET: string = process.env.TOKEN_SECRET || "";

export const adminMiddleware = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token: string | undefined = req.headers.authorization;
      jwt.verify(token, TOKEN_SECRET);
      const user = jwt.decode(token);
      const userRole = await User.findById(user._id).populate("role");
      if (userRole?.role.role !== "admin") throw new Error;;
      next();
    } catch (err) {
      return res.status(403).json({ message: "Unauthorized" });
    }
  };
};
