import { Response } from "express";
import { handleUnexpectedError } from "../../error-handeling/unexcpectedError";
import User from "../../model/user";

export const getAll = async () => {
  return (await User.find().populate({
    path: "role",
    match: { role: "user" },
  })).filter(user => user.role);
};

export const search = async (searchString: string) => {
  const re = new RegExp(searchString, "i");
  return (await User.find({
    $or: [
      { $text: { $search: searchString } },
      { fname: { $regex: re } },
      { lname: { $regex: re } },
      { email: { $regex: re } },
    ],
  }).populate({
    path: "role",
    match: { role: "user" },
  })).filter(user => user.role);;
};

export const handleErrors = async (res: Response, err: any) => {
  handleUnexpectedError(res, err);
};
