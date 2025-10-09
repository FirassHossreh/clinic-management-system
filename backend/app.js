const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dataBaseConnection = require("./configs/database-connection");
const authRoute = require("./routes/authRoute");
const googleAuthRoute = require("./routes/googleAuthRoute");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport"); // Bu satır eksikti!
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL'iniz
    credentials: true,
  })
);
if (process.env.ENVIRONMENT === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

dataBaseConnection();

app.use(`/api/${process.env.API_VERSION || "v1"}/`, authRoute);
app.use(`/api/${process.env.API_VERSION || "v1"}/auth`, googleAuthRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
