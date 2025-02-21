# Taskly - Task Management System

## Overview

Taskly is a task management application designed to help users organize their workflow efficiently. It supports adding, editing, deleting, and reordering tasks, as well as real-time updates and authentication via Google Sign-in.

## Live Demo

[Taskly Live Demo](https://tasklyy.vercel.app) *(Replace with actual live link)*

## Features

### 1. Authentication
- **Google Sign-in** using Firebase Authentication.
- Stores user details (ID, email, display name) in the database.

### 2. Task Management
- **Add, edit, delete, and reorder** tasks.
- Tasks categorized into:
  - **To-Do**
  - **In Progress**
  - **Done**
- Drag-and-drop functionality to move tasks between categories.
- Task properties:
  - Title (max 50 characters, required)
  - Description (max 200 characters, optional)
  - Timestamp (auto-generated on creation)
  - Category (To-Do, In Progress, Done)

### 3. Database & Persistence
- **MongoDB** (via Express.js) to store tasks.
- Real-time synchronization (uses MongoDB Change Streams, WebSockets, or Optimistic UI Updates).
- Tasks persist on refresh and reopen.
- Tasks can be permanently deleted from the database.

### 4. Frontend
- Built with **Vite.js** + **React**.
- Uses **react-beautiful-dnd** for drag-and-drop functionality.
- **Tailwind CSS** for styling, providing a responsive and customizable UI.
- Additional frameworks/component libraries include [list any other libraries here, e.g., `React Router`, `axios`, `date-fns`, etc.].
- Clean, modern, and minimal UI with a **maximum of four colors**.

### 5. Backend
- **Express.js API** handles CRUD operations.
- **MongoDB** stores task data.
- API Endpoints:
  - `POST /tasks` – Add a new task
  - `GET /tasks` – Retrieve all tasks for the logged-in user
  - `PUT /tasks/:id` – Update task details (title, description, category)
  - `DELETE /tasks/:id` – Delete a task

### 6. Responsiveness
- Fully responsive for both desktop and mobile devices.
- Drag-and-drop interface works seamlessly on mobile.

### 7. Bonus Features (Optional)
- **Dark Mode** toggle.
- **Task due dates** with overdue task indicators.
- **Activity log** tracking task updates (e.g., "Task moved to Done").

## Tech Stack

- **Frontend**: Vite.js, React, Firebase Authentication, react-beautiful-dnd, Tailwind CSS, [add other libraries here]
- **Backend**: Express.js, MongoDB
- **Database**: MongoDB Atlas (cloud-hosted MongoDB)
- **Authentication**: Firebase Authentication (Google Sign-in)

## Installation & Setup

### Prerequisites
- Node.js installed
- Firebase project set up for authentication
- MongoDB database (local or cloud-based)

### Steps to Run Locally

#### 1. Clone the Repository

```bash
git clone https://github.com/TamimAhmedCD/task-management-system
cd taskly
