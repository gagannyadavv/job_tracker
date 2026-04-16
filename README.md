# 🚀 Job Application Tracker Backend

A backend system that helps users track and manage their job applications with features like authentication, job management, filtering, pagination, resume uploads, and automated email reminders.

---

## 📌 Features

🔐 User Authentication (Register & Login using JWT)
📌 Job Management (Create, Read, Update, Delete)
🔄 Status Tracking (Applied, Interview, Rejected, Offer)
🔍 Search jobs by company name
🎯 Filter jobs by status
📄 Pagination for efficient data handling
📎 Resume Upload (PDF support using Multer)
📧 Email Reminder System (Sends reminder 1 day before follow-up using cron jobs)
🛡️ Protected routes using middleware
⚡ Clean REST API structure

---

## 🧱 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (Authentication)
* Bcrypt (Password hashing)
* Multer (File uploads)
* Nodemailer (Email service)
* Node-cron (Scheduled jobs)

---

## 📁 Project Structure

```
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

**Register**
`POST /api/register`

**Login**
`POST /api/login`

---

## 📌 Job APIs

**Create Job**
`POST /api/create`

**Get All Jobs**
`GET /api/getall`

**Get Single Job**
`GET /api/getjob`

**Update Job**
`PATCH /api/update/:id`

**Delete Job**
`DELETE /api/delete/:id`

---

## 📎 Resume Upload

**Upload Resume**
`POST /api/upload`

* Use `form-data`
* Key: `file` (File)

---

## 📧 Email Reminder System

* Automatically sends reminder emails **1 day before the scheduled follow-up date**
* Implemented using **Node-cron** for scheduling
* Uses **Nodemailer** for sending emails

---

## 🔐 Protected Routes

All job and resume routes require authentication.

Add header:

```
Authorization: Bearer YOUR_TOKEN
```

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_password_or_app_password
```

---

## 🚀 How to Run Locally

```bash
# Clone repository
git clone https://github.com/gagannyadavv/job_tracker.git

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
* Cron Jobs & Email Automation
* MVC Architecture

---

## 📈 Future Improvements

⏰ Advanced scheduling & custom reminders
📊 Analytics dashboard
☁️ Cloud storage (AWS S3)
🧾 Resume versioning
📱 Frontend integration

---

## 👨‍💻 Author

**Gagan**
