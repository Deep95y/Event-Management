import { useNavigate } from "react-router-dom";

import EventForm from "../components/EventForm";

import { createEvent } from "../services/eventService";

import { toast } from "react-toastify";

const CreateEvent = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    formData
  ) => {
    try {
      await createEvent(formData);

      toast.success(
        "Event created successfully"
      );

      navigate("/");
    } catch (error) {
      toast.error(
        "Failed to create event"
      );
    }
  };

  return (
    <div className="container">
      <h1>Create Event</h1>

      <EventForm
        onSubmit={handleSubmit}
        submitText="Create Event"
      />
    </div>
  );
};

export default CreateEvent;