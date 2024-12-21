"use client";

import React from "react";
import photo from "../../../public/images/blackhero.webp";
import Image from "next/image";
import LoadingBar from "@/animations/loading-bar";

const ContactHero = () => {
  return (
    <>
      <LoadingBar backgroundColorClass="bg-customBlack"></LoadingBar>
      <div
        className={`relative mx-auto flex h-[300px] justify-center transition-all duration-500 customMd:h-[480px]`}
      >
        <Image
          alt="dark image"
          src={photo}
          priority={true}
          fill={true}
          className="object-cover  opacity-0 transition-all duration-700 scale-90"
          onLoad={(e) => {
            e.currentTarget.classList.remove("opacity-0");
            e.currentTarget.classList.remove("scale-90");
          }}
        />
      </div>
    </>
  );
};

export default ContactHero;
