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

export const get = async (req: Request, res: Response) => {
  try {
    let result;
    if (req.query.id) {
      const id = req.query.id as string;
      result = await getById(id);
      return res.status(200).json({
        contact: result,
      });
    }
    const userId = jwt.decode(req.headers.authorization)._id;
    result = await getContacts(userId);
    return res.status(200).json({
      contacts: result?.contacts,
    });
  } catch (err) {
    handleErrors(res, err);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;
    let updatedContact = await getById(id);
    const isFound = await handleDuplicateFields(
      req,
      res,
      1,
      updatedContact?.user
    );
    if (isFound) {
      return;
    }
    updatedContact = await updateContact(req.body, id);
    return res.status(200).send({
      message: "Contact updated successfully",
      updated: updatedContact,
    });
  } catch (err) {
    handleErrors(res, err);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;
    let deletedContact = await getById(id);
    deletedContact = await removeContact(id);
    await User.updateOne(
      { _id: deletedContact?.user },
      { $pull: { contacts: deletedContact?._id } }
    );
    return res.status(200).send({
      message: "Contact removed successfully",
      deleted: deletedContact,
    });
  } catch (err) {
    handleErrors(res, err);
  }
};
