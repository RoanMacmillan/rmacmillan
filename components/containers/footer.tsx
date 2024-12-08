"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Separator } from "../ui/separator";
import ScrollToTopButton from "./scroll";
import { Scroll } from "lucide-react";


const variant = 'bg-red-500';

const Footer = () => {
  const pathname = usePathname();

  const footerContent = getFooterContent(pathname);

  return (
    <footer className="mt-[60px] mb-[20px] relative lg:mt-[150px] max-w-[1280px] mx-auto px-6 customMd:px-8">
        

      <ScrollToTopButton className="lg:hidden top-[225px] right-[-60px]"></ScrollToTopButton>

      {/* <p>{text}</p> */}

      <Separator className="hidden sm:block sm:mb-[100px]"></Separator>

      <h2 className="text-[60px] leading-[1] flex flex-col pb-[30px] lg:flex-row lg:gap-2 lg:text-[70px]">
        <span className="font-light">{footerContent.title}</span>
        <span className="font-bold">{footerContent.title2}</span>
      </h2>
      



      <Link href={footerContent.link.href} className="group text-left">
            <p className="mt-[10px] font-semibold">{footerContent.link.label}</p>
            <div className={`relative mt-[5px] h-[2px] ${footerContent.link.underlinWidth} bg-gray-200`}>
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full"></div>
            </div>
          </Link>


      <nav className="mt-[150px] sm:flex gap-2 items-center">
        <p className="text-gray-500 sm:text-sm">Follow me</p>

        <ul className="my-6 sm:flex sm:my-0 gap-2">
          {links.map((link) => (
            <li key={link.id}>
              <Link className="text-[20px] font-medium sm:text-sm" href={link.url}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="text-sm text-gray-500">
        © 2024 Roan Macmillan - All rights reserved
      </p>
    </footer>
  );
};







export default Footer;

const links = [
  { id: 1, name: "Twitter", url: "https://twitter.com" },
  { id: 2, name: "Instagram", url: "https://instagram.com" },
  { id: 3, name: "LinkedIn", url: "https://linkedin.com" },
  { id: 4, name: "GitHub", url: "https://github.com" },
];

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
        link: { href: "/about", label: "Contact", underlinWidth: "w-20" },
      };

    case "/project":
      return {
        title: `See`,
        title2: `More`,
        link: { href: "/", label: "Portfolio", underlinWidth: "w-24" },
      };

      case "/contact":
      return {
        title: `View`,
        title2: `Portfolio`,
        link: { href: "/", label: "Portfolio", underlinWidth: "w-24" },
      };

    default:
      return {
        title: `Let's`,
        title2: `Talk`,
        link: { href: "/about", label: "Contact" },
      };
  }
}
