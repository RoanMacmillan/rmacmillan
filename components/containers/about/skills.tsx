'use client';

import React from "react";
import Image from "next/image";
import skills from "@/data/skills";
import BlurFade from "@/components/ui/blur-fade";

const SkillsGrid = () => {
  return (
    <div className="mx-auto mt-[60px] grid grid-cols-2 md:grid-cols-4 lg:mt-[100px] max-w-[1380px] px-6 customMd:px-20">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`flex h-[275px] items-center justify-center border border-b-0 border-r-0 border-gray-200 md:border-b-[1px] 
          
          
          ${skill.name === "next" ? "border-b-[1px] border-r-[0px]" : ""}

          ${skill.name === "ts" ? "border-b-[1px]" : ""}


          ${skill.name === "shadcn" ? "border-r-[1px]" : ""}
          

          ${skill.name === "tw" ? "md:border-r-0" : ""}


          
          `}
        >
          <BlurFade delay={skill.id * 0.05} inView>
          <Image
            src={skill.logo}
            alt={`${skill.name} Logo`}
            width={60}
            height={60}
            className={`overflow-hidden`}
           
          />
          </BlurFade>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
