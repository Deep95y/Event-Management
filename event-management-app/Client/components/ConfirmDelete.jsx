const ConfirmDelete = ({
  isOpen,
  event,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen || !event) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>
          Delete "{event.eventName}" ?
        </h3>

        <p>
          This action cannot be
          undone.
        </p>

        <div>
          <button
            onClick={() =>
              onConfirm(event._id)
            }
          >
            Yes
          </button>

          <button
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;