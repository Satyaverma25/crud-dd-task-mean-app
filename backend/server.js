const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ---------------- MIDDLEWARE ----------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------- MONGODB CONFIG ----------------
// Docker container me Mongo service ka naam "mongo" hota hai
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://mongo:27017/meanapp";

// ---------------- DB CONNECTION ----------------
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });

// ---------------- ROUTES ----------------
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

require("./app/routes/turorial.routes")(app);

// ---------------- SERVER ----------------
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});