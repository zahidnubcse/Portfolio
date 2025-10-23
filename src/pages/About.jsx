import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import About_img from "../assets/footer.jpg";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-teal-400 to-indigo-600 py-16 px-6 flex flex-col items-center">
      
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white drop-shadow-lg">
          About Me
        </h1>
        <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl">
          Hi! I'm a <span className="font-semibold text-white">passionate web developer</span> 
          and <span className="font-semibold text-white/80">SEO expert</span> crafting high-performance, modern websites that blend creativity and functionality.
        </p>
      </motion.div>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl">
        
        {/* Image */}
        <motion.img
          src={About_img}
          alt="About Me"
          className="w-full max-w-md mx-auto md:mx-0 h-auto rounded-2xl shadow-2xl border-4 border-white/30 hover:border-white/50 transition duration-500 transform hover:scale-105 backdrop-blur-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Who I Am
          </h2>
          <p className="text-white/90 leading-relaxed mb-6">
            I'm a <span className="font-semibold text-white">full-stack developer</span> specializing in
            <span className="font-semibold text-white/80"> React, Tailwind CSS, and Vite</span>. 
            My mission is to create <span className="font-semibold text-yellow-300">seamless digital experiences</span> that engage users and deliver results.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
            Skills & Expertise
          </h3>
          <ul className="list-none space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-teal-400 text-xl">🔥</span> Frontend Development (React, Tailwind, Vite)
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-400 text-xl">🚀</span> SEO & Web Performance Optimization
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-300 text-xl">🔧</span> Backend (Node.js, Express, MongoDB)
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-400 text-xl">🎨</span> UI/UX Design & Branding
            </li>
          </ul>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-yellow-300 via-pink-400 to-white text-gray-900 px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
