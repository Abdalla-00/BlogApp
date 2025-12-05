import cloudinary from "cloudinary"
import { CLOUDINARY_api_key, CLOUDINARY_name, CLOUDINARY_secret } from "./config"

cloudinary.v2.config({
    cloud_name:CLOUDINARY_name,
    api_key:CLOUDINARY_api_key,
    api_secret:CLOUDINARY_secret
});

export default cloudinary.v2;