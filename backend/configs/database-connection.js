const mongoose = require("mongoose");
const dataBaseConnection = () => {
  mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => {
      console.log("Database connection completed successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = dataBaseConnection;
