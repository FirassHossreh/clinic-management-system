const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");

const router = express.Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/v1/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // Burada user DB’de var mı kontrol et, yoksa kaydet
      // Biz şimdilik direkt profile’ı dönüyoruz
      return done(null, profile);
    }
  )
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
  }),
  (req, res) => {
    // Kullanıcı başarılı şekilde geldi
    const token = jwt.sign(
      { id: req.user.id, email: req.user.emails[0].value },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // production'da true yap
      sameSite: "lax",
    });

    // Başarıyla giriş yaptı → frontend ana sayfaya yönlendir
    res.redirect("http://localhost:3000/");
  }
);

module.exports = router;
