import React from "react";
import ScrollToTopButton from "./scroll";
import PButton from "./p-button";
const ScrollContainer: React.FC = () => {
  return (
    <div className="absolute justify-between overflow-hidden hidden lg:flex items-center bg-transparent w-full h-[150px] bottom-16">
      <PButton></PButton>

      <ScrollToTopButton classname=" hidden lg:flex -mr-9"></ScrollToTopButton>
    </div>
  );
};

export default ScrollContainer;
