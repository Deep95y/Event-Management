require("dotenv").config();

const connectDB = require("../config/db");
const app = require("../src/app");

module.exports = async (req, res) => {
  await connectDB();
  app(req, res);
};
