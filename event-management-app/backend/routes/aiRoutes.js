const express = require("express");

const {
  generateAIContent
} = require(
  "../controllers/aiController"
);

const router = express.Router();

router.post(
  "/event/:id",
  generateAIContent
);

module.exports = router;