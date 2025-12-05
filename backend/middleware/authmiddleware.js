import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  try {
  } catch (error) {
    console.log("error at auth ", error);
    return res.status(403).send("Access denied please login");
  }
};
