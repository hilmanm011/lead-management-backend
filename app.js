require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const routes = require("./routes");

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
