import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");
const TOKEN_SECRET: string = process.env.TOKEN_SECRET || "";

export const authMiddleware = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token: string | undefined = req.headers.authorization;
      jwt.verify(token, TOKEN_SECRET);
      next();
    } catch (err) {
      return res.status(403).json({ message: "Unauthorized" });
    }
  };
};
