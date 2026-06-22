<div align="center">

# 📅 Event Management System

**A full-stack application to create, manage, and organize events through a clean, user-friendly interface.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Ollama](https://img.shields.io/badge/Ollama-AI-000000?style=for-the-badge)](https://ollama.com/)
[![PDFKit](https://img.shields.io/badge/PDF-Export-E74C3C?style=for-the-badge)](https://pdfkit.org/)

<br />

Complete **CRUD** for events · **AI-generated** content via Ollama · **PDF export** for event details

[Features](#-features) · [Tech Stack](#-technology-stack) · [Setup](#-setup-instructions) · [API](#-api-endpoints) · [Author](#-author)

</div>

---

## 📖 About

The **Event Management System** lets users create, view, update, and delete events with form validation, toast notifications, and a responsive dashboard.

Bonus capabilities include **AI-powered event descriptions and speaker introductions** (stored in MongoDB) and **one-click PDF export** of full event details.

---

## ✨ Features

### 🗂️ Event Management

| Feature | Description |
|--------|-------------|
| ➕ Create | Add new events with validated form inputs |
| 👁️ View | Browse all events and open detail modals |
| ✏️ Update | Edit existing event information |
| 🗑️ Delete | Remove events with confirmation dialog |
| ✅ Validation | Client & server-side field checks |
| 🔔 Notifications | Success and error toasts via React Toastify |

### 📋 Event Information

Each event stores:

- **Event Name**
- **Event Date**
- **Speaker Name**
- **Speaker Designation**

**Example**

| Field | Value |
|-------|-------|
| Event Name | Advances in Fetal Medicine |
| Event Date | 15 August 2026 |
| Speaker Name | Dr. Jane Smith |
| Speaker Designation | Senior Consultant, ABC Hospital |

### 🤖 AI Content Generation *(Bonus)*

Generate professional content using a **locally hosted Ollama** model (`qwen2.5:3b`).

| Output | Details |
|--------|---------|
| 📝 Event Description | 2–3 professional paragraphs |
| 🎤 Speaker Introduction | ~100 words introducing the speaker |

> Generated content is **saved to MongoDB** and can be viewed later without regenerating.

### 📄 PDF Export *(Bonus)*

Export a formatted PDF including:

- Event details
- Speaker details
- AI-generated event description
- AI-generated speaker introduction

---

## 🛠 Technology Stack

<table>
<tr>
<td valign="top" width="50%">

### 🎨 Frontend

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white)

- React.js · React Router DOM
- Axios · React Toastify · Vite

</td>
<td valign="top" width="50%">

### ⚙️ Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square)
![PDFKit](https://img.shields.io/badge/PDFKit-FF6B6B?style=flat-square)

- Node.js · Express.js
- MongoDB Atlas · Mongoose · PDFKit

</td>
</tr>
<tr>
<td colspan="2" align="center">

### 🧠 AI Integration

![Ollama](https://img.shields.io/badge/Ollama-Local_LLM-000000?style=flat-square)
![Qwen](https://img.shields.io/badge/Model-qwen2.5:3b-0066CC?style=flat-square)

</td>
</tr>
</table>

---

## 📁 Project Structure

```
event-management-app/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── eventController.js
│   │   ├── pdfController.js
│   │   └── aiController.js
│   ├── models/
│   │   └── Event.js
│   ├── routes/
│   │   ├── eventRoutes.js
│   │   ├── pdfRoutes.js
│   │   └── aiRoutes.js
│   ├── services/
│   │   ├── eventService.js
│   │   ├── pdfService.js
│   │   └── aiService.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── validateRequest.js
│   ├── src/
│   │   └── app.js
│   └── server.js
│
└── Client/
    ├── api/
    │   └── eventApi.js
    ├── components/
    │   ├── EventForm.jsx
    │   ├── EventTable.jsx
    │   ├── EventModal.jsx
    │   └── ConfirmDelete.jsx
    ├── pages/
    │   ├── Dashboard.jsx
    │   └── CreateEvent.jsx
    ├── hooks/
    │   └── useEvents.js
    ├── services/
    │   └── eventService.js
    ├── utils/
    │   └── validators.js
    └── src/
        ├── App.jsx
        └── main.jsx
```

---

## 🚀 Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Deep95y/Event-Management.git
cd Event-Management/event-management-app
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create **`backend/.env`**:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

Start the server:

```bash
npm run dev
```

🌐 Backend runs at **http://localhost:5000**

### 3️⃣ Frontend Setup

```bash
cd Client
npm install
```

Create **`Client/.env`**:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the dev server:

```bash
npm run dev
```

🌐 Frontend runs at **http://localhost:5173**

### 4️⃣ Ollama Setup *(AI Feature)*

1. Install [Ollama](https://ollama.com/)
2. Pull a model (project uses `qwen2.5:3b`):

```bash
ollama pull qwen2.5:3b
```

3. Ensure Ollama is running:

```bash
ollama serve
```

4. Verify:

```bash
ollama list
```

---

## 🔌 API Endpoints

### 📌 Events

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/events` | Create event |
| `GET` | `/api/events` | Get all events |
| `GET` | `/api/events/:id` | Get event by ID |
| `PUT` | `/api/events/:id` | Update event |
| `DELETE` | `/api/events/:id` | Delete event |

### 🤖 AI Content Generation

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/ai/event/:id` | Generate AI content for an event |

**Response**

```json
{
  "success": true,
  "message": "AI Content Generated"
}
```

### 📄 PDF Export

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/pdf/event/:id` | Download event PDF |

**Returns:** `application/pdf`

---

## ✅ Validation Rules

**Required fields**

- Event Name
- Event Date
- Speaker Name
- Speaker Designation

**Validation includes**

- Empty field checks
- Invalid date validation
- MongoDB ObjectId validation
- API error handling

---

## ⚠️ Error Handling

| Scenario | Example response |
|----------|------------------|
| Missing required fields | `{ "success": false, "message": "All fields are required" }` |
| Invalid event ID | `{ "success": false, "message": "Event not found" }` |
| Database failure | `{ "success": false, "message": "Internal Server Error" }` |
| AI service failure | `{ "success": false, "message": "AI Generation Failed" }` |

**AI failure causes:** Ollama not running · model unavailable · invalid AI response

---

## 💡 Assumptions Made

- Event names are **not** required to be unique
- One speaker is associated with each event
- Event dates can be future or past
- AI-generated content is stored after generation
- PDF export uses the latest stored event information

---

## 🧠 AI Usage

| Tool | Purpose |
|------|---------|
| **ChatGPT** | Architecture planning, API design, component structure, error handling, documentation |
| **Ollama (qwen2.5:3b)** | Event description & speaker introduction generation |

> AI-generated code and suggestions were reviewed, modified, and integrated into the final solution.

---

## 🔮 Future Improvements

- 🔐 Authentication and authorization
- 👤 User accounts and event ownership
- 🖼️ Event image uploads
- 🔍 Event search, filtering, pagination & sorting
- 👥 Multiple speakers per event
- ✍️ Rich text editor for descriptions
- 📧 Email notifications & calendar integration
- ☁️ Cloud AI providers (OpenAI / Gemini)
- 🐳 Docker containerization
- 🧪 Automated testing (Jest & React Testing Library)

---

## ☁️ Deployment

| Layer | Options |
|-------|---------|
| Backend | Render · Railway · Heroku |
| Frontend | Vercel · Netlify |
| Database | MongoDB Atlas |

---

<div align="center">

## 👩‍💻 Author

### **Deepa Yadav**

*Full Stack Developer · MERN Stack Developer*

<br />

⭐ If you found this project useful, consider starring the repository!

</div>
