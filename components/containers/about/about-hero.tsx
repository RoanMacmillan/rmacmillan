"use client";
import React from "react";
import Image from "next/image";
import hero from "../../../public/images/abouthero.webp";
import LoadingBar from "@/animations/loading-bar";

const AboutHero = () => {
  const handleScroll = () => {
    const scrollTarget = document.getElementById("scrollTarget");
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <>
    <LoadingBar backgroundColorClass="bg-customBlack"></LoadingBar>
    <div className="relative sm:flex sm:flex-row-reverse sm:items-center sm:gap-24 sm:justify-between max-w-[1380px] px-6 customMd:px-20 mx-auto">
      <div className="h-[300px] sm:h-[440px] sm:w-1/2 w-full sm:max-w-[510px] relative">
        <Image
          src={hero}
          alt="Hero"
          sizes="max-width: 810px"
          fill
          className="object-cover opacity-0 transition-all duration-700 scale-90"
          onLoad={(e) => {
            e.currentTarget.classList.remove("opacity-0");
            e.currentTarget.classList.add("scale-100");
          }}
          priority
          
        />
      </div>

      <div>
        <h1 className="text-[60px] mt-[50px] sm:mt-[0px] font-light leading-[1] tracking-[-2px] lg:text-[80px]">
          Frontend<br></br>
          <span className="font-bold">Developer</span>
          <div className="mt-6 h-[5px] w-14 bg-black"></div>
        </h1>

        <div className="mt-[50px] lg:mt-[100px]">
          <h2 className="text-3xl font-bold">About me</h2>
          <p className="mt-4 max-w-[550px] text-[15px] leading-6 text-gray-500">
            Hi, I'm Roan Macmillan. I'm a frontend developer looking for a new
            role based in Edinburgh or remote.
          </p>
          <button onClick={handleScroll} className="group text-left">
            <p className="mt-[30px] font-semibold">Read More</p>
            <div className="relative mt-[5px] h-[2px] w-24 bg-gray-200">
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutHero;
