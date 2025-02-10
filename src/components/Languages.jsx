import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

const Language = () => {
  // Sample data for languages
  const languages = [
    {
      name: "JavaScript",
      proficiency: "Advanced",
      description: "Used for building interactive web applications.",
      icon: <FaReact className="text-4xl text-blue-500" />,
    },
    {
      name: "Python",
      proficiency: "Intermediate",
      description: "Great for data analysis, scripting, and backend development.",
      icon: <FaPython className="text-4xl text-yellow-500" />,
    },
    {
      name: "Java",
      proficiency: "Intermediate",
      description: "Used for building enterprise-level applications.",
      icon: <FaJava className="text-4xl text-red-500" />,
    },
    {
      name: "HTML/CSS",
      proficiency: "Advanced",
      description: "Essential for front-end web development.",
      icon: <FaHtml5 className="text-4xl text-orange-500" />,
    },
    {
      name: "React",
      proficiency: "Advanced",
      description: "A JavaScript library for building user interfaces.",
      icon: <FaReact className="text-4xl text-cyan-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] to-[#1E3A8A] py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
          Languages & Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              className="bg-[#112240] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center space-x-6 mb-4">
                <div className="bg-[#0A192F] p-4 rounded-full shadow-lg">
                  {language.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{language.name}</h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Proficiency: {language.proficiency}
                  </p>
                </div>
              </div>
              <p className="text-gray-300">{language.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Language;
