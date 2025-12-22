import express from "express";
import connectDB from "./config/db.js";
import chalk from "chalk";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
import postRoute from "./routes/Post.js";

const app = express();

const PORT = 4545;
app.use(express.json());
app.use(cookieParser());


// app.post("/api/register-User", registerUser);
app.use("/api/user", userRouter);
app.use("/api/Post", postRoute);

connectDB();
app.listen(PORT, () => {
  console.log(`${chalk.blue.bold("server is on")}: http://localhost:${PORT}`);
});
