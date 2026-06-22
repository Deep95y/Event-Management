const express = require("express");
const cors = require("cors");

const eventRoutes = require(
  "../routes/eventRoutes"
);

const pdfRoutes = require(
  "../routes/pdfRoutes"
);

const aiRoutes = require(
  "../routes/aiRoutes"
);

const errorHandler = require(
  "../middleware/errorHandler"
);

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/events",
  eventRoutes
);

app.use(
  "/api/pdf",
  pdfRoutes
);

app.use(
  "/api/ai",
  aiRoutes
);

app.get("/", (req, res) => {
  res.json({
    message:
      "Event Management API Running"
  });
});

app.use(errorHandler);

module.exports = app;