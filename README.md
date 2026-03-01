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

**Backend (RESTful API):**
* Python 3.x, Flask (Blueprints architecture)
* SQLite/PostgreSQL (Database)
* APScheduler (Background tasks & cron jobs)
* JWT (JSON Web Tokens) & bcrypt (Security)

**Frontend (SPA):**
* React.js (Vite)
* Tailwind CSS
* React Router DOM

## 📁 Project Structure

```text
BK-Tutor-Apps/
├── backend/
│   ├── core/              # Database mock, Models, and Security/Auth logic
│   ├── modules/           # Feature blueprints (auth, scheduling, library, chatbot, admin)
│   ├── API_SHEET.md       # Detailed API documentation for Frontend
│   ├── app.py             # Flask application entry point
│   └── requirements.txt   # Python dependencies
└── frontend/
    ├── src/               # React components, pages, and assets
    ├── public/            # Static files
    ├── package.json       # Node.js dependencies
    └── tailwind.config.js # Tailwind CSS configuration
