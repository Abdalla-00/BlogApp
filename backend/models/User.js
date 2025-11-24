import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      validate: [validator.isEmail, "please enter a valid email"],
    },

    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
      validate: [
        {
          validator: (value) => validator.isStrongPassword(value),
          message:
            "Password must contain   one more alphanumetric character and symbols",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

// start middleware  password appears or disappear  it take true and false
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
