require("dotenv").config();

const app = require("./src/app");

const connectDB = require(
  "./config/db"
);

const PORT =
  process.env.PORT || 5000;

connectDB().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});