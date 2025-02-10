import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero_image from "../assets/Hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#0A192F] to-[#1E3A8A] text-white"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            I'm a passionate <span className="text-[#92FE9D] font-semibold">Web Developer</span> 
            crafting stunning and innovative digital solutions.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/projects"
              className="px-8 py-3 text-lg font-bold bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-[#0A192F] rounded-full shadow-lg hover:shadow-xl transition duration-300"
            >
              View My Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={Hero_image}
            alt="Hero Image"
            className="w-full max-w-md rounded-xl shadow-lg border-4 border-[#00C9FF] hover:border-[#92FE9D] transition duration-500 transform hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
