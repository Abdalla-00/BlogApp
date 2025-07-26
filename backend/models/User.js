import mongoose from "mongoose";
import validator, { isStrongPassword } from "validator";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      lowarcase: true,
      require: true,
      uniqued: true,
      validator: [validator.isEmail, "please enter a valid email"],
    },

    username: {
      type: String,
      lowarcase: true,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
      validator: [
        {
          validator: (value) => isStrongPassword(value),
          message:
            "Posword must contain on ot more alpanpmeric charactar ans symbol",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);
  
// start middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

//   hash Password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// compare password
userSchema.methods.comparePassword = async function (givenPassword) {
  return await bcrypt.compare(givenPassword, this.password);
};

// end middleware


// export
const user = mongoose.model("User", userSchema);
export default user;
