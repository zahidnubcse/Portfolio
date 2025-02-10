import React from "react";
import { Link } from "react-router-dom";
import Hero_image from "../assets/Hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-900 min-h-screen flex items-center pt-20"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            I'm a passionate [Your Profession] creating meaningful and
            innovative solutions.
          </p>
          <Link
            to="/projects" // Use the "to" prop for Link component
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            View My Work
          </Link>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Hero_image} // Replace with your image URL
            alt="Your Name"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
