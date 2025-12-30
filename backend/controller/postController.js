
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



export const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(400).send("Not Found");

        res.status(200).json({
            message: 'Post deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};