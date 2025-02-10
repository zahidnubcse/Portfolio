import React from "react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-4 max-w-md mx-auto">
          I'm a web developer specializing in modern and responsive web applications.
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
