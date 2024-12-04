import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";


const Nav: React.FC = () => {
  return (
    <nav className=" customXL:fixed customXL:px-7 top-0 left-0 pb-5 pt-[24px] customXL:pb-7 customXL:pt-7 w-full">
        <div className="flex justify-between items-center">
      <div className="text-[15px] font-bold tracking-widest">RM</div>

      <HamburgerMenuIcon className="" />

      </div>

    </nav>
  );
};

export default Nav;
