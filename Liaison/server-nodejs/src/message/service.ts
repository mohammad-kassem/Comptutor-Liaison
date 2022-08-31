import { Response } from "express";
import mongoose from "mongoose";
import { handleValidationError } from "../../error-handeling/dataValidation";
import { handleUnexpectedError } from "../../error-handeling/unexcpectedError";
import Contact from "../../model/contact";
import Message from "../../model/message";
import User from "../../model/user";

export const addMessage = async (body: any, userId: string) => {
  const { to, subject, content, contactId } = body;
  const newMessage = new Message({
    to,
    subject,
    content,
    sender: userId,
    reciever: new mongoose.Types.ObjectId(contactId),
  });

  await User.updateOne(
    { _id: userId },
    { $push: { messages: newMessage._id } }
  );
  await Contact.updateOne(
    { _id: contactId },
    { $push: { messages: newMessage._id } }
  );

  return await newMessage.save();
};
