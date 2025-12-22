import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if(!token){
      res.status(400).send("No token found")
    }
    console.log("token ", token);

    
  } catch (error) {
    console.log("error at auth ", error);
    return res.status(403).send("Access denied please login");
  }
};
