import React from "react";
import { motion } from "framer-motion";
import project_1 from "../assets/project1.png";
import project_2 from "../assets/project_2.png";
import project_3 from "../assets/project3.png";
import project_4 from "../assets/im_to_text.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce",
    description: "An interactive AI assistant built with MERN & Gemini API.",
    image: project_1,
    link: "https://verdant-flan-f27d61.netlify.app/",
  },
  {
    id: 2,
    title: "School Website",
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
    id: 4,
    title: "ImageGPT",
    description: "Text to image generator",
    image: project_4,
    link: "https://magnificent-dango-e07a9c.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-teal-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 py-16 px-6 flex flex-col items-center">

      {/* Section Title */}
      <motion.h2
        className="text-3xl font-extrabold text-center mb-10 mt-4 text-gray-800 dark:text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >

            {/* Image */}
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-500 transition">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="inline-block text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                View Project
              </div>
            </div>

          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        className="text-gray-700 dark:text-gray-300 mt-12 text-lg font-semibold tracking-wide"
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