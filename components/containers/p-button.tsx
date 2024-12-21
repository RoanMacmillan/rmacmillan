'use client'
import Image from "next/image";
import Link from "next/link";
import React, {  useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
const PButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<any>(null);
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    setIsVisible(false); // Reset visibility to false initially

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
  }, [pathname]); // Trigger this effect when the pathname changes

  return (
    <Link
      href="/"
      className={`${isVisible ? 'opacity-100 -ml-3' : 'opacity-0 -ml-10'} -rotate-90 lg:flex hidden -ml-3 items-center group font-semibold transition-all duration-1000 delay-100`}
      ref={buttonRef}
    >
      <span className="mr-4 text-sm">Portfolio</span>
      <Image
        src="/images/ribbon.svg"
        className="group-hover:scale-[1.2] transition-transform duration-500"
        alt="Ribbon"
        width={24}
        height={24}
      />
    </Link>
  );
};

export default PButton;
