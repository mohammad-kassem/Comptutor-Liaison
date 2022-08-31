import { Request, Response } from "express";
import { createHash } from "../../utility/hashPass";
import { addUser, handleErrors, handleInvalidCridentials } from "./service";

const jwt = require("jsonwebtoken");
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

export const register = async (req: Request, res: Response) => {
  try {
    const hashPassword = await createHash(req.body.password);
    const addUserResult = await addUser(req.body, hashPassword);
    return res.status(200).send({
      message: "User added succesfully",
      id: addUserResult._id,
    });
  } catch (err) {
    handleErrors(res, err);
  }
};
