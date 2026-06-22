const EventModal = ({
  isOpen,
  event,
  onClose,
}) => {
  if (!isOpen || !event) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Event Details</h2>

        <p>
          <strong>Name:</strong>{" "}
          {event.eventName}
        </p>

        <p>
          <strong>Date:</strong>{" "}
          {new Date(
            event.eventDate
          ).toLocaleDateString()}
        </p>

        <p>
          <strong>Speaker:</strong>{" "}
          {event.speakerName}
        </p>

        <p>
          <strong>Designation:</strong>{" "}
          {event.speakerDesignation}
        </p>

        <hr />

        <h3>
          Event Description
        </h3>

        <p>
          {
            event.eventDescription ||
            "Not generated"
          }
        </p>

        <hr />

        <h3>
          Speaker Introduction
        </h3>

        <p>
          {
            event.speakerIntroduction ||
            "Not generated"
          }
        </p>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;