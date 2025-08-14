require("dotenv").config();
const express = require("express");
const articleRouter = require("./routes/articles");
const Article = require("./models/article");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");
const path = require("path");

const app = express();

// === Middleware ===
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// === API routes for React ===
const apiArticles = require("./routes/api.articles");
app.use("/api/articles", apiArticles);

// === MongoDB Connection ===
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// === View engine for EJS (if still needed for server-side pages) ===
app.set("views", "./view");
app.set("view engine", "ejs");

// === Routes for server-rendered pages ===
app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

// === Serve React build (for deployment on same server) ===
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname1, "public", "index.html"));
});

// === Start Server ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
