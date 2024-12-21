"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollToTopButton from "./scroll";
import { Separator } from "../ui/separator";
import { links } from "@/data/links";
import BlurFade from "../ui/blur-fade";
const Footer = () => {
  const pathname = usePathname();

  const footerContent = getFooterContent(pathname);

  return (
    <>
        <ScrollToTopButton classname="bottom-[120px] right-[-40px] hidden lg:flex"></ScrollToTopButton>

      <footer className="mt-[60px] mb-[20px] relative lg:mt-[150px] max-w-[1380px] mx-auto px-6 customMd:px-20">

        <BlurFade transitionType="width" inView={true} duration={.75} delay={.25}>
        <Separator className="hidden bg-gray-200 sm:block sm:mb-[100px]"></Separator>
        </BlurFade>

        <h2 className="text-[60px] leading-[1] flex flex-col pb-[30px] lg:flex-row lg:gap-2 lg:text-[70px]">
          <span className="font-light">{footerContent.title}</span>
          <span className="font-bold">{footerContent.title2}</span>
        </h2>

        <div className="flex flex-col items-start">
          <Link href={footerContent.link.href} className="group text-left">
            <p className="mt-[10px] font-semibold">
              {footerContent.link.label}
            </p>
            <div
              className={`relative mt-[5px] h-[1px] ${footerContent.link.underlinWidth} bg-gray-200`}
            >
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full"></div>
            </div>
          </Link>
        </div>

        <nav className="mt-[150px] sm:flex gap-2 items-baseline">
          <p className="text-gray-500 sm:text-sm">Follow me</p>

          <ul className="my-6 sm:flex sm:my-0 gap-2">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  className="text-[20px] hover:text-customEmerald transition-colors font-medium sm:text-sm"
                  href={link.url}
                  scroll={true}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-gray-500">
          © 2024 Roan Macmillan - All rights reserved
        </p>

        <ScrollToTopButton classname="bottom-[260px] right-[-40px] sm:bottom-[120px] lg:hidden"></ScrollToTopButton>
      </footer>
    </>
  );
};

export default Footer;



function getFooterContent(pathname: string) {
  switch (pathname) {
    case "/":
      return {
        title: `Let's`,
        title2: `Talk`,
        link: { href: "/contact", label: "Contact", underlinWidth: "w-[70px]" },
      };
    case "/about":
      return {
        title: `Let's`,
        title2: `Talk`,
        link: { href: "/contact", label: "Contact", underlinWidth: "w-[70px]" },
      };

    // case "/project":
    //   return {
    //     title: `See`,
    //     title2: `More`,
    //     link: { href: "/", label: "Portfolio", underlinWidth: "w-[70px]" },
    //   };

    case "/contact":
      return {
        title: `View`,
        title2: `Portfolio`,
        link: { href: "/", label: "Portfolio", underlinWidth: "w-[70px]" },
      };

    default:
      return {
        title: `See`,
        title2: `More`,
        link: { href: "/", label: "Portfolio", underlinWidth: "w-[70px]" },
      };
  }
}
