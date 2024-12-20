import React from "react";
import AboutHero from "@/components/containers/about/about-hero";
import ServicesFlex from "@/components/containers/about/services";
import SkillsGrid from "@/components/containers/about/skills";


export const metadata = {

  title: 'About Me',
  description: 'Learn more about me and my skills.',
};

const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutHero></AboutHero>
      <SkillsGrid></SkillsGrid>
      <ServicesFlex></ServicesFlex>
    </div>
  );
};

export default AboutPage;
