import { Router } from "express";
import { login, register } from "./controller";

const authRouter: Router = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;
