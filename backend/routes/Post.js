import express from "express";
import { createPost } from "../controller/postController.js";
import { authenticate } from "../middleware/authmiddleware.js";
import upload from "../middleware/uploadCloudniray.js";

const postRoute = express.Router();

postRoute.post("/create_post",authenticate , upload , createPost);

export default postRoute;
