import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";


const Nav: React.FC = () => {
  return (
    <nav className="lg:fixed pb-5 pt-[24px] w-full">
        <div className="flex justify-between items-center">
      <div className="text-[15px] font-bold tracking-widest">RM</div>

      <HamburgerMenuIcon className="" />

      </div>

    </nav>
  );
};

export default Nav;
