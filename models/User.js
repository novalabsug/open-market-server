import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
