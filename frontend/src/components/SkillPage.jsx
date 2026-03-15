import React from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaCuttlefish,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Custom Tailwind SVG Icon
const TailwindSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="currentColor"
  >
    <path d="M12.001 4.8c-3.6 0-5.85 1.8-6.75 5.4 1.35-1.8 2.925-2.475 4.725-2.025 1.026.255 1.758.999 2.55 1.8 1.305 1.314 2.814 2.835 5.475 2.835 3.6 0 5.85-1.8 6.75-5.4-1.35 1.8-2.925 2.475-4.725 2.025-1.026-.255-1.758-.999-2.55-1.8-1.305-1.314-2.814-2.835-5.475-2.835zm-6.75 9c-3.6 0-5.85 1.8-6.75 5.4 1.35-1.8 2.925-2.475 4.725-2.025 1.026.255 1.758.999 2.55 1.8 1.305 1.314 2.814 2.835 5.475 2.835 3.6 0 5.85-1.8 6.75-5.4-1.35 1.8-2.925 2.475-4.725 2.025-1.026-.255-1.758-.999-2.55-1.8-1.305-1.314-2.814-2.835-5.475-2.835z" />
  </svg>
);

const SkillsPage = () => {
  const skills = [
    { name: "React", percentage: 85, icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "JavaScript", percentage: 90, icon: <FaJsSquare size={40} color="#F7DF1E" /> },
    { name: "HTML", percentage: 95, icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "Tailwind", percentage: 80, icon: <TailwindSVG /> },
    { name: "CSS", percentage: 88, icon: <FaCss3Alt size={40} color="#2965f1" /> },
    { name: "C", percentage: 65, icon: <FaCuttlefish size={40} color="#4B5563" /> },
    { name: "C++", percentage: 70, icon: <FaCuttlefish size={40} color="#3B82F6" /> },
    { name: "Java", percentage: 60, icon: <FaJava size={40} color="#E51E25" /> },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#0b0018] via-[#14002e] to-[#240046] py-16 flex flex-col items-center text-white">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300"
      >
        My Technical Skills
      </motion.h2>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white/5 backdrop-blur-lg 
            border border-purple-500/20 rounded-2xl p-6 
            shadow-md hover:shadow-purple-500/30 
            hover:-translate-y-2 transition-all duration-300"
          >

            {/* Floating icon */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="p-3 bg-white/10 rounded-full shadow-lg">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-semibold">{skill.name}</h3>
            </motion.div>

            {/* Progress bar */}
            <div className="relative w-full h-3 bg-white/20 rounded-full overflow-hidden mb-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 h-full rounded-full 
                bg-gradient-to-r from-purple-500 to-purple-300 shadow-lg"
              ></motion.div>
            </div>

            <p className="text-sm text-purple-200 text-right font-medium">
              {skill.percentage}%
            </p>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl 
            bg-gradient-to-r from-purple-500 to-purple-300 
            opacity-0 hover:opacity-10 transition duration-500"></div>

          </motion.div>
        ))}
      </div>

      {/* Footer text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-12 text-center text-lg md:text-xl font-semibold text-gray-300"
      >
        <span className="bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text">
          Code. Create. Innovate.
        </span>{" "}
        — Skills that power my passion 🚀
      </motion.div>
    </div>
  );
};

export default SkillsPage;