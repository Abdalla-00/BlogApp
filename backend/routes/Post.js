import express from "express";
import { createPost } from "../controller/postController";
import { authenticate } from "../middleware/authmiddleware";

const postRoute = express.Router();

postRoute.post("/create_post",authenticate , createPost);

export default postRoute;
