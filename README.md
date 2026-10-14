# TaskTracker – MERN Stack Application

A full-stack Task Management web application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js).  
Users can register, log in, and manage their personal tasks with features like priority levels, status tracking, filtering, and due dates.

---

## Key Features

- User Authentication (Register / Login) using JWT
- Secure password hashing with bcrypt
- Create, Read, Update, and Delete (CRUD) tasks
- Task Priority (Low, Medium, High)
- Task Status (Pending, In Progress, Completed)
- Filter tasks by status and priority
- Protected routes (only authenticated users can access tasks)
- Responsive and modern UI

---

## Technologies Used

**Frontend:**
- React.js
- React Router DOM
- Axios
- Vite

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcryptjs
- express-validator
- CORS & dotenv

---

## Setup and Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/SudhakarMSP/mern-task-app.git
cd mern-task-app
