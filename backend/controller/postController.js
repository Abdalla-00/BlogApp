
import Post from "../models/Post.js";

export const createPost = (req, res) => {
  try {
    const currentUser = req.user._id;
    console.log("currentUser", currentUser)
  } catch (error) {
    console.log("error creating post", error);
    res.status(400).send(error.message);
  }
};
