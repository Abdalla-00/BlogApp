import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT;
export const dbURL = process.env.MONGOSURL;
export const JWT_SECRET = process.env.JWT_SECRET;

export const CLOUDINARY_name = process.env.CLOUDINARY_NAME;
export const CLOUDINARY_api_key = process.env.CLOUDINARY_API_Key;
export const CLOUDINARY_secret = process.env.CLOUDINARY_SECRET;
