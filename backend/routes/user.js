import express, { Router } from "express";
import { registerUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/register-User", registerUser);

export default userRouter;
