import { Request, Response } from "express";
import User from "../../model/user";
import {
  addContact,
  getAll,
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

    await User.updateOne(
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

export const getByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.query.id;
    if (userId){
      const contacts = await getContacts(<string>userId);
      return res.status(200).json({count: contacts?.contacts.length, contacts: contacts?.contacts });
    }
    else {
      const contacts = await getAll();
      return res.status(200).json({ count: contacts.length, contacts: contacts });
    }
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

export const like = async (req: Request, res: Response) => {
  try {
    const id = <string>req.query.id;
    let likedContact = await getById(id);
    likedContact = await likeContact(likedContact);
    return res.status(200).json({
      message: "Contact liked successfully",
      liked: likedContact,
    });
  } catch (err) {
    handleErrors(res, err);
  }
};

export const unlike = async (req: Request, res: Response) => {
  try {
    const id = <string>req.query.id;
    let unlikedContact = await getById(id);

    unlikedContact = await unlikeContact(unlikedContact);

    return res.status(200).json({
      message: "Contact unliked successfully",
      unliked: unlikedContact,
    });
  } catch (err) {
    handleErrors(res, err);
  }
};

export const getLiked = async (req: Request, res: Response) => {
  try {
    const userId = jwt.decode(req.headers.authorization)._id;
    const contacts = await getContacts(userId);
    const likedContacts = contacts?.contacts.filter(
      (contact: any) => contact.liker
    );
    return res.status(200).json({
      liked: likedContacts,
    });
  } catch (err) {
    handleErrors(res, err);
  }
};

export const getUnliked = async (req: Request, res: Response) => {
  try {
    const userId: string | undefined = jwt.decode(
      req.headers.authorization
    )._id;
    const contacts = await getContacts(userId);
    const unlikedContacts = contacts?.contacts.filter(
      (contact: any) => !contact.liker
    );
    return res.status(200).json({
      unliked: unlikedContacts,
    });
  } catch (err) {
    handleErrors(res, err);
  }
};
