# 🚀 Job Application Tracker Backend

A backend system that helps users track and manage their job applications with features like authentication, job management, filtering, pagination, and resume uploads.

---

## 📌 Features

* 🔐 User Authentication (Register & Login using JWT)
* 📌 Job Management (Create, Read, Update, Delete)
* 🔄 Status Tracking (Applied, Interview, Rejected, Offer)
* 🔍 Search jobs by company name
* 🎯 Filter jobs by status
* 📄 Pagination for efficient data handling
* 📎 Resume Upload (PDF support using Multer)
* 🛡️ Protected routes using middleware
* ⚡ Clean REST API structure

---

## 🧱 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (Authentication)
* Bcrypt (Password hashing)
* Multer (File uploads)

---

## 📁 Project Structure

```id="p8l2jf"
src/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── database/
├── utils/
│
├── app.js
└── server.js
```

---

## 🔐 Authentication APIs

### Register

POST `/api/register`

### Login

POST `/api/login`

---

## 📌 Job APIs

### Create Job

POST `/api/create`

### Get All Jobs

GET `/api/getall`

### Get Single Job

GET `/api/getjob`

### Update Job

PATCH `/api/update/:id`

### Delete Job

DELETE `/api/delete/:id`

---

## 📎 Resume Upload

### Upload Resume

POST `/api/upload`

* Use `form-data`
* Key: `file` (File)

---

## 🔐 Protected Routes

All job and resume routes require authentication.

Add header:

Authorization: Bearer YOUR_TOKEN

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```id="q6q7ju"
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🚀 How to Run Locally

```id="q6epzk"
# Clone repository
git clone <your-repo-url>

# Install dependencies
npm install

# Run server
npm run dev
```

---

## 🧠 Key Concepts Implemented

* REST API Design
* JWT Authentication & Authorization
* Middleware (Protected Routes)
* MongoDB Query Filtering & Pagination
* File Upload Handling using Multer
* MVC Architecture

---

## 📈 Future Improvements

* ⏰ Email reminder system (cron jobs)
* 📊 Analytics dashboard
* ☁️ Cloud storage (Cloudinary / AWS S3)
* 🧾 Resume versioning

---

---

## 👨‍💻 Author

Gagan
