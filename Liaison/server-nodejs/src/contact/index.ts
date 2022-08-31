import { Router } from "express";
import { userMiddleware } from "../../middleware/userMid";
import { userPermissionsContact } from "../../middleware/userPermissions";
import {
  add,
  get,
  getLiked,
  getUnliked,
  like,
  remove,
  unlike,
  update,
} from "./controller";

const contactRouter: Router = Router();

export default contactRouter;
