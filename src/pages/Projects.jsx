import React from "react";

const Projects = () => {
  return (
    <div className="container mx-auto p-10">
      <h2 className="text-4xl font-bold mb-4">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p>Brief description of the project.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p>Brief description of the project.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-bold">Project 3</h3>
          <p>Brief description of the project.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
