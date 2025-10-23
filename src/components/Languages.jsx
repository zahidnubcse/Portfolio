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

const Language = () => {
  const languages = [
    {
      name: "JavaScript",
      proficiency: "Advanced",
      description: "Building dynamic and high-performance web experiences.",
      icon: <FaJs className="text-4xl text-yellow-400" />,
    },
    {
      name: "React",
      proficiency: "Advanced",
      description:
        "Creating modern UI with reusable components and smooth interactivity.",
      icon: <FaReact className="text-4xl text-cyan-400" />,
    },
    {
      name: "Python",
      proficiency: "Intermediate",
      description:
        "Versatile scripting and backend automation with clean syntax.",
      icon: <FaPython className="text-4xl text-green-400" />,
    },
    {
      name: "Java",
      proficiency: "Intermediate",
      description: "Robust OOP language for large-scale applications.",
      icon: <FaJava className="text-4xl text-red-400" />,
    },
    {
      name: "HTML & CSS",
      proficiency: "Advanced",
      description:
        "Crafting responsive, accessible, and beautiful website structures.",
      icon: <FaHtml5 className="text-4xl text-orange-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] via-[#13294B] to-[#1E3A8A] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]"
        >
          Languages & Skills
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-[#00C9FF]/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center space-x-6 mb-6">
                <div className="bg-gradient-to-br from-[#00C9FF] to-[#92FE9D] p-4 rounded-full shadow-lg">
                  {lang.icon}
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white">
                    {lang.name}
                  </h2>
                  <p className="text-sm text-gray-300 mt-1">
                    {lang.proficiency}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">{lang.description}</p>

              {/* subtle glowing border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] opacity-0 hover:opacity-20 transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Language;
