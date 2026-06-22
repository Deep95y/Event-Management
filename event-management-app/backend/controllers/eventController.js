const mongoose = require("mongoose");

const eventService = require(
  "../services/eventService"
);

const {
  successResponse,
  errorResponse
} = require("../utils/responseHandler");

const createEvent = async (
  req,
  res,
  next
) => {
  try {
    const event =
      await eventService.createEvent(
        req.body
      );

    return successResponse(
      res,
      "Event created successfully",
      event,
      201
    );
  } catch (error) {
    next(error);
  }
};

const getAllEvents = async (
  req,
  res,
  next
) => {
  try {
    const events =
      await eventService.getAllEvents();

    return successResponse(
      res,
      "Events fetched successfully",
      events
    );
  } catch (error) {
    next(error);
  }
};

const getEventById = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;

    if (
      !mongoose.Types.ObjectId.isValid(id)
    ) {
      return errorResponse(
        res,
        "Invalid Event ID",
        400
      );
    }

    const event =
      await eventService.getEventById(id);

    if (!event) {
      return errorResponse(
        res,
        "Event not found",
        404
      );
    }

    return successResponse(
      res,
      "Event fetched successfully",
      event
    );
  } catch (error) {
    next(error);
  }
};

const updateEvent = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;

    if (
      !mongoose.Types.ObjectId.isValid(id)
    ) {
      return errorResponse(
        res,
        "Invalid Event ID",
        400
      );
    }

    const updatedEvent =
      await eventService.updateEvent(
        id,
        req.body
      );

    if (!updatedEvent) {
      return errorResponse(
        res,
        "Event not found",
        404
      );
    }

    return successResponse(
      res,
      "Event updated successfully",
      updatedEvent
    );
  } catch (error) {
    next(error);
  }
};

const deleteEvent = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;

    if (
      !mongoose.Types.ObjectId.isValid(id)
    ) {
      return errorResponse(
        res,
        "Invalid Event ID",
        400
      );
    }

    const deletedEvent =
      await eventService.deleteEvent(id);

    if (!deletedEvent) {
      return errorResponse(
        res,
        "Event not found",
        404
      );
    }

    return successResponse(
      res,
      "Event deleted successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
};