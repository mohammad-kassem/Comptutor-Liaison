import { Response } from "express";
import mongoose from "mongoose";
import { handleValidationError } from "../../error-handeling/dataValidation";
import { handleEmailError } from "../../error-handeling/emailError";
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

export const sendEmail = async (
  body: any,
  Sib: any,
  emailDomain: string,
  siteDomain: string,
  fromEmail: string,
  fromName: string
) => {
  const { to, subject, content } = body;

  const tranEmailApi = new Sib.TransactionalEmailsApi();
  const sender = {
    email: emailDomain,
    name: "Liaison",
  };

  const receivers = [{ email: to }];
  try {
    await tranEmailApi.sendTransacEmail({
      sender,
      to: receivers,
      subject: `${subject} from ${fromEmail}`,
      htmlContent: `
        <p>Hello this is your friend ${fromName}<p>
        <p style="padding-vertical: 10px">${content}</p>
        <a href=${siteDomain}>Start using Liaison</a>
        `,
    });
  } catch (err) {
    const e = new Error("Could not send email");
    e.name = "EmailError";
    throw e;
  }
};

export const getAll = async () => {
  return await Message.find();
}

export const getById = async (id: string) => {
  return await Message.findById(id).populate('sender');
}

export const getMessagesByUser = async (userId: string) => {
  return await User.findById(userId).populate("messages");
};

export const getMessagesByContactId = async (contactId: string) => {
  return await Contact.findById(contactId).populate("messages");
};

export const getMessagesByContactEmail = async (email: string) => {
  return await Contact.findOne({ email }).populate("messages");
};

export const search = async (searchString: string, userId: string) => {
  const re = new RegExp(searchString, 'i');
  return await Message.find({$or: [{$text: {$search: searchString}}, {to: {$regex: re}}, {subject: {$regex: re}}, {content: {$regex: re}}]}).where('sender').equals(new mongoose.Types.ObjectId(userId));
}

export const handleErrors = (res: Response, err: any) => {
  if (err.name === "ValidationError") handleValidationError(res, err);
  else if (err.name === "EmailError") handleEmailError(res, err);
  else handleUnexpectedError(res, err);
};
