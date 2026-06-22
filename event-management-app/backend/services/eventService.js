const Event = require("../models/Event");

const createEvent = async (eventData) => {
  const event = await Event.create(eventData);

  return event;
};

const getAllEvents = async () => {
  return await Event.find().sort({
    createdAt: -1
  });
};

const getEventById = async (id) => {
  return await Event.findById(id);
};

const updateEvent = async (
  id,
  updatedData
) => {
  return await Event.findByIdAndUpdate(
    id,
    updatedData,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteEvent = async (id) => {
  return await Event.findByIdAndDelete(id);
};


module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
};