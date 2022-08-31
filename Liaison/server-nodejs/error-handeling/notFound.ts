import { Response } from "express";

export const handleNotFoundError = (res: Response) => {
  return res.status(404).json({ message: "Not found" });
};
