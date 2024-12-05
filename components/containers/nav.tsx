import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";


const Nav: React.FC = () => {
  return (
    <nav className=" customMd:fixed customMd:px-6 top-0 left-0 pb-5 pt-[24px] customMd:pb-8 customMd:pt-8 w-full">
        <div className="flex justify-between items-center">
      <div className="text-[15px] font-bold tracking-widest">RM</div>

      <HamburgerMenuIcon className="" />

      </div>

    </nav>
  );
};

export default Nav;
