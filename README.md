# Lead Management API

This is the backend service for the Lead Management system, built using **Node.js**, **Express.js**, and **MongoDB**.

## 🚀 Features

- Add new leads
- Update existing leads
- Fetch all leads with filtering
- Pagination support

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)

## 📦 Installation

### 1️⃣ Clone the repository

```sh
git clone https://github.com/hilmanm011/lead-management-backend.git
cd lead-management-backend
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Create `.env` file

Copy the `.env.example` and rename it to `.env`. Update the values accordingly.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Start the server

For development mode:

```sh
npm run dev
```

For production mode:

```sh
npm start
```

### 5️⃣ API Documentation

Once the server is running, API endpoints can be tested using **Postman**.

## 🔥 API Endpoints

| Method | Endpoint         | Description                  |
| ------ | ---------------- | ---------------------------- |
| GET    | `/api/leads`     | Get all leads (with filters) |
| POST   | `/api/leads`     | Add a new lead               |
| PUT    | `/api/leads/:id` | Update a lead                |

## 📝 Submission

- **GitHub Repo** → [Backend Repository](https://github.com/hilmanm011/lead-management-backend)
- **GitHub Repo** → [Fontend Repository](https://github.com/hilmanm011/lead-todolist)
- **How to run locally** → See steps above ☝️

## 📌 License

This project is open-source and available under the [MIT License](LICENSE).