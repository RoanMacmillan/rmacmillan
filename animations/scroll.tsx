import Image from "next/image";
import React from "react";


const ScrollToTopButton: React.FC = () => {
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
      className={`bottom-0 right-0 absolute group rotate-90 flex items-center font-semibold`}
    >
      <span className="mr-6 leading-3">Scroll to top</span>
      <Image
        className="rotate-90 group-hover:scale-[1.2] transition-transform duration-500"
        src="/images/arrow.svg"
        alt="Arrow"
        width={36}
        height={36}
      />
    </button>
  );
};

export default ScrollToTopButton;
