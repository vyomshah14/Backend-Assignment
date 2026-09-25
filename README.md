# 🚀 Backend & JavaScript Assignments Repository

Welcome to the **Backend & JavaScript Assignments** repository. This project contains a structured collection of Node.js, Express.js, and core JavaScript assignments covering array manipulation, objects, modules, middleware, validation, RESTful API architecture, and authentication services.

---

## 📁 Repository Structure

```text
Backend / JS assignment
├── 1/                         # Shopping Cart operations
│   └── shoppingCart.js
├── 2/                         # User Profile management
│   └── userProfile.js
├── 3/                         # Library Management System
│   └── library.js
├── 4/                         # Multiplication Table Generator
│   └── multiplicationTable.js
├── 5/                         # ATM Simulation System
│   └── atm.js
├── 6/                         # Array Processing (Find First Even Number)
│   └── firstEven.js
├── 7/                         # Days & Calendar helper functions
│   └── days.js
├── 8/                         # Student Grading System
│   └── grading.js
├── 9/                         # Express Input Validation Application
│   ├── server.js
│   ├── validator.js
│   ├── image.png
│   └── image copy.png
├── 10/                        # RTO Vehicle Management System
│   ├── rto.js
│   └── rto_data.json
├── 11/                        # Student Directory REST API Server
│   ├── server.js
│   ├── students.json
│   ├── image.png
│   └── image copy.png
├── Major Assignment 1/       # RailConnect Live Ops Dashboard
│   └── opsDashboard.js
├── Major Assignment 2/       # E-Commerce REST API Backend
│   └── backend/
│       ├── controllers/       # Product & Auth Controllers
│       │   ├── authController.js
│       │   └── productController.js
│       ├── routes/            # Product & Auth Express Routes
│       │   ├── authRoutes.js
│       │   └── productRoutes.js
│       ├── services/          # Product & User Business Logic
│       │   ├── productServices.js
│       │   └── userServices.js
│       ├── products.json      # Product Database
│       ├── users.json         # User Database
│       ├── package.json
│       └── server.js
└── Major Assignment 3/       # Modular User Management REST API
    ├── controllers/           # User Controller logic
    │   └── userController.js
    ├── data/                  # User data store
    │   └── users.json
    ├── middleware/            # Custom middleware
    │   ├── logger.js          # Request Logger
    │   └── validation.js      # Input Validation Middleware
    ├── models/                # User Data Model
    │   └── userModel.js
    ├── routes/                # User API Routes
    │   └── userRoutes.js
    ├── package.json
    └── server.js
```

---

## 📚 Summary of Modules & Assignments

### 🔹 Daily JavaScript Assignments (1 - 8)
- **`1/shoppingCart.js`**: Operations for calculating totals, applying discounts, and updating shopping cart items.
- **`2/userProfile.js`**: Managing and formatting user profile objects with ES6 features.
- **`3/library.js`**: Library catalog management system for borrowing, returning, and searching books.
- **`4/multiplicationTable.js`**: Functions to generate customizable multiplication tables.
- **`5/atm.js`**: Interactive ATM transaction simulator handling deposits, withdrawals, and balance inquiries.
- **`6/firstEven.js`**: Array helper function to search and retrieve the first even number.
- **`7/days.js`**: Date and day determination utilities.
- **`8/grading.js`**: Grade calculator logic based on marks percentage and rubrics.

### 🔹 Express.js Applications (9 - 11)
- **`9/`**: Express server featuring custom payload and parameter validators (`validator.js`).
- **`10/`**: RTO Vehicle records lookup and management processing `rto_data.json`.
- **`11/`**: Student information REST API backed by `students.json`.

---

## ⭐️ Major Assignments

### 🚄 Major Assignment 1: RailConnect Live Ops Dashboard (`opsDashboard.js`)
Real-time operations analytics dashboard for train #12951 (*Mumbai Rajdhani Express*):
- **Occupancy Summary**: Calculates total, confirmed, and waitlisted passenger counts.
- **Revenue Breakdown**: Computes revenue from confirmed vs waitlisted bookings.
- **Station Load**: Aggregates passenger boarding metrics per station.
- **Vulnerable Passengers**: Filters senior citizens (age >= 60) for special assistance.
- **Waitlist Clearance Plan**: Ranks waitlisted passengers by priority for seat reallocation.

---

### 🛒 Major Assignment 2: E-Commerce REST API Backend
A layered Express backend implementing separation of concerns (Controllers, Services, Routes):
- **Authentication Routes (`/authRoutes.js`)**: User registration and authentication handlers.
- **Product Routes (`/productRoutes.js`)**: CRUD operations for e-commerce products with persistent file storage (`products.json`).
- **Middleware**: Built with `cors` and `express.json()` integration.

---

### 👤 Major Assignment 3: User Management REST API
Clean architecture Express server with custom middleware and JSON file persistence:
- **Logging Middleware (`logger.js`)**: Records HTTP requests with method, URL, and timestamp.
- **Validation Middleware (`validation.js`)**: Validates required payload fields prior to controller execution.
- **MVC Architecture**: Segregated into `models/`, `controllers/`, `routes/`, and `middleware/`.

---

## ⚙️ Getting Started & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- `npm` (Node Package Manager)

### Running JavaScript Scripts (1 - 8 & Major 1)
To run any standalone JavaScript file:
```bash
node "1/shoppingCart.js"
node "Major Assignment 1/opsDashboard.js"
```

### Running Express Applications (Major 2 & Major 3)
1. Navigate to the project directory:
   ```bash
   cd "Major Assignment 3"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Access the API at `http://localhost:3000`.

---

## 🛠 Tech Stack
- **Language**: JavaScript (ES6+)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database/Storage**: JSON Files (`fs` module / persistent JSON)
- **Version Control**: Git & GitHub

---

## 👤 Author
- **Vyom Shah** ([@vyomshah14](https://github.com/vyomshah14))
