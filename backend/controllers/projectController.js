const Project = require("../models/projectModel");

/* ADD PROJECT */

exports.addProject = async (req,res)=>{

    try{

        const project = new Project(req.body);

        await project.save();

        res.json(project);

    }catch(err){
        res.status(500).json({message:err.message});
    }

};


/* GET ALL PROJECTS */

exports.getProjects = async (req,res)=>{

    try{

        const projects = await Project.find();

        res.json(projects);

    }catch(err){
        res.status(500).json({message:err.message});
    }

};


/* DELETE PROJECT */

exports.deleteProject = async (req,res)=>{

    try{

        await Project.findByIdAndDelete(req.params.id);

        res.json({message:"Project Deleted"});

    }catch(err){
        res.status(500).json({message:err.message});
    }

};