import { Router } from "express";
import { get } from "./controller";

const userRouter: Router = Router();

userRouter.get("/", get);

export default userRouter;
