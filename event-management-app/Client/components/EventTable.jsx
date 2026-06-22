const EventTable = ({
  events,
  onView,
  onEdit,
  onDelete,
  onExport,
  onGenerateAI
}) => {
  if (!events.length) {
    return (
      <div className="empty-state">
        No Events Found
      </div>
    );
  }

  return (
    <table className="event-table">
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Date</th>
          <th>Speaker</th>
          <th>Designation</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {events.map((event) => (
          <tr key={event._id}>
            <td>{event.eventName}</td>

            <td>
              {new Date(
                event.eventDate
              ).toLocaleDateString()}
            </td>

            <td>{event.speakerName}</td>

            <td>
              {event.speakerDesignation}
            </td>

            <td>
              <button
                onClick={() =>
                  onView(event)
                }
              >
                View
              </button>

              <button
                onClick={() =>
                  onEdit(event)
                }
              >
                Edit
              </button>

              <button
                onClick={() =>
                  onDelete(event)
                }
              >
                Delete
              </button>

              <button
                onClick={() =>
                    onExport(event)
                }
                >
                Export PDF
                </button>

                {
                  !event.eventDescription &&
                  (
                    <button
                      onClick={() =>
                        onGenerateAI(event)
                      }
                    >
                      Generate AI
                    </button>
                  )
                }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;