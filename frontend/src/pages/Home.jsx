import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Languages from "../components/Languages"
import SkillsPage from "../components/SkillPage";

const Home = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Languages/>
      <SkillsPage/>
    </div>
  );
};

export default Home;
