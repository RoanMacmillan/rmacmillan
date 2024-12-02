import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";


const Nav: React.FC = () => {
  return (
    <nav className="lg:fixed p-5 w-full">
        <div className="flex justify-between items-center">
      <div>RM</div>

      <HamburgerMenuIcon />

      </div>

    </nav>
  );
};

export default Nav;
