const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://ashish.enterprises",
      "https://www.ashish.enterprises",
    ],
    credentials: true,
  })
);

app.use(express.json());

// app.use(
//   "/uploads",
//   express.static(path.join(__dirname, "uploads"))
// );

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API Running",
  });
});

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}

module.exports = app;