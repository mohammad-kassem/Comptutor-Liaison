import { Response } from "express";
import { Error } from "mongoose";

export const handleValidationError = (
  res: Response,
  err: Error.ValidationError
) => {
  const errors: string[] = Object.values(err.errors).map(
    (error) => error.message
  );
  return res.status(400).json({ message: errors.join(", ") });
};
