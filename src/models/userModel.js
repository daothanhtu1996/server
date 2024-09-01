const { default: mogoose } = require("mongoose");
const UserSchema = new mogoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  passWord: {
    type: String,
    require: true,
  },
  photoUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const UserModel = mogoose.model("users", UserSchema);
module.exports = UserModel;
