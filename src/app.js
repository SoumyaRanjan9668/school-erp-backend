const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "School ERP Backend is running!",
  });
});

app.get("/api/hello", (req, res) => {
  res.json({
    success: true,
    message: "School ERP API is working",
  });
});

module.exports = app;