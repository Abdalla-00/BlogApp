import express from "express";
import connectDB from "./config/db.js";
import chalk from "chalk";
import { registerUser } from "./controller/userController.js";

const app = express();

const PORT = 4545;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hellow,word");
});
app.post("/registerUser", registerUser);
connectDB();
app.listen(PORT, () => {
  console.log(`${chalk.blue.bold("server is on")}: http://localhost:${PORT}`);
});
