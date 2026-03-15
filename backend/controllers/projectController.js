const Project = require("../models/projectModel");
const { uploadToCloudinary } = require("../middleware/upload");

// GET all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD project (Cloudinary)
exports.addProject = async (req, res) => {
  try {
    const { title, description, link } = req.body;
    if (!title || !description || !link || !req.file) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Upload thumbnail to Cloudinary
    const result = await uploadToCloudinary(req.file.buffer, "projects");

    const project = new Project({
      title,
      description,
      link,
      thumbnail: result.secure_url // <-- store Cloudinary URL
    });

    const saved = await project.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE project (Cloudinary)
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    project.title = req.body.title || project.title;
    project.description = req.body.description || project.description;
    project.link = req.body.link || project.link;

    // Upload new thumbnail if exists
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, "projects");
      project.thumbnail = result.secure_url;
    }

    const updated = await project.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};