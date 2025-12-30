import express from "express";
import { createPost, deletePost } from "../controller/postController.js";
import { authenticate } from "../middleware/authmiddleware.js";
import upload from "../middleware/uploadCloudniray.js";

const postRoute = express.Router();

postRoute.post("/create_post",authenticate , upload , createPost);

postRoute.post("/delete_post",authenticate , deletePost);

export default postRoute;
