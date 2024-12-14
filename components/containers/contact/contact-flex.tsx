"use client";

import React from "react";
import Image from "next/image";
import mail from "../../../public/images/mail.svg";
import location from "../../../public/images/location.svg";
import phone from "../../../public/images/phone.svg";
import useIntersectionObserver from "@/hooks/fadeIn";
import BlurFade from "@/components/ui/blur-fade";

const ContactFlex = () => {
  return (
    <ul className="customMd:mt-24 mt-20 customMd:flex">
      {items.map((item) => (
        <BlurFade delay={item.id * 0.1} inView>
          <div
            key={item.id}
            className={`mt-4 p-8 customMd:mt-0 customMd:px-14 customMd:py-12 ${
              item.id === 1 ? "customMd:pl-0" : ""
            } ${item.id === 2 ? "border border-gray-200" : ""}
          
          ${item.id === 3 ? "customMd:pr-0" : ""}
          
          `}
          >
            <Image src={item.image} alt={item.image} width={28} height={28} />

            <h3 className="test123 mt-6 text-lg font-bold">{item.title}</h3>
            <p className="mt-6 text-[15px] text-customGray">
              {item.description}
            </p>
          </div>
        </BlurFade>
      ))}
    </ul>
  );
};

const items = [
  {
    id: 1,
    title: "roanmacmillan@hotmail.com",
    description: "Send me a message and I will reach out as soon as possible.",
    image: mail,
  },
  {
    id: 2,
    title: "Edinburgh, Scotland",
    description: "Based in Edinburgh UK. Open to onsite or remote roles.",
    image: location,
  },
  {
    id: 3,
    title: "(44) 123-3210",
    description: "Reach out to me via phone. I am available for calls.",
    image: phone,
  },
];

export default ContactFlex;
