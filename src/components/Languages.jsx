import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaJs,
} from "react-icons/fa";
import { motion } from "framer-motion";

const languages = [
  {
    name: "JavaScript",
    proficiency: "Advanced",
    description: "Building dynamic and high-performance web experiences.",
    icon: <FaJs className="text-4xl text-yellow-500" />,
  },
  {
    name: "React",
    proficiency: "Advanced",
    description:
      "Creating modern UI with reusable components and smooth interactivity.",
    icon: <FaReact className="text-4xl text-blue-400" />,
  },
  {
    name: "Python",
    proficiency: "Intermediate",
    description: "Versatile scripting and backend automation with clean syntax.",
    icon: <FaPython className="text-4xl text-indigo-500" />,
  },
  {
    name: "Java",
    proficiency: "Intermediate",
    description: "Robust OOP language for large-scale applications.",
    icon: <FaJava className="text-4xl text-red-500" />,
  },
  {
    name: "HTML & CSS",
    proficiency: "Advanced",
    description: "Crafting responsive, accessible, and beautiful websites.",
    icon: <FaHtml5 className="text-4xl text-orange-400" />,
  },
];

const Language = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0018] via-[#14002e] to-[#240046] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-16 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300"
        >
          Languages & Skills
        </motion.h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(168,85,247,0.35)",
              }}
              className="relative bg-white/5 backdrop-blur-lg 
              rounded-3xl border border-purple-500/20 
              p-8 overflow-hidden group"
            >

              {/* Glow background */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-600/20 blur-3xl"></div>

              {/* Icon + title */}
              <div className="flex items-center space-x-4 mb-5 relative z-10">

                <div className="p-4 rounded-full bg-white/10 shadow-lg flex items-center justify-center">
                  {lang.icon}
                </div>

                <div className="text-left">
                  <h2 className="text-xl font-semibold text-white">
                    {lang.name}
                  </h2>
                  <p className="text-sm text-purple-300">
                    {lang.proficiency}
                  </p>
                </div>

              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed relative z-10">
                {lang.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Language;