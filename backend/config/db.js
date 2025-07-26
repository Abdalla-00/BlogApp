import mongoose from "mongoose";
import { dbURL } from "./config.js";
import chalk from "chalk";

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log(`${chalk.yellow.bold('connect on')} ${dbURL}`);
  } catch (error) {
    console.log(`error connecting to databse ${error}`);
    process.exit(1);
  }
};

export default connectDB;
