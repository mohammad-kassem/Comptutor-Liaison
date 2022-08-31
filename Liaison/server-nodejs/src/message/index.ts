import { Router } from "express";
import { userMiddleware } from "../../middleware/userMid";
import { userPermissionsMessage } from "../../middleware/userPermissions";
import {
  getByContactEmail,
  getByContactId,
  getByUser,
  send,
} from "./controller";

const messageRouter: Router = Router();

messageRouter.post("/send", userMiddleware(), send);
messageRouter.get("/user", userMiddleware(), getByUser);
messageRouter.get("/contact", userPermissionsMessage(), getByContactId);
messageRouter.post("/contact", userPermissionsMessage(), getByContactEmail);

export default messageRouter;
