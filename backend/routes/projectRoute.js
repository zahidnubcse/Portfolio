const express = require("express");
const { addProject, getProjects, deleteProject, updateProject } = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");
const { upload } = require("../middleware/upload");

const router = express.Router();

// PUBLIC ROUTE
router.get("/", getProjects);

// ADMIN ROUTES
router.post("/add", authMiddleware, upload.single("thumbnail"), addProject);
router.put("/update/:id", authMiddleware, upload.single("thumbnail"), updateProject);
router.delete("/delete/:id", authMiddleware, deleteProject);

module.exports = router;