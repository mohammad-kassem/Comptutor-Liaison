import { Router } from "express";
import { login, register } from "./controller";

const userRouter: Router = Router();

userRouter.post("/register", register);
export default userRouter;
