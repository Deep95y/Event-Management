const express = require("express");

const {
  exportEventPDF
} = require(
  "../controllers/pdfController"
);

const router = express.Router();

router.get(
  "/event/:id",
  exportEventPDF
);

module.exports = router;