import express from "express";
import { createPost } from "../controller/postController.js";
import { authenticate } from "../middleware/authmiddleware.js";

const postRoute = express.Router();

postRoute.post("/create_post",authenticate , createPost);

export default postRoute;
