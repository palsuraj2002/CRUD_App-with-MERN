const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/management_app")
    .then(() => {
      console.log("Connected to Database!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
