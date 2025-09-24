const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const dataBaseConnection = require("./configs/database-connection");
const doctor = require("./models/doctor");
const authRoute = require("./routes/authRoute");
dotenv.config();
const app = express();

app.use(express.json());

if (process.env.ENVIRONMENT === "development") {
  app.use(morgan("dev"));
}

dataBaseConnection();
app.get("/", async (req, res) => {
  const newDoctor = new doctor({
    firstName: "Dr. John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "password123",
  });
  await newDoctor.save();
  res.send("backend is running...");
});
app.use(`/api/${process.env.API_VERSION || "v1"}/`, authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
