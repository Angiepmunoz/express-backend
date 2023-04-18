// DEPENDENCIES
const express = require("express");
const locationsController = require("./controllers/locations.controller");
const cors = require("cors");
// CONFIGURATION
const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationsController);

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, page not found" });
});

// EXPORT
module.exports = app;
