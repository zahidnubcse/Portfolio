import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";

const Language = () => {
  // Sample data for languages
  const languages = [
    {
      name: "JavaScript",
      proficiency: "Advanced",
      description: "Used for building interactive web applications.",
      icon: <FaReact className="text-4xl text-blue-500" />,
    },
    {
      name: "Python",
      proficiency: "Intermediate",
      description: "Great for data analysis, scripting, and backend development.",
      icon: <FaPython className="text-4xl text-yellow-500" />,
    },
    {
      name: "Java",
      proficiency: "Intermediate",
      description: "Used for building enterprise-level applications.",
      icon: <FaJava className="text-4xl text-red-500" />,
    },
    {
      name: "HTML/CSS",
      proficiency: "Advanced",
      description: "Essential for front-end web development.",
      icon: <FaHtml5 className="text-4xl text-orange-500" />,
    },
    {
      name: "React",
      proficiency: "Advanced",
      description: "A JavaScript library for building user interfaces.",
      icon: <FaReact className="text-4xl text-cyan-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Languages & Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {languages.map((language, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-6">
                <div className="bg-gray-700 p-4 rounded-full">
                  {language.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">{language.name}</h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Proficiency: {language.proficiency}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mt-4">{language.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Language;
