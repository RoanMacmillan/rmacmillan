'use client';

import React from "react";
import Image from "next/image";
import skills from "@/data/skills";

const SkillsGrid = () => {
  return (
    <div className="mx-auto mt-[60px] grid grid-cols-2 md:grid-cols-4 lg:mt-[100px]">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`flex h-[275px] items-center justify-center border border-b-0 border-r-0 border-gray-200 md:border-b-[1px] 
          
          
          ${skill.name === "next" ? "border-b-[1px] border-r-[1px]" : ""}

          ${skill.name === "ts" ? "border-b-[1px]" : ""}


          ${skill.name === "tw" ? "border-r-[1px]" : ""}
          

          ${skill.name === "shadcn" ? "md:border-r-0" : ""}


          
          `}
        >
          <Image
            src={skill.logo}
            alt={`${skill.name} Logo`}
            width={60}
            height={60}
            className={`translate-y-[10px] overflow-hidden opacity-0 delay-[${
              skill.id * 50
            }ms] transition-all duration-[.6s]`}
            onLoadingComplete={(image) => {
              image.classList.remove("opacity-0");
              image.classList.remove("translate-y-[10px]");
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
