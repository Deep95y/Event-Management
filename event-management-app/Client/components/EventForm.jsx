import { useState } from "react";

import {
  validateEvent,
} from "../utils/validators";

const EventForm = ({
  initialData,
  onSubmit,
  submitText,
}) => {
  const [formData, setFormData] =
    useState(
      initialData || {
        eventName: "",
        eventDate: "",
        speakerName: "",
        speakerDesignation: "",
      }
    );

  const [errors, setErrors] =
    useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors =
      validateEvent(formData);

    if (
      Object.keys(validationErrors)
        .length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={formData.eventName}
          onChange={handleChange}
        />
        <small>
          {errors.eventName}
        </small>
      </div>

      <div>
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
        />
        <small>
          {errors.eventDate}
        </small>
      </div>

      <div>
        <input
          type="text"
          name="speakerName"
          placeholder="Speaker Name"
          value={formData.speakerName}
          onChange={handleChange}
        />
        <small>
          {errors.speakerName}
        </small>
      </div>

      <div>
        <input
          type="text"
          name="speakerDesignation"
          placeholder="Speaker Designation"
          value={
            formData.speakerDesignation
          }
          onChange={handleChange}
        />
        <small>
          {
            errors.speakerDesignation
          }
        </small>
      </div>

      <button type="submit">
        {submitText}
      </button>
    </form>
  );
};

export default EventForm;