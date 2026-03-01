# 🎓 BK Tutor Platform

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-Backend-black?logo=flask)
![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)

A comprehensive, full-stack university tutoring management system designed to streamline the scheduling, booking, and document-sharing processes between students and tutors. The platform features an intelligent chatbot, Single Sign-On (SSO) integration, and automated data synchronization.

## ✨ Key Features

* **Role-Based Access Control (RBAC):** Distinct workflows for Admins, Tutors, Students, and University Officers.
* **Smart Scheduling & Booking:** Tutors can open availability slots, and students can book appointments without time conflicts.
* **Single Sign-On (SSO):** Secure and seamless authentication using the university's SSO system with JWT-based session management.
* **Resource Sharing Library:** A centralized hub for uploading, searching, and securely sharing academic documents.
* **AI Chatbot Integration:** An intelligent assistant embedded in the system to answer real-time academic queries.
* **Automated Data Sync:** Configurable scheduler (APScheduler) for continuous data synchronization and background tasks.

## 🛠️ Tech Stack

**Backend:**
* Framework: Flask (Blueprints architecture)
* Database: in-memory `core/database.py` for dev (Data models including User, Role, Appointment, Document)
* Authentication: JWT & bcrypt

**Frontend:**
* React.js (Vite)
* Tailwind CSS
* React Router DOM

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
* Python 3.8+
* Node.js (v16+) & npm

### 1. Backend Setup
Navigate to the `backend` directory, install the required Python packages, and start the Flask server. It will run on `port 5000` by default.

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 2. Frontend Setup
Navigate to the `frontend` directory, install the Node modules, and start the Vite development server:

```bash
cd frontend
npm install
npm run dev
```

## 📖 API Documentation (Summary)

The backend follows a strict RESTful architecture. Timestamps are formatted as `YYYY-MM-DD HH:MM:SS`. Below are the core endpoints:

**Authentication & Profile:**
* `GET /auth/sso/login-url`: Retrieve SSO login URL.
* `GET /auth/profile`: Get the current user's profile (Requires Bearer JWT).
* `POST /auth/logout`: Logout and invalidate token.

**Appointments (Scheduling):**
* `GET /appointments/`: List available sessions (Filterable by `tutor_id`).
* `POST /appointments/`: Create a new session (TUTOR role required).
* `POST /appointments/<apt_id>/book`: Book an existing session (STUDENT role required).

**Library & Documents:**
* `GET /library/`: Search and filter documents.
* `POST /library/upload`: Upload a new document record.

**Admin & Sync:**
* `GET /admin/users`: List all users (ADMIN role required).
* `POST /admin/grant-role`: Update user roles.
