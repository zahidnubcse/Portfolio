import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaJava, FaCuttlefish, FaGithub } from "react-icons/fa";

const TailwindSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
    <path d="M4.5 2.25c-.414 0-.75.336-.75.75v17.25c0 .414.336.75.75.75h15c.414 0 .75-.336.75-.75V3c0-.414-.336-.75-.75-.75h-15zm2.531 2.078h9.938v4.125H7.031V4.328zm0 6.219h9.938v4.125H7.031v-4.125zm0 6.219h9.938v4.125H7.031v-4.125z" />
  </svg>
);

const SkillsPage = () => {
  // Language skills data
  const skills = [
    { name: "React", percentage: 75, icon: <FaReact size={40} /> },
    { name: "JavaScript", percentage: 80, icon: <FaJsSquare size={40} /> },
    { name: "HTML", percentage: 90, icon: <FaHtml5 size={40} /> },
    { name: "Tailwind", percentage: 70, icon: <TailwindSVG /> },
    { name: "CSS", percentage: 85, icon: <FaCss3Alt size={40} /> },
    { name: "C", percentage: 60, icon: <FaCuttlefish size={40} /> },
    { name: "C++", percentage: 60, icon: <FaCuttlefish size={40} /> },
    { name: "Java", percentage: 15, icon: <FaJava size={40} /> },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-teal-400 to-indigo-600 py-10 flex flex-col items-center">
      <h2 className="text-5xl font-extrabold text-white mb-12 tracking-wide drop-shadow-lg px-4">My Language Skills</h2>
      <div className="w-full max-w-4xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <div className="flex items-center mb-5">
              <div className="mr-4 text-indigo-600">{skill.icon}</div>
              <p className="text-2xl font-semibold text-gray-800 tracking-wide">{skill.name}</p>
            </div>
            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-3">
              <div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{
                  width: `${skill.percentage}%`,
                  background: `linear-gradient(90deg, #fbbf24 0%, #9333ea ${skill.percentage}%)`,
                }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 text-right font-medium">{skill.percentage}%</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-white font-bold text-xl animate-pulse">Skills that drive my passion!</div>
    </div>
  );
};

export default SkillsPage;
