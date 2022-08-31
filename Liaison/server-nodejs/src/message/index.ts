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

export default messageRouter;
