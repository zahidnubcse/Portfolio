import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyImage from "../assets/footer.jpg";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#0b0018] via-[#14002e] to-[#240046] py-16 px-5 text-gray-300">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Left Side */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <img
            src={MyImage}
            alt="Zahid Hasan"
            className="w-32 h-32 rounded-full mb-6 shadow-lg border-2 border-purple-500/30"
          />

          <p className="text-xl font-bold text-white mb-4">Hi, I'm Zahid!</p>

          <p className="max-w-md text-gray-300 mb-6">
            I'm a passionate web developer creating innovative and responsive
            web solutions. Let's build something amazing together!
          </p>

          <Link
            to="/contact"
            className="text-purple-300 hover:text-purple-400 transition duration-300"
          >
            Contact Me
          </Link>
        </div>

        {/* Company Links */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-white mb-4">COMPANY</p>

          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-purple-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/projects" className="hover:text-purple-400 transition">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-purple-400 transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-purple-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-white mb-4">GET IN TOUCH</p>

          <ul className="space-y-2 text-gray-300">
            <li>📞 +8801817844031</li>
            <li>✉️ zahidnubcse@gmail.com</li>
          </ul>

          {/* Social icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-6">

            <a
              href="https://www.facebook.com/zahidnub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-2xl hover:text-blue-800 transition duration-300" />
            </a>

            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle className="text-2xl hover:text-orange-700 transition duration-300" />
            </a>

            <a
              href="https://x.com/ZahidHasan634"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl hover:text-blue-600 transition duration-300" />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-gray-400">
        <hr className="border-purple-500/30 mb-6" />

        <p className="text-sm">
          © 2024 <span className="text-purple-400">CodePulse634.com</span> — All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;