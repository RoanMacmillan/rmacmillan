'use client'

import React from "react";
import photo from "../../../public/images/blackhero.webp";
import Image from "next/image";

const ContactHero = () => {
  return (
    <div
      className={`relative mx-auto flex h-[300px] justify-center transition-all duration-500 customMd:h-[480px]`}
    >
      <Image
        alt="dark image"
        src={photo}
        quality={100}
        priority={true}
        className="object-cover opacity-0 transition-all duration-700 scale-90"
        
        onLoadingComplete={(image) => {
          image.classList.remove("opacity-0");
          image.classList.remove("scale-90");
        }}

      />
    </div>
  );
};

export default ContactHero;