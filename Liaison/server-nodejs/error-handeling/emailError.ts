import { Response } from "express";

export const handleEmailError = async (res: Response, err: Error) => {
  return res.status(500).json({ message: err.message });
};
