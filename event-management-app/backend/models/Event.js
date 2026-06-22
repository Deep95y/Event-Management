const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
      trim: true
    },

    eventDate: {
      type: Date,
      required: true
    },

    speakerName: {
      type: String,
      required: true,
      trim: true
    },

    speakerDesignation: {
      type: String,
      required: true,
      trim: true
    },

    eventDescription: {
      type: String,
      default: "",
    },

    speakerIntroduction: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Event", eventSchema);