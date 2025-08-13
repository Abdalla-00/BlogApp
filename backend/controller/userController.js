import user from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

  

  } catch (err) {
    console.log("error at registerUser", err);
    res.send("something went wrong");
  }
};
