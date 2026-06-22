import { useState, useEffect } from "react";

import {
  getEvents,
} from "../services/eventService";

const useEvents = () => {
  const [events, setEvents] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      const response =
        await getEvents();

      setEvents(response.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    events,
    loading,
    fetchEvents,
  };
};

export default useEvents;