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
