import express from "express";
import { createPost } from "../controller/postController";

const postRoute = express.Router();

postRoute.post("/create_post", createPost);

export default postRoute;
