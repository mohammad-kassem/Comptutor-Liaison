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

contactRouter.post("/add", userMiddleware(), add);
contactRouter.get("/", userPermissionsContact(), get);
contactRouter.put("/update", userMiddleware(), userPermissionsContact(), update);
contactRouter.delete("/remove", userMiddleware(), userPermissionsContact(), remove);
contactRouter.put("/like", userMiddleware(), userPermissionsContact(), like);
contactRouter.put("/unlike", userMiddleware(), userPermissionsContact(), unlike);
contactRouter.get("/like", userMiddleware(), getLiked);
contactRouter.get("/unlike", userMiddleware(), getUnliked);

export default contactRouter;
