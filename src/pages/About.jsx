import React from "react";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";
import About_img from "../assets/footer.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 bg-[#0A192F] text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] inline-block">
          About Me
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Hi! I'm a <span className="text-[#00C9FF] font-semibold">passionate web developer</span> and 
          <span className="text-[#92FE9D] font-semibold"> SEO expert</span> crafting high-performance websites that blend creativity with functionality.
        </p>
      </motion.div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image with Animation */}
        <motion.img
          src={About_img}
          alt="About Me"
          className="w-full max-w-md mx-auto md:mx-0 h-auto rounded-xl shadow-xl border-4 border-[#00C9FF] hover:border-[#92FE9D] transform transition duration-500 hover:scale-105"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#00C9FF]">
            Who I Am
          </h2>
          <p className="text-gray-400 leading-relaxed">
            I'm a <span className="text-[#92FE9D] font-semibold">full-stack web developer</span> specializing in 
            <span className="text-[#00C9FF] font-semibold"> React, Vite,</span> and 
            <span className="text-[#92FE9D] font-semibold"> SEO</span>. My mission is to create 
            <span className="text-[#F7D861] font-semibold"> seamless digital experiences</span> that drive engagement and results.
          </p>

          <h3 className="text-2xl font-semibold mt-6 text-[#F7D861]">
            Skills & Expertise
          </h3>
          <ul className="list-none mt-4 space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-[#00C9FF] text-xl">🔥</span> Frontend Development (React, Tailwind CSS, Vite)
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#92FE9D] text-xl">🚀</span> SEO & Web Performance Optimization
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#F7D861] text-xl">🔧</span> Backend (Node.js, Express, MongoDB)
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#FF6B6B] text-xl">🎨</span> UI/UX Design & Branding
            </li>
          </ul>

          {/* Call-to-Action Button */}
          <motion.a
            href="/contact"
            className="mt-6 inline-block bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] px-6 py-3 rounded-lg font-bold text-[#0A192F] transition duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
           <Link to='/contact'>Contact me</Link>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
