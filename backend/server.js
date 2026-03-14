const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const projectRoute = require("./routes/projectRoute");
const adminRoute = require("./routes/adminRoute");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* DATABASE CONNECTION */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

/* ROUTES */
app.use("/api/projects", projectRoute);
app.use("/api/admin", adminRoute);

/* DEFAULT ROUTE */
app.get("/", (req, res) => {
  res.send("API Running...");
});

/* SERVER */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));