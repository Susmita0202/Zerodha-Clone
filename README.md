## 📌 About the Project

This project is a **Zerodha-like trading platform clone** built to understand how real-world full-stack applications work.

The application is divided into **three main parts**:

1. **Frontend (Public Website)**
2. **Dashboard (User Trading Panel)**
3. **Backend (Server & Database)**

Each part has a clear role and works together to provide a smooth user experience.

---

## 🌐 Frontend (Public Website)

The frontend is the **public-facing website**, similar to Zerodha’s main site.

### What it does:

* Shows landing pages like Home, Pricing, Products, About, and Support
* Allows users to **Sign Up** and **Log In**
* After successful login, it **redirects the user to the dashboard**

### Built with:

* React (Create React App)
* React Router
* CSS for styling

---

## 📊 Dashboard (User Trading Panel)

The dashboard is a **private area** that only logged-in users can access.

### What it does:

* Displays user trading data like:

  * Summary
  * Holdings
  * Orders
  * Positions
  * Funds
* Fetches real data from the backend database
* Allows users to **log out** using a profile dropdown
* Uses protected routes so unauthorized users cannot access it

### Built with:

* React
* React Router
* Context API
* Fetch API for backend communication

---

## 🔐 Backend (Server & Database)

The backend handles **authentication, data storage, and APIs**.

### What it does:

* User authentication using JWT and cookies
* Stores data like holdings, orders, and positions in MongoDB
* Provides APIs for frontend and dashboard
* Handles secure login and logout
* Manages CORS and cookies for deployed environments

### Built with:

* Node.js
* Express.js
* MongoDB (Atlas)
* JWT Authentication

---

## 🔄 How the Website Works (Flow)

1. User opens the **frontend website**
2. User signs up or logs in
3. On successful login, the user is redirected to the **dashboard**
4. Dashboard fetches user data from the backend
5. User can navigate between dashboard sections
6. User can log out and return to the frontend

---

## 🚀 Deployment

The project is deployed on **Render** as three separate services:

* Frontend → Static Site
* Dashboard → Static Site
* Backend → Web Service

Environment variables are used to manage backend URLs and authentication securely.

---

## 🎯 Purpose of This Project

This project was built to:

* Learn **full-stack development**
* Understand **authentication and protected routes**
* Practice **React routing and state management**
* Experience **real deployment workflows**
* Build a project close to a **real-world trading platform**

---
