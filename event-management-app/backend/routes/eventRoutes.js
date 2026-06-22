const express = require("express");

const { body } = require(
  "express-validator"
);

const validateRequest = require(
  "../middleware/validateRequest"
);

const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
} = require(
  "../controllers/eventController"
);

const router = express.Router();

const eventValidation = [
  body("eventName")
    .trim()
    .notEmpty()
    .withMessage(
      "Event Name is required"
    ),

  body("eventDate")
    .notEmpty()
    .withMessage(
      "Event Date is required"
    )
    .isISO8601()
    .withMessage(
      "Invalid Date Format"
    ),

  body("speakerName")
    .trim()
    .notEmpty()
    .withMessage(
      "Speaker Name is required"
    ),

  body("speakerDesignation")
    .trim()
    .notEmpty()
    .withMessage(
      "Speaker Designation is required"
    )
];

router.post(
  "/",
  eventValidation,
  validateRequest,
  createEvent
);

router.get("/", getAllEvents);

router.get("/:id", getEventById);

router.put(
  "/:id",
  eventValidation,
  validateRequest,
  updateEvent
);

router.delete("/:id", deleteEvent);

module.exports = router;