require("dotenv").config();
const express = require("express");
const articleRouter = require("./routes/articles");
const Article = require("./models/article");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();

// === Injected for React API ===
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(methodOverride('_method'));
const apiArticles = require('./routes/api.articles');
app.use('/api/articles', apiArticles);
// === End Injected ===


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.set("views", "./view");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

app.listen(3000);
