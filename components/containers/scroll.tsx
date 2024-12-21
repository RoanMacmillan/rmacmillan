'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';  // Import the usePathname hook

interface ScrollToTopButtonProps {
  classname: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ classname }) => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();  // Get the current pathname

  // Reset the fade-in effect whenever the page route changes
  useEffect(() => {
    setIsVisible(false);  // Reset visibility to false initially

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, [pathname]);  // Trigger this effect when the pathname changes

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleScrollToTop}
      className={`${classname} group rotate-90 flex items-center font-semibold transition-all duration-700 delay-100 lg:duration-1000 ${
        isVisible ? 'opacity-100 lg:-mr-9' : 'opacity-0 lg:opacity-100 lg:-mr-[80px]'
      }`}
    >
      <span className="mr-5 text-sm leading-3">Scroll to top</span>
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
