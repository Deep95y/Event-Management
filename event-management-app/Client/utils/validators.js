export const validateEvent = (
  formData
) => {
  const errors = {};

  if (!formData.eventName?.trim()) {
    errors.eventName =
      "Event name is required";
  }

  if (!formData.eventDate) {
    errors.eventDate =
      "Event date is required";
  }

  if (
    isNaN(
      new Date(formData.eventDate).getTime()
    )
  ) {
    errors.eventDate =
      "Invalid event date";
  }

  if (!formData.speakerName?.trim()) {
    errors.speakerName =
      "Speaker name is required";
  }

  if (
    !formData.speakerDesignation?.trim()
  ) {
    errors.speakerDesignation =
      "Speaker designation is required";
  }

  return errors;
};