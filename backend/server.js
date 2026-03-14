const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const projectRoute = require("./routes/projectRoute");
const adminRoute = require("./routes/adminRoute");

const app = express();

app.use(cors());
app.use(express.json());

/* DATABASE CONNECTION */

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

/* ROUTES */

app.use("/api/projects", projectRoute);
app.use("/api/admin", adminRoute);

/* SERVER */

app.listen(5000, () => {
    console.log("Server running on port 5000");
});