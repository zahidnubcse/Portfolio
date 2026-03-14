const express = require("express");
const { addProject, getProjects, deleteProject } = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");
const { upload } = require("../middleware/upload");

const router = express.Router();

// PUBLIC ROUTE
router.get("/", getProjects);

// ADMIN ROUTES
router.post("/add", authMiddleware, upload.single("thumbnail"), addProject);
router.delete("/delete/:id", authMiddleware, deleteProject);

module.exports = router;