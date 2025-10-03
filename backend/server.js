import express from "express";
import connectDB from "./config/db.js";
import chalk from "chalk";
import { registerUser } from "./controller/userController.js";
import userRouter from "./routes/user.js";

const app = express();

const PORT = 4545;
app.use(express.json());


// app.post("/api/register-User", registerUser);
app.use('/api/user',userRouter)

connectDB();
app.listen(PORT, () => {
  console.log(`${chalk.blue.bold("server is on")}: http://localhost:${PORT}`);
});
