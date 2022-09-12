import { Router } from "express";
import { adminMiddleware } from "../../middleware/adminMid";
import { userMiddleware } from "../../middleware/userMid";
import { userPermissionsMessage } from "../../middleware/userPermissions";
import {
  getByContactEmail,
  getByContactId,
  getByUser,
  send,
  get,
  getByUserId,
} from "./controller";

const messageRouter: Router = Router();

messageRouter.post("/send", userMiddleware(), send);
messageRouter.get("/", userMiddleware(), get);
messageRouter.get("/user", userMiddleware(), getByUser);
messageRouter.get("/contact", userPermissionsMessage(), getByContactId);
messageRouter.post("/contact", userPermissionsMessage(), getByContactEmail);
messageRouter.get("/admin", adminMiddleware(), getByUserId);


export default messageRouter;
