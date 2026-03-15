import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL; // Your backend base URL

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API_URL}/projects`);
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-20 text-lg">
        Loading projects...
      </p>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-r from-teal-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 py-16 px-6 flex flex-col items-center">
      
      <motion.h2
        className="text-3xl font-extrabold text-center mb-10 mt-4 text-gray-800 dark:text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.a
            key={project._id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={project.thumbnail} // <-- just use Cloudinary URL directly
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-500 transition">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="inline-block text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                View Project
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mt-12 text-lg font-semibold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        ✨ More projects coming soon — stay tuned!
      </motion.p>
    </section>
  );
}