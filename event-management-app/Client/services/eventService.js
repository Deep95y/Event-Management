import eventApi from "../api/eventApi";

export const getEvents = async () => {
  const response = await eventApi.get("/events");
  return response.data;
};

export const getEventById = async (id) => {
  const response = await eventApi.get(`/events/${id}`);
  return response.data;
};

export const createEvent = async (payload) => {
  const response = await eventApi.post(
    "/events",
    payload
  );

  return response.data;
};

export const updateEvent = async (
  id,
  payload
) => {
  const response = await eventApi.put(
    `/events/${id}`,
    payload
  );

  return response.data;
};

export const deleteEvent = async (id) => {
  const response = await eventApi.delete(
    `/events/${id}`
  );

  return response.data;
};

export const exportEventPDF = async (
  id
) => {
  const response =
    await eventApi.get(
      `/pdf/event/${id}`,
      {
        responseType: "blob"
      }
    );

  return response.data;
};

export const generateAIContent =
  async (id) => {

  const response =
    await eventApi.post(
      `/ai/event/${id}`
    );

  return response.data;
};