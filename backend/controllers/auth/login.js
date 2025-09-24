const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const doctor = require("../../models/doctor");
const CryptoJS = require("crypto-js");
const { loginValidation } = require("../../validations/auth/login-validation");

const login = asyncHandler(async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }
  const user = await doctor.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.status(401).json({
      message: "كلمة المرور أو البريد الإلكتروني غير صحيح.",
    });
  }
  const ismatched = await bcrypt.compare(req.body.password, user.password);

  if (!ismatched) {
    return res.status(401).json({
      message: "كلمة المرور أو البريد الإلكتروني غير صحيح.",
    });
  }
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.TOKEN_EXPIRES,
  });
  const secretKey = process.env.CRYPTOJS_SECRET_KEY;
  const encrypted = CryptoJS.AES.encrypt(token, secretKey).toString();
  res.cookie("token", encrypted, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "lax",
  });
  return res.status(200).json({ message: "تم تسجيل الدخول بنجاح" });
});
module.exports = { login };
