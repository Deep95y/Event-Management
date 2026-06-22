Event Management System

A full-stack Event Management application that allows users to create, manage, and organize events through a clean and user-friendly interface.

The application provides complete CRUD functionality for events, supports AI-generated event content using Ollama, and allows exporting event details as PDF documents.

Features
Event Management
Create new events
View event details
Update existing events
Delete events with confirmation
Form validation and error handling
Success and error notifications
Event Information

Each event contains:

Event Name
Event Date
Speaker Name
Speaker Designation

Example:

Event Name: Advances in Fetal Medicine
Event Date: 15 August 2026
Speaker Name: Dr. Jane Smith
Speaker Designation: Senior Consultant, ABC Hospital
AI Content Generation (Bonus Feature)

Generate AI-powered content for events using a locally hosted Ollama model.

Generated content includes:

Event Description

2–3 professional paragraphs describing the event.

Speaker Introduction

Approximately 100 words introducing the speaker.

Generated content is stored in MongoDB and can be viewed later without regeneration.

PDF Export (Bonus Feature)

Export event information as a PDF document.

PDF includes:

Event Details
Speaker Details
AI Generated Event Description
AI Generated Speaker Introduction
Technology Stack
Frontend
React.js
React Router DOM
Axios
React Toastify
CSS
Backend
Node.js
Express.js
Database
MongoDB Atlas
Mongoose
AI Integration
Ollama
Llama 3.2 Model
PDF Generation
PDFKit
Project Structure
event-management-system/

├── backend/
│
│   ├── src/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── eventController.js
│   │   ├── pdfController.js
│   │   └── aiController.js
│   │
│   ├── models/
│   │   └── Event.js
│   │
│   ├── routes/
│   │   ├── eventRoutes.js
│   │   ├── pdfRoutes.js
│   │   └── aiRoutes.js
│   │
│   ├── services/
│   │   ├── pdfService.js
│   │   └── aiService.js
│   │
│   ├── middleware/
│   │   └── errorHandler.js
│   │
│   └── app.js
│
│
├── frontend/
│
│   ├── src/
│   │
│   ├── api/
│   │   └── eventApi.js
│   │
│   ├── components/
│   │   ├── EventForm.jsx
│   │   ├── EventTable.jsx
│   │   ├── EventModal.jsx
│   │   └── ConfirmDelete.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── CreateEvent.jsx
│   │
│   ├── hooks/
│   │   └── useEvents.js
│   │
│   ├── services/
│   │   └── eventService.js
│   │
│   ├── utils/
│   │   └── validators.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
│
└── README.md
Setup Instructions
Clone Repository
git clone <repository-url>

cd event-management-system
Backend Setup

Navigate to backend folder:

cd backend

Install dependencies:

npm install

Create .env

PORT=5000

MONGO_URI=your_mongodb_connection_string

Start backend:

npm run dev

Backend will run on:

http://localhost:5000
Frontend Setup

Navigate to frontend folder:

cd frontend

Install dependencies:

npm install

Create .env

VITE_API_URL=http://localhost:5000/api

Start frontend:

npm run dev

Frontend will run on:

http://localhost:5173
Ollama Setup (AI Feature)

Install Ollama:

Ollama Official Website

Download model:

ollama pull llama3.2

Start Ollama:

ollama serve

Verify installation:

ollama list

Expected output:

NAME
llama3.2
API Endpoints
Events
Create Event
POST /api/events
Get All Events
GET /api/events
Get Event By ID
GET /api/events/:id
Update Event
PUT /api/events/:id
Delete Event
DELETE /api/events/:id
AI Content Generation

Generate AI-powered event content.

POST /api/ai/event/:id

Response:

{
  "success": true,
  "message": "AI Content Generated"
}
PDF Export

Export event details.

GET /api/pdf/event/:id

Returns:

application/pdf
Validation Rules

The following fields are mandatory:

Event Name
Event Date
Speaker Name
Speaker Designation

Validation includes:

Empty field checks
Invalid date validation
MongoDB ObjectId validation
API error handling
Error Handling

The application handles various error scenarios including:

Missing Required Fields

Example:

{
  "eventName": ""
}

Response:

{
  "success": false,
  "message": "All fields are required"
}
Invalid Event ID

Response:

{
  "success": false,
  "message": "Event not found"
}
Database Connection Failure

Response:

{
  "success": false,
  "message": "Internal Server Error"
}
AI Service Failure

Examples:

Ollama not running
Model unavailable
Invalid AI response

Response:

{
  "success": false,
  "message": "AI Generation Failed"
}
Assumptions Made
Event names are not required to be unique.
One speaker is associated with each event.
Event dates can be future or past dates.
AI-generated content is stored after generation.
PDF export uses the latest stored event information.
AI Usage

The following AI tools were used during development:

ChatGPT

Used for:

Project architecture planning
API design guidance
Component structure recommendations
Error handling strategies
Documentation assistance
Ollama (Llama 3.2)

Used for:

Event Description generation
Speaker Introduction generation

AI-generated code and suggestions were reviewed, modified, and integrated into the final solution.

Future Improvements

Given additional time, the following enhancements could be implemented:

Authentication and authorization
User accounts and event ownership
Event image uploads
Event search and filtering
Pagination and sorting
Multiple speakers per event
Rich text editor for event descriptions
Email notifications
Calendar integration
Cloud-hosted AI provider support (OpenAI/Gemini)
Docker containerization
Automated testing with Jest and React Testing Library
Deployment
Backend


Can be deployed on:

Vercel
Netlify
Author

Deepa Yadav

Full Stack Developer | MERN Stack Developer
