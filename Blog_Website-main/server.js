require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// === Middleware ===
app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// === MongoDB Connection ===
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// === API routes for React ===
const apiArticles = require("./routes/api.articles");
app.use("/api/articles", apiArticles);

// === Serve React only in production ===
// if (process.env.NODE_ENV === "production") {
//   const buildPath = path.join(__dirname, "../frontend-react/dist");
//   app.use(express.static(buildPath));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(buildPath, "index.html"));
//   });
// }

// === Start Server ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on ${PORT}`));
