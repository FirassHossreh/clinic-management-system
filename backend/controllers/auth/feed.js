const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const doctor = require("../../models/doctor");
const CryptoJS = require("crypto-js");
const { feedValidation } = require("../../validations/auth/feed-validation.js");

const feed = asyncHandler(async (req, res) => {
  // Joi validation
  const { error } = feedValidation(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }

  const { firstName, lastName, email, password } = req.body;

  // Email var mı kontrol
  const existingDoctor = await doctor.findOne({ email });
  if (existingDoctor) {
    return res
      .status(400)
      .json({ message: "Bu e-posta ile zaten kayıtlı bir doktor var." });
  }

  // Şifre hash
  const hashedPassword = await bcrypt.hash(password, 10);

  // Yeni doktor oluştur
  const newDoctor = await doctor.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  // JWT token oluştur
  const token = jwt.sign({ id: newDoctor._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.TOKEN_EXPIRES,
  });

  // Token’i CryptoJS ile şifrele
  const secretKey = process.env.CRYPTOJS_SECRET_KEY;
  const encrypted = CryptoJS.AES.encrypt(token, secretKey).toString();

  // Cookie’ye kaydet
  res.cookie("token", encrypted, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60, // 1 saat
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "lax",
  });

  return res.status(201).json({
    message: "Kayıt başarılı",
    doctor: {
      id: newDoctor._id,
      firstName: newDoctor.firstName,
      lastName: newDoctor.lastName,
      email: newDoctor.email,
    },
  });
});

module.exports = { feed };
