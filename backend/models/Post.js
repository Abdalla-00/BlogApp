import mongoose, { Types } from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  contant: {
    type: String,
    required: true,
    validate: [
      (value) => value.lenth <= 500,
      "Content should be up to 500 characters long",
    ],
  },
  image: {
    type: String,
    default: null,
  },

  Author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
