const express = require("express");

const {
addProject,
getProjects,
deleteProject
} = require("../controllers/projectController");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add",auth,addProject);

router.get("/",getProjects);

router.delete("/delete/:id",auth,deleteProject);

module.exports = router;