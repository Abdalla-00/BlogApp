import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  try {

    const token = req.cookie.token;
    console.log("token ", token)
  } catch (error) {
    console.log("error at auth ", error);
    return res.status(403).send("Access denied please login");
  }
};
