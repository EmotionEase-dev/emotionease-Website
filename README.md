````markdown
# 🧠 EmotionEase – Emotional Wellness Consultation Platform

**EmotionEase** is a full-stack emotional well-being consultation platform where users can explore wellness programs, understand the organization's mission, and book sessions for mental and emotional support. This web app is developed using **React.js**, **Node.js**, **Express.js**, and styled with **Bootstrap**.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [License](#license)

---

## 📖 Overview

EmotionEase aims to make professional emotional support accessible to everyone through an intuitive consultation booking system. Users can:
- Learn about the organization and its philosophy
- Explore three unique mental wellness programs
- Apply for a program that fits their needs
- Book sessions directly through the web interface

---

## ✨ Core Features

- 📋 Organization details and vision
- 🧘 Three structured emotional wellness programs
- 🧑‍💼 User program application
- 🗓️ Session booking with date & time selection
- 📩 Notifications or confirmations (email integration ready)
- 📱 Fully responsive design with Bootstrap

---

## 🛠 Tech Stack

**Frontend**
- React.js (with React Router)
- Bootstrap 5
- Axios

**Backend**
- Node.js
- Express.js
- CORS & Body-parser
- dotenv for environment configs

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone hhttps://github.com/EmotionEase-dev
cd emotionease
````

### 2. Setup Frontend

```bash
cd client
npm install
npm start
```

### 3. Setup Backend

```bash
cd ../server
npm install
npm start
```

Or run both using:

```bash
npx concurrently "npm start --prefix client" "npm start --prefix server"
```

---

## 📁 Folder Structure

```
EmotionEase/
├── Backend/                         <-- Node.js + Express API
│   ├── middlewares/                <-- Custom middleware logic
│   │   └── errorHandler.js         <-- Handles API errors in one place
│   │
│   ├── routes/                     <-- All backend API endpoints
│   │   └── contact.js              <-- Handles POST /api/contact (contact form)
│   │
│   ├── .env                        <-- Environment variables (PORT, DB URI, etc.)
│   ├── .gitignore                  <-- Git should ignore node_modules, .env, etc.
│   ├── package.json                <-- Project dependencies for backend
│   ├── package-lock.json           <-- Exact version lock of packages
│   └── server.js                   <-- Express server setup (CORS, body-parser, routing)
|
├── FrontEnd/                        <-- React + Vite Frontend (Client App)
│   ├── components/                 <-- Reusable UI blocks
│   │   └── Navbar.jsx              <-- Navigation bar
│   │   └── NavItem.jsx             <-- Individual nav link
│   │   └── TermsAndConditions.jsx  <-- Component to show terms content
│   │   └── TermsModal.jsx          <-- Modal popup for terms
│   │ 
│   ├── pages/                      <-- Page-level views (each has .jsx & .css)
│   │   └── Home.jsx / Home.css     <-- Landing page layout
│   │   └── About.jsx / About.css   <-- Info about organization
│   │   └── Blogs.jsx / Blogs.css   <-- Blog listing
│   │   └── ContactUs.jsx / ContactUs.css <-- Contact form
│   │   └── CuratedPrograms.jsx / CuratedPrograms.css <-- 3 program sections
│   │
│   ├── public/                     <-- Static files served directly
│   │   └── logo.webp                <-- Logo of the site
│   │   └── mission-image.jpg       <-- Image used in Mission section
│   │   └── Freedom.webp             <-- Program-related illustration
│   │   └── cage.webp / Human.webp    <-- More images used in UI
│   │   └── _redirects              <-- Netlify routing fix file
│   │
│   ├── src/                        <-- Vite’s main source folder (may hold App.jsx, main.jsx)
│   │
│   ├── .gitignore                  <-- Ignores dist, node_modules, .env, etc.
│   ├── vite.config.js              <-- Vite configuration for dev/build
│   ├── package.json                <-- Frontend dependencies
│   ├── package-lock.json           <-- Exact version lock
│   ├── index.html                  <-- Vite entry HTML file
│   ├── README.md                   <-- Project overview and setup instructions


```

---

## 🔌 Sample API Endpoints

| Method | Endpoint            | Description                   |
| ------ | ------------------- | ----------------------------- |
| GET    | `/api/submissions`  | Get the post details          |
| POST   | `/api/submit`       | Submit the contract Details   |

---

## 🚀 Deployment

Frontend: \Netlify
Backend: \ Railway

> Ensure to configure `.env` files for both frontend and backend.

---

## 🙋‍♀️ Author

**Your Name**
📧 [mcthilagavathi@gmail.com](mailto:mcthilagavathi@gmail.com)
GitHub: [https://github.com/MCThilaga](https://github.com/MCThilaga)
