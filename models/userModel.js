import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  { minimize: false } // 'cause cartData is empty by default, mongoose will neglect this property as it is empty at first, so we must add this "minimize: false" option otherwise it will cause an error
);

/* if the model is already available it will use the existing user model, otherwise it will use the userSchema and create a new user model */
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
