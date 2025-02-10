import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
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
          Contact Me
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Feel free to reach out for **collaborations, freelance projects,** or just to say hi!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-[#112240] p-8 rounded-xl shadow-lg"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-gray-300 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 mt-2 bg-[#0A192F] text-white border border-[#00C9FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#92FE9D] transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-2 bg-[#0A192F] text-white border border-[#00C9FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#92FE9D] transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 mt-2 bg-[#0A192F] text-white border border-[#00C9FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#92FE9D] transition"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-[#0A192F] font-bold rounded-lg transition hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mt-12 text-gray-400"
      >
        <p className="text-lg">📧 Email: <span className="text-[#00C9FF]">zahidnubcse@gmail.com</span></p>
        <p className="text-lg">📍 Location: <span className="text-[#92FE9D]">Dhaka, Bangladesh</span></p>
      </motion.div>
    </div>
  );
};

export default Contact;

