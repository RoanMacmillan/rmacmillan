"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { links } from "./footer";
import { usePathname } from "next/navigation";
import Image from "next/image";
import cross from '../../public/images/close.svg'

const Nav: React.FC = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {  

    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);


  return (
    <>
      <nav className="customMd:fixed h-[88px] flex items-center customMd:top-0 customMd:left-0 px-6 customMd:px-6 xl:px-8 w-full">
        <div className="flex justify-between w-full items-center">
          <Link
            href="/"
            className="text-[15px] font-bold tracking-widest transition-colors hover:text-customEmerald"
          >
            RM
          </Link>

          <button
            className="group flex h-6 w-5 flex-col items-center justify-center gap-[6px] transition-all duration-300 hover:scale-125  "
            onClick={toggleModal}
          >
            <div className="h-[2px] w-full bg-customBlack transition-all duration-300 group-hover:bg-customEmerald"></div>
            <div className="h-[2px] w-full bg-customBlack transition-all duration-300 group-hover:bg-customEmerald"></div>
          </button>
        </div>
      </nav>

      <div
        className={`${
          isOpen ? "opacity-[100] visible" : "opacity-0 invisible"
        } transition-opacity z-50 duration-200 fixed w-full h-full flex flex-col justify-between bg-customBlack top-0 pt-[32px] pb-8 left-0 px-6 customMd:px-6 xl:px-8`}
      >
        <div className="w-full h-1 bg-customEmerald absolute top-0 left-0"></div>

        <div className="flex justify-between z-50  w-full items-center">
          <Link
            onClick={toggleModal}
            href="/"
            className="text-[15px] text-customWhite font-bold tracking-widest transition-colors hover:text-customEmerald"
          >
            RM
          </Link>

          <button onClick={toggleModal}>
            <Image
              alt="cross"
              className={`invert-[0.5] hover:invert-[1] brightness-0 transition-all duration-300`}
              src={cross}
              width={32}
              height={32}></Image>
          </button>
        </div>

        <div className="flex items-center gap-52 w-full max-w-[1220px] xl:mx-auto">
          <ul className={`${isOpen ? 'fadeInScale' : ''}`}>
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  className={`${
                    pathname === item.url ? "text-customWhite" : ""
                  } text-customGray text-6xl sm:text-7xl customMd:leading-snug font-light hover:text-customWhite transition-colors`}
                  href={item.url}
                  onClick={closeModal}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <p className="max-w-[600px] text-sm hidden xl:block text-customGray hover:text-customWhite transition-colors">
            Frontend development refers to the process of creating and designing
            the visible parts of a website or web application that users
            interact with directly.
          </p>
        </div>

        <div className="max-w-[1220px] xl:mx-auto w-full">
          <div className="sm:flex sm:gap-2 sm:items-center">
            <p className="text-customGray text-sm">Follow me</p>

            <ul className="my-1 sm:my-0 sm:flex sm:gap-2">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    className="text-[20px] text-customWhite hover:text-customEmerald transition-colors font-medium sm:text-sm"
                    href={link.url}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-customGray">
            © 2024 Roan Macmillan - All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

const navigation = [
  { id: 1, name: "Portfolio", url: "/" },

  { id: 2, name: "About Me", url: "/about" },

  { id: 3, name: "Contact", url: "/contact" },
];

export default Nav;
