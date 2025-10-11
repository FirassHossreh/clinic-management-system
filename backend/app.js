
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dataBaseConnection = require("./configs/database-connection");
const authRoute = require("./routes/authRoute");
const cookieParser = require("cookie-parser");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
if (process.env.ENVIRONMENT === "development") {
  app.use(morgan("dev"));
}



dataBaseConnection();

app.use(`/api/${process.env.API_VERSION || "v1"}/`, authRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
