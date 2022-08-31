import { Request, Response } from "express";
import Contact from "../../model/contact";
import User from "../../model/user";
import {
  addMessage,
  getMessagesByContactEmail,
  getMessagesByContactId,
  getMessagesByUser,
  handleErrors,
  sendEmail,
} from "./service";

const Sib = require("sib-api-v3-sdk");
const client = Sib.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.MAIL_API_KEY || "";
const emailDomain = process.env.MAIL_DOMAIN || "";
const siteDomain = process.env.MAIL_DOMAIN || "";
const jwt = require("jsonwebtoken");

export const send = async (req: Request, res: Response) => {
  try {
    const user = jwt.decode(req.headers.authorization);
    const newMessage = await addMessage(req.body, user._id);
    await sendEmail(req.body, Sib, emailDomain, siteDomain, user.email, `${user.fname} ${user.lname}`);
    User.updateOne({ _id: user._id }, { $push: { messages: newMessage._id } });
    Contact.updateOne(
      { _id: req.body.contactId },
      { $push: { messages: newMessage._id } }
    );
    return res.status(200).json({
      message: "Message sent successfully",
      new: newMessage,
    });
  } catch (err) {
    handleErrors(res, err);
  }
};

export const getByUser = async (req: Request, res: Response) => {
  try {
    const userId: string = jwt.decode(req.headers.authorization)._id;
    const messages = await getMessagesByUser(userId);
    return res.status(200).json({ messages: messages?.messages });
  } catch (err) {
    handleErrors(res, err);
  }
};
