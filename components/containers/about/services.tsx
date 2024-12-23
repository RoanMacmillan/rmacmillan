"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import services from "@/data/services";
import circles from "../../../public/images/join.svg";
import BlurFade from "@/components/ui/blur-fade";

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const elements = containerRef.current?.querySelectorAll(".ttt");
    if (elements) {
      elements.forEach((element) => {
        observer.observe(element);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-reveal-container">
      {children}
    </div>
  );
};

const ServicesFlex = () => {
  return (
    <div
      id="scrollTarget"
      className="mt-[60px] py-8 bg-customBlack customMd:pb-[100px] customMd:pt-[64px] customMd:mt-[100px]"
    >
      <div className="max-w-[1380px] px-6 customMd:px-20 mx-auto">
        <div className="mx-auto">
          <Image
            src={circles}
            alt="Circles logo"
            width={48}
            height={48}
            className="brightness-0 invert-[1]"
          />

          <h1 className="mt-4 text-lg font-bold text-customWhite customMd:text-3xl">
            Services
          </h1>
          <p className="mt-4 text-customGray text-[15px]">
            You can check out what I do below
          </p>
        </div>

        <ScrollReveal>
          <div className="mx-auto mt-8 flex flex-col gap-4 lg:mt-[72px] justify-between lg:flex-row lg:gap-6">
            {services.map((service, index) => (
              <div key={index} className="ttt">
                <div className="border border-outlineGray px-6 py-[40px] customMd:p-[40px]">
                  <BlurFade delay={index * 0.05} inView>
                    <Image
                      width={32}
                      height={32}
                      src={service.image}
                      alt={service.image}
                      className="brightness-0 invert-[1]"
                    />

                    <h2 className="my-6 font-bold text-customWhite">
                      {service.heading}
                    </h2>
                    <p className="text-customGray text-[15px]">
                      {service.paragraph}
                    </p>
                  </BlurFade>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ServicesFlex;
