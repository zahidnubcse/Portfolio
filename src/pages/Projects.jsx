import React from "react";
import { motion } from "framer-motion";
import project_1 from "../assets/project1.png";
import project_2 from "../assets/project_2.png";
import project_3 from "../assets/project3.png";
import project_4 from "../assets/im_to_text.png";

const projects = [
  {
    id: 1,
    title: "AI Voice Assistant",
    description: "An interactive AI assistant built with MERN & Gemini API.",
    image: project_1,
    link: "https://verdant-flan-f27d61.netlify.app/",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "A smart shop built using React, Node.js, and MongoDB.",
    image: project_2,
    link: "https://verdant-lokum-42b85d.netlify.app/",
  },
  {
    id: 3,
    title: "Code Pulse",
    description: "A web dev and design portfolio site for creative coders.",
    image: project_3,
    link: "https://code-pulse-634.netlify.app/",
  },
  {
    id: 3,
    title: "ImageGPT",
    description: "Text to image generator",
    image: project_4,
    link: "https://magnificent-dango-e07a9c.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-teal-400 to-indigo-600 py-16 px-6 flex flex-col items-center">
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      {/* Project Cards Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group rounded-2xl bg-white/10 dark:bg-gray-800/30 backdrop-blur-md shadow-lg border border-white/20 hover:border-white/40 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            {/* Project Image */}
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <div className="inline-block text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 text-gray-900 group-hover:shadow-lg transition-all">
                View Project
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-500 blur-2xl"></div>
          </motion.a>
        ))}
      </div>

      {/* Footer Text */}
      <motion.p
        className="text-white mt-12 text-lg font-semibold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        ✨ More projects coming soon — stay tuned!
      </motion.p>
    </section>
  );
};

export default Projects;
