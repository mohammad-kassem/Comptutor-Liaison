import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { handleNotFoundError } from "../error-handeling/notFound";
import Contact from "../model/contact";
import Message from "../model/message";
import User from "../model/user";

const jwt = require("jsonwebtoken");
const TOKEN_SECRET: string = process.env.TOKEN_SECRET || "";

console.log(TOKEN_SECRET);
export const userPermissionsContact = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token: string = req.headers.authorization || "";
      jwt.verify(token, TOKEN_SECRET);
      const user = jwt.decode(token);
      const queryId = <string>req.query.id;
      if (queryId) {
        if (!mongoose.isValidObjectId(queryId)) throw new Error();
        const userId = await Contact.findById(queryId);
        if (!userId) throw new Error();
        const userRole = await User.findById(user._id).populate("role");
        if (
          userId?.user.toString() !== user._id &&
          (req.method !== "GET" || userRole?.role.role !== "admin")
        )
          throw new Error();
      }
      next();
    } catch (err) {
      handleNotFoundError(res);
    }
  };
};

export const userPermissionsMessage = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token: string = req.headers.authorization || "";
      jwt.verify(token, TOKEN_SECRET);
      const user = jwt.decode(token);
      const queryId = <string>req.query.id;
      if (queryId) {
        if (!mongoose.isValidObjectId(queryId)) throw new Error();
        const userId = await Message.findById(queryId);
        if (!userId) throw new Error();
        const userRole = await User.findById(user._id).populate("role");
        if (
          userId?.sender.toString() !== user._id &&
          (req.method !== "GET" || userRole?.role.role !== "admin")
        )
          throw new Error();
      }
      next();
    } catch (err) {
      handleNotFoundError(res);
    }
  };
};
