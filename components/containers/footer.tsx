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
    <footer className="mt-[60px] mb-[20px] relative lg:mt-[150px] max-w-[1280px] mx-auto">
        

      <ScrollToTopButton className="lg:hidden top-[225px] right-[-60px]"></ScrollToTopButton>

      {/* <p>{text}</p> */}

      <Separator className="hidden sm:block sm:mb-[100px]"></Separator>

      <h2 className="text-[60px] leading-[1] flex flex-col pb-[30px] lg:flex-row lg:gap-2 lg:text-[70px]">
        <span className="font-light">{footerContent.title}</span>
        <span className="font-bold">{footerContent.title2}</span>
      </h2>
      <Link className="font-semibold" href={footerContent.link.href}>
        {footerContent.link.label}
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
        link: { href: "/about", label: "Contact" },
      };
    case "/about":
      return {
        title: `Let's`,
        title2: `Talk`,
        link: { href: "/about", label: "Contact" },
      };

    case "/project":
      return {
        title: `See`,
        title2: `More`,
        link: { href: "/about", label: "Contact" },
      };

    default:
      return {
        title: `Let's`,
        title2: `Talk`,
        link: { href: "/about", label: "Contact" },
      };
  }
}
