import { Request, Response } from "express";
import { getAll, handleErrors, search } from "./service";
import { IUser } from "../../model/user";

export const get = async (req: Request, res: Response) => {
  try {
    let users: IUser[];
    const searchString = req.query.search;
    if (searchString) users = await search(<string>searchString);
    else users = await getAll();
    return res.status(200).json({count: users.length, users});
  } catch(err) {
    handleErrors(res, err);
  }
}