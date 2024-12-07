import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Nav: React.FC = () => {
  return (
    <nav className=" customMd:fixed customMd:h-[88px] customMd:flex items-center customMd:top-0 customMd:left-0 customMd:px-6 lg:px-8 w-full">
      <div className="flex justify-between w-full items-center">
        <div className="text-[15px] font-bold tracking-widest">RM</div>

        <HamburgerMenuIcon className="" />
      </div>
    </nav>
  );
};

export default Nav;
