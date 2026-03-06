import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero_image from "../assets/zahid.jpg";
import { SiReact, SiMongodb, SiNodedotjs, SiTailwindcss } from "react-icons/si";

// Typewriter effect
const useTypewriter = (texts, speed = 120) => {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [blink, setBlink] = React.useState(true);
  const [reverse, setReverse] = React.useState(false);

  React.useEffect(() => {
    if (index === texts.length) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    if (!reverse && subIndex === texts[index].length + 1 && index !== texts.length - 1)
      setTimeout(() => setReverse(true), 800);
    else if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  React.useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 600);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${texts[index].substring(0, subIndex)}${blink ? "|" : ""}`;
};

const Hero = () => {
  const text = useTypewriter([
    "Full-Stack Web Developer",
    "MERN Stack Engineer",
    "AI-Powered App Builder",
  ]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
      bg-gradient-to-br from-[#0b0018] via-[#14002e] to-[#240046] text-white mt-16"
    >
      {/* Deep glowing background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.25),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(192,132,252,0.15),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight 
            bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300
            text-transparent bg-clip-text"
          >
            Zahid Hasan
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4 h-10">
            {text}
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            I design and develop modern web experiences powered by{" "}
            <span className="font-semibold text-purple-400">AI</span>,{" "}
            <span className="font-semibold text-purple-300">creativity</span>, and{" "}
            <span className="font-semibold text-purple-400">innovation</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">

            <Link
              to="/projects"
              className="px-8 py-3 text-lg font-bold 
              bg-gradient-to-r from-purple-500 to-purple-300 
              text-black rounded-full shadow-lg shadow-purple-500/30
              hover:scale-105 transition-transform duration-300"
            >
              Explore My Work
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 text-lg font-bold 
              border-2 border-purple-400 text-purple-300 
              rounded-full hover:bg-purple-400 hover:text-black 
              transition-all duration-300"
            >
              Let’s Connect
            </Link>

          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <motion.img
            src={Hero_image}
            alt="Zahid Hasan"
            className="w-full max-w-md rounded-3xl 
            shadow-[0_0_50px_rgba(168,85,247,0.5)] 
            border-4 border-purple-500 
            hover:border-purple-300 transition duration-500"
          />

          {/* Floating Icons (Original colors kept) */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-6 left-10 text-[#61DBFB] text-5xl"
          >
            <SiReact />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4.5 }}
            className="absolute bottom-10 left-14 text-[#68A063] text-5xl"
          >
            <SiNodedotjs />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute top-8 right-14 text-[#4DB33D] text-5xl"
          >
            <SiMongodb />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5.5 }}
            className="absolute bottom-4 right-8 text-[#38BDF8] text-5xl"
          >
            <SiTailwindcss />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;