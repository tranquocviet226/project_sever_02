const mongose = require("mongoose");

const UserSchema = new mongose.Schema({
  email: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
  user_name: {
    type: String,
    default: null,
  },
  phone: {
    type: Number,
    default: null,
  },
  gender: {
    type: String,
    default: null
  },
  birthday: {
    type: Date,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  role_id: {
    type: Number,
    default: 1,
  },
  image_path: {
    type: String,
    default: null,
  },
  device_token: {
    type: String,
    default: null,
  },
  confirm_email_code: {
    type: String,
    default: null,
  },
  confirm_email_expires: {
    type: Date,
    default: null,
  },
  created_date: {
    type: Date,
    default: Date.now()
  }
});

const User = mongose.model("User", UserSchema);
module.exports = User;
