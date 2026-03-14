const Project = require("../models/projectModel");
const { uploadToCloudinary } = require("../middleware/upload");

// Add Project
exports.addProject = async (req, res) => {
  try {
    const { title, description, link } = req.body;

    // Validate all fields
    if (!title || !description || !link || !req.file) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Upload file to Cloudinary
    const cloudResult = await uploadToCloudinary(req.file.buffer, "projects");

    // Create new project
    const project = await Project.create({
      title,
      description,
      link,
      thumbnail: cloudResult.secure_url, // Cloudinary URL
    });

    res.status(201).json({
      message: "Project added successfully",
      project,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// Get All Projects (public)
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// Delete Project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};