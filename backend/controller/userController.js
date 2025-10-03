import user from "../models/User.js";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    // info
    const { email, username, password } = req.body;
    // const email = req.body.email;
    // const username = req.body.username;
    // const password = req.body.password;

    const isUserExist = await User.findOne({
      $or: [
        { email: email.toLowerCase() },
        { username: username.toLowerCase() },
      ],
    });

    if (isUserExist) {
      return res.status(400).send("email or username already exist");
    }

    const userInfo = new User({
      username: username,
      password: password,
      email: email,
    });
    await userInfo.save();

    userInfo.password = undefined;

    return res.status(201).send(userInfo);
  } catch (err) {
    console.log("error at registerUser", err.message);
    res.send("something went wrong" + err.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await user
      .findOne({
        email: email.toLowerCase(),
      })
      .select("+password");

    if (!isUserExist) {
      return res.status(400).send("Invalid Email please provide email");
    }

    //Check password

    const isPasswordCorrect = await isUserExist.comparePassword(password)
    if(!isPasswordCorrect){
      return res.status(400).send("Incorrect password")

    }

    res.status(200).send("login success")
  } catch (err) {
    console.log("there is error", err);
    res.send(err.message);
  }
};
