import { Response } from "express";

export const handleUnexpectedError = (res: Response, err: any) => {
  return res.status(500).json({ message: "Unexpected error" });
};
