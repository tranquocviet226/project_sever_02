const express = require("express");
const router = express.Router();
const controllerApiUser = require("../controllers/user/user");
const {
  requireEmailLogin,
  requirePasswordLogin,
  requireEmailRegister,
  requireVerifyCode,
  requirePasswordRegister,
  requireEmail,
} = require("../controllers/user/validators");
const { handleErrors } = require("../controllers/user/middleware");
const verify_token = require("../config/verify_token");

module.exports = router;

// User
router.post(
  "/user/login",
  [requireEmailLogin, requirePasswordLogin],
  handleErrors(),
  controllerApiUser.checkLogin
);
router.post(
  "/user/register",
  [requireEmailRegister, requirePasswordRegister, requireVerifyCode],
  handleErrors(),
  controllerApiUser.checkRegister
);
router.post(
  "/user/verify_email",
  [requireEmailRegister],
  handleErrors(),
  controllerApiUser.verifyEmail
);
router.get(
  "/user/information",
  [requireEmail],
  handleErrors(),
  verify_token,
  controllerApiUser.userInfomation
);
