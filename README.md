# 🚚 Hyper Local Delivery Dispatcher

A full-stack MERN application designed to manage hyper-local parcel deliveries through role-based dashboards for Customers, Delivery Partners, and Administrators.

The system allows customers to create delivery requests, administrators to assign delivery partners, and delivery partners to manage and complete deliveries efficiently.

---

## 📌 Project Overview

Hyper Local Delivery Dispatcher is a logistics management platform built using the MERN Stack.

The application provides:

* Secure JWT Authentication
* Role-Based Access Control (RBAC)
* Order Management
* Delivery Assignment
* Delivery Tracking Workflow
* Responsive Dashboard UI
* MongoDB Data Persistence

---

## 🎯 Problem Statement

Traditional local delivery systems often rely on manual assignment and tracking processes.

This project automates:

* Order Creation
* Delivery Assignment
* Status Management
* User Authentication
* Role-Based Operations

through a centralized web application.

---

## 👥 User Roles

### Customer

Customers can:

* Register and Login
* Create Delivery Orders
* View Their Orders
* Track Delivery Status

### Delivery Partner

Delivery Partners can:

* Login
* View Assigned Deliveries
* Accept Deliveries
* Mark Deliveries as Completed

### Administrator

Administrators can:

* View All Orders
* View Delivery Partners
* Assign Deliveries
* Monitor System Operations

---




## 🔐 Demo Credentials

Project evaluators and mentors can use the following accounts to test the application.

### Admin Account

Email:

```text
admin@gmail.com
```

Password:

```text
password123
```

### Testing Flow

1. Login as Admin
2. View all orders
3. Assign delivery partners
4. Monitor deliveries

---

If needed, evaluators can also create new Customer and Delivery Partner accounts using the Register page.

## 🚀 Features

### Authentication

* User Registration
* User Login
* JWT Token Authentication
* Protected Routes
* Secure Password Hashing using bcryptjs

### Role Based Access Control

Roles Supported:

* Customer
* Delivery Partner
* Admin

Authorization is enforced on both frontend and backend.

### Order Management

* Create Order
* View Orders
* View Order Details
* Update Order Status

### Delivery Management

* Assign Delivery Partner
* Accept Delivery
* Complete Delivery
* Delivery Status Updates

### Dashboard System

* Customer Dashboard
* Admin Dashboard
* Delivery Partner Dashboard

### Responsive UI

* Built using Tailwind CSS
* Mobile Friendly
* Dashboard Layouts
* Status Badges
* Modern Forms

---

## 🏗️ System Workflow

Customer Login

↓

Create Order

↓

Order Status = Pending

↓

Admin Login

↓

Assign Delivery Partner

↓

Order Status = Assigned

↓

Delivery Partner Login

↓

Accept Delivery

↓

Order Status = Accepted

↓

Complete Delivery

↓

Order Status = Delivered

↓

Customer Views Delivered Order

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router DOM
* Redux Toolkit
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Socket.IO

### Database

* MongoDB Atlas

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```text
Hyper-Local-Delivery-Dispatcher

├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── socket
│   │   ├── utils
│   │   ├── app.js
│   │   └── server.js
│   └── rest
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── hooks
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── store
│   │   └── utils
│   └── public
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>

cd Hyper-Local-Delivery-Dispatcher
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

## 🔑 Environment Variables

### Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

NODE_ENV=development
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

## 🔌 API Endpoints

### Authentication

```http
POST /api/auth/register

POST /api/auth/login

GET /api/auth/me
```

### Orders

```http
POST /api/orders

GET /api/orders

GET /api/orders/:id

PATCH /api/orders/:id/status
```

### Deliveries

```http
POST /api/deliveries

GET /api/deliveries

PATCH /api/deliveries/:id/accept

PATCH /api/deliveries/:id/complete
```




---

## Future Enhancements

* Real-Time Delivery Tracking
* Push Notifications
* Email Notifications
* Payment Gateway Integration
* Analytics Dashboard
* Route Optimization

---

## Author

**Vivekananda Reddy**

MERN Stack Developer

Anurag University

---

## License

This project is developed for educational and portfolio purposes.
