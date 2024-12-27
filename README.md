# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Complaint Management System

## Overview
This system allows users to submit complaints with multimedia attachments and provides administrators with tools to manage and export complaints.

## Features
- User submission of complaints with images, videos, and audio.
- Real-time complaint status tracking.
- Admin dashboard to view, delete, and export complaints as JSON.
- Modern and responsive UI with React and Vite.
- Backend implemented with FastAPI and SQLite.

## Setup Instructions
### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Start the FastAPI server:
    ```bash
    uvicorn backend.app:app --reload
    ```

### Frontend
1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install Node.js dependencies:
    ```bash
    npm install
    ```
3. Start the Vite development server:
    ```bash
    npm run dev
    ```

## Usage
- Access the frontend at `http://localhost:5173`.
- API is available at `http://localhost:8000`.

## Directory Structure
Refer to the provided folder layout.


# Directory Structure
complaint_management/
├── backend/
│   ├── app.py
│   ├── database.py
│   ├── models.py
│   ├── routes/
│   │   ├── admin_routes.py
│   │   ├── complaint_routes.py
│   ├── utils/
│   │   ├── file_upload.py
│   │   ├── json_export.py
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminView.jsx
│   │   │   ├── ComplaintForm.jsx
│   │   │   ├── StatusCheck.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
├── .env
├── .gitignore
├── package.json
├── requirements.txt