import { Request, Response } from "express";
import User from "../../model/user";
import {
  addContact,
  getById,
  getContacts,
  handleDuplicateFields,
  handleErrors,
  likeContact,
  removeContact,
  unlikeContact,
  updateContact,
} from "./service";

const jwt = require("jsonwebtoken");

export const add = async (req: Request, res: Response) => {
  try {
    const userId = jwt.decode(req.headers["authorization"])._id;
    const isFound = await handleDuplicateFields(req, res, 0, userId);
    if (isFound) {
      return;
    }

    const newContact = await addContact(req.body, userId);

    const updateUser = await User.updateOne(
      {
        _id: newContact.user,
      },
      {
        $push: {
          contacts: newContact._id,
        },
      }
    );
    return res.status(201).json({
      message: "Contact added successfully",
      new: newContact,
    });
  } catch (err) {
    handleErrors(res, err);
  }
};
