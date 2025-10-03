import express, { Router } from "express";
import { loginUser, registerUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/register-User", registerUser);
userRouter.post("/loginUser",loginUser )

export default userRouter;
