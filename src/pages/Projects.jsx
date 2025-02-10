import React from "react";
import { motion } from "framer-motion";
import project_1 from "../assets/project1.png";
import project_2 from "../assets/project_2.png";
import project_3 from "../assets/project3.png";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of project 1.",
    image: project_1,
    link: "https://verdant-flan-f27d61.netlify.app/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of project 2.",
    image: project_2,
    link: "https://verdant-lokum-42b85d.netlify.app/",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of project 3.",
    image: project_3,
    link: "https://code-pulse-634.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto p-10 mt-20">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gradient-to-r from-[#0A192F] to-[#1E3A8A] p-6 rounded-xl text-white hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;

