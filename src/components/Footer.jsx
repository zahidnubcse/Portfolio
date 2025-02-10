import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"; // Corrected import
import MyImage from "../assets/footer.jpg"; // Replace with the path to your image

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 py-16 px-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-300">
        
        {/* Left Side: Image & Intro */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <img
            src={MyImage} // Replace with your image path
            alt="Your Name"
            className="w-32 h-32 rounded-full mb-6 shadow-lg"
          />
          <p className="text-xl font-bold text-white mb-4">Hi, I'm Zahid!</p>
          <p className="max-w-md text-white opacity-80 mb-6">
            I'm a passionate web developer creating innovative and responsive web solutions. Let's build something amazing together!
          </p>
          <a href="#contact" className="text-white hover:text-blue-400 transition duration-300">
            Contact Me
          </a>
        </div>

        {/* Company Links */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-white mb-4">COMPANY</p>
          <ul className="space-y-3 cursor-pointer">
            <li className="hover:text-blue-400 transition">Home</li>
            <li className="hover:text-blue-400 transition">About Us</li>
            <li className="hover:text-blue-400 transition">Delivery</li>
            <li className="hover:text-blue-400 transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-white mb-4">GET IN TOUCH</p>
          <ul className="space-y-2 text-white opacity-80">
            <li>📞 +8801817844031</li>
            <li>✉️ zahidnubcse@gmail.com</li>
          </ul>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="text-2xl hover:text-red-400 transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-white opacity-80">
        <hr className="border-gray-500 mb-6" />
        <p className="text-sm">© 2024 CodePulse634.com - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
