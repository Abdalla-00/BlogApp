import Post from "../models/Post.js";

export const createPost = (req, res) => {
  try {
    
  } catch (error) {
    console.log("error creating post", error);
    res.status(400).send(error.message);
  }
};
