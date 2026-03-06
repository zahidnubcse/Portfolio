import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "b10d4188-9bc5-4d97-85ad-4982a938ffab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0033] via-[#1A004D] to-[#2E0066] text-white px-6 md:px-12 lg:px-20 py-16">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#5C00FF] via-[#7A33FF] to-[#994DFF] inline-block">
          Contact Me
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Reach out for <span className="text-[#7A33FF] font-semibold">collaborations</span>, <span className="text-[#994DFF] font-semibold">freelance projects</span>, or just to say hi!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-[#1A004D]/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-[#5C00FF]/30"
      >
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 mt-2 bg-[#0B0033] text-white border border-[#5C00FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A33FF] transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-2 bg-[#0B0033] text-white border border-[#5C00FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A33FF] transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium">Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              className="w-full px-4 py-3 mt-2 bg-[#0B0033] text-white border border-[#5C00FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A33FF] transition"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-[#5C00FF] via-[#561ebe] to-[#6b2cbe] text-[#0B0033] font-bold rounded-xl shadow-lg transition hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>

        {/* Result message */}
        {result && (
          <p className="mt-4 text-center text-[#994DFF] font-medium">{result}</p>
        )}
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mt-12 text-gray-300"
      >
        <p className="text-lg">📧 Email: <span className="text-[#5C00FF]">zahidnubcse@gmail.com</span></p>
        <p className="text-lg">📍 Location: <span className="text-[#7A33FF]">Dhaka, Bangladesh</span></p>
      </motion.div>
    </div>
  );
};

export default Contact;