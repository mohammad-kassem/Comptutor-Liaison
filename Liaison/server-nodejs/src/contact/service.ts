import { Request, Response } from "express";
import { handleValidationError } from "../../error-handeling/dataValidation";
import { handleUnexpectedError } from "../../error-handeling/unexcpectedError";
import Contact from "../../model/contact";
import User from "../../model/user";

export const addContact = async (body: any, userID: string | undefined) => {
  const { name, email, phone, relationship, location, country } = body;

  const contact = new Contact({
    name,
    email,
    phone,
    relationship,
    location,
    country,
    user: userID,
  });

  return await contact.save();
};

export const getAll = async () => {
  return await Contact.find();
}

export const getById = async (id: string | undefined) => {
  return await Contact.findById(id).populate("user");
};

export const getContacts = async (userId: string | undefined) => {
  return await User.findById(userId).populate("contacts");
};

export const updateContact = async (body: any, id: string | undefined) => {
  const { name, email, phone, relationship, location, country } = body;
  const contact = await Contact.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        name,
        email,
        phone,
        relationship,
        location,
        country,
      },
    },
    { new: true, runValidators: true }
  );

  return contact;
};

export const removeContact = async (id: string | undefined) => {
  const contact = await Contact.findByIdAndDelete({ _id: id });
  return contact;
};

export const getByEmail = async (email: string) => {
  return await User.findOne({
    email,
  });
};

export const likeContact = async (likedContact: any) => {
  await User.updateOne(
    { _id: likedContact.user },
    { $push: { likes: likedContact._id } }
  );
  return await Contact.findByIdAndUpdate(
    { _id: likedContact._id },
    { $set: { liker: likedContact.user } },
    { new: true, runValidators: true }
  );
};

export const unlikeContact = async (unlikedContact: any) => {
  await User.updateOne(
    { _id: unlikedContact.user },
    { $pull: { likes: unlikedContact._id } }
  );
  return await Contact.findByIdAndUpdate(
    { _id: unlikedContact._id },
    { $unset: { liker: unlikedContact.user } },
    { new: true, runValidators: true }
  );
};

export const handleErrors = (res: Response, err: any) => {
  if (err.name === "ValidationError") handleValidationError(res, err);
  else handleUnexpectedError(res, err);
};

export const handleDuplicateFields = async (
  req: Request,
  res: Response,
  limit: number,
  userID: string
): Promise<boolean> => {
  let isFound: boolean = false;
  let output: string = "";
  let contacts = await getContacts(userID);
  const userContacts = <string[]>contacts?.contacts;
  const foundEmail: number = userContacts.filter(
    (contact: any) => contact.email === req.body.email
  ).length;
  if (foundEmail > limit) {
    output = "Contact with this email is already registered";
    isFound = true;
  }
  const foundPhone = userContacts.filter(
    (contact: any) => contact.phone === req.body.phone
  ).length;
  if (foundPhone > limit) {
    output += output && ", ";
    output += "Contact with this phone is already registered";
    isFound = true;
  }
  if (isFound) {
    res.status(400).json({ message: output });
  }
  return isFound;
};
