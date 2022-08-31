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

export const getById = async (id: string | undefined) => {
  return await Contact.findById(id).populate("user");
};

export const getContacts = async (userID: string | undefined) => {
  return await User.findById(userID).populate("contacts");
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

