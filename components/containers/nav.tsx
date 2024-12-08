import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav className=" customMd:fixed h-[88px] flex items-center customMd:top-0 customMd:left-0 px-6 customMd:px-6 lg:px-8 w-full">
      <div className="flex justify-between w-full items-center">
        <Link href='/' className="text-[15px] font-bold tracking-widest transition-colors hover:text-customEmerald">RM</Link>

        <HamburgerMenuIcon className="" />
      </div>
    </nav>
  );
};

export default Nav;
