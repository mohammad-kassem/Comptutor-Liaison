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

export const getMessagesByUser = async (userId: string) => {
  return await User.findById(userId).populate("messages");
};

export const getMessagesByContactId = async (contactId: string) => {
  return await Contact.findById(contactId).populate("messages");
};
