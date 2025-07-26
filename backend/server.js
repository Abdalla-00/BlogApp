import express from "express";
import connectDB from "./config/db.js";
import chalk from "chalk";

const app = express();

const PORT = 4545;

app.get("/", (req, res) => {
  res.send("hello");
});
connectDB();
app.listen(PORT, () => {
  console.log(`${chalk.blue.bold('server is on')}: http://localhost:${PORT}`);
});
