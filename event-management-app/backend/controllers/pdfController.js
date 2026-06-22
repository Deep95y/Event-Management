const Event = require("../models/Event");

const {
  generateEventPDF
} = require("../services/pdfService");

const exportEventPDF = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;

    const event =
      await Event.findById(id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    generateEventPDF(event, res);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  exportEventPDF
};