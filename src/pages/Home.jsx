import React from "react";
import Hero from "../components/Hero";
import Languages from "../components/Languages"
import SkillsPage from "../components/SkillPage";

const Home = () => {
  return (
    <div>
      <Hero />
      <Languages/>
      <SkillsPage/>
    </div>
  );
};

export default Home;
