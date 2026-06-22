import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  deleteEvent,
  updateEvent,
  generateAIContent,
} from "../services/eventService";

import useEvents from "../hooks/useEvents";

import EventTable from "../components/EventTable";
import EventModal from "../components/EventModal";
import ConfirmDelete from "../components/ConfirmDelete";
import EventForm from "../components/EventForm";
import eventApi from "../api/eventApi";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();

  const {
    events,
    loading,
    fetchEvents,
  } = useEvents();

  const [selectedEvent, setSelectedEvent] =
    useState(null);

  const [showViewModal, setShowViewModal] =
    useState(false);

  const [showDeleteModal,
    setShowDeleteModal] =
    useState(false);

  const [editingEvent,
    setEditingEvent] =
    useState(null);

  const handleDelete = async (
    eventId
  ) => {
    try {
      await deleteEvent(eventId);

      toast.success(
        "Event deleted successfully"
      );

      setShowDeleteModal(false);

      fetchEvents();
    } catch (error) {
      toast.error(
        "Failed to delete event"
      );
    }
  };

  const handleEditSubmit =
    async (formData) => {
      try {
        await updateEvent(
          editingEvent._id,
          formData
        );

        toast.success(
          "Event updated successfully"
        );

        setEditingEvent(null);

        fetchEvents();
      } catch (error) {
        toast.error(
          "Failed to update event"
        );
      }
    };

    const handleExport = async (
    event
    ) => {
    try {
        const response =
        await eventApi.get(
            `/pdf/event/${event._id}`,
            {
            responseType: "blob"
            }
        );

        const blob = new Blob(
        [response.data],
        {
            type: "application/pdf"
        }
        );

        const url =
        window.URL.createObjectURL(blob);

        const link =
        document.createElement("a");

        link.href = url;

        link.download =
        `${event.eventName}.pdf`;

        document.body.appendChild(
        link
        );

        link.click();

        link.remove();
    } catch (error) {
        toast.error(
        "Failed to export PDF"
        );
    }
    };


    const handleGenerateAI =
    async (event) => {

      try {

        await generateAIContent(
          event._id
        );

        toast.success(
          "AI Content Generated"
        );

        fetchEvents();

      } catch (error) {

        toast.error(
          "AI Generation Failed"
        );
      }
    };

  return (
    <div className="container">
      <h1>Event Dashboard</h1>

      <button
        onClick={() =>
          navigate("/create")
        }
      >
        Create Event
      </button>

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <EventTable
          events={events}
          onView={(event) => {
            setSelectedEvent(event);
            setShowViewModal(true);
          }}
          onEdit={(event) =>
            setEditingEvent(event)
          }
          onDelete={(event) => {
            setSelectedEvent(event);
            setShowDeleteModal(true);
          }}

          onExport={(event) => handleExport(event)}
          onGenerateAI={(event) => handleGenerateAI(event)}
        />
      )}

      <EventModal
        isOpen={showViewModal}
        event={selectedEvent}
        onClose={() =>
          setShowViewModal(false)
        }
      />

      <ConfirmDelete
        isOpen={showDeleteModal}
        event={selectedEvent}
        onConfirm={handleDelete}
        onCancel={() =>
          setShowDeleteModal(false)
        }
      />

      {editingEvent && (
        <div className="edit-section">
          <h2>Edit Event</h2>

          <EventForm
            initialData={{
              ...editingEvent,
              eventDate:
                editingEvent.eventDate
                  ?.split("T")[0],
            }}
            onSubmit={
              handleEditSubmit
            }
            submitText="Update Event"
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;