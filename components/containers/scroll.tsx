import Image from "next/image";
import React from "react";
import { buttonVariants } from "../ui/button";




interface ScrollProps {
  className?: string;
}

const ScrollToTopButton: React.FC<ScrollProps> = ({ className }) => {


 

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Makes the scrolling smooth
    });
  };

 

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      className={`${className} absolute rotate-90  z-10 flex items-center font-semibold `}
    >
      <span className="mr-6 leading-3">Scroll to top</span>
      <Image
        className="rotate-90"
        src="/images/arrow.svg"
        alt="Arrow"
        width={36}
        height={36}
      />
    </button>
  );
};

export default ScrollToTopButton;
