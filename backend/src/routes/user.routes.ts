import express from "express";
import { registerUsr } from "../controllers/user.controllers";

const userRouter = express.Router();

userRouter.route("/register").post(registerUsr);

export default userRouter;
