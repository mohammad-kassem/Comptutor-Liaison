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

export const login = async (req: Request, res: Response) => {
  try {
    const user = await handleInvalidCridentials(req.body, res);
    if (!user) return;
    const token = jwt.sign(
      {
        _id: user._id,
        fname: user.fname,
        lname: user.lname,
        email: user.email,
      },
      TOKEN_SECRET
    );
    const { password, ...userRes } = user.toObject();
    return res.status(200).header("auth-token", token).send({
      message: "Login successful",
      auth_token: token,
      user: userRes,
    });
  } catch (err) {
    handleErrors(res, err);
  }
};
