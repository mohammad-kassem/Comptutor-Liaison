import { Response } from "express";

export const handleDuplicateFieldsError = (res: Response) => {
  return res.status(400).json({ message: "Email is already taken" });
};
