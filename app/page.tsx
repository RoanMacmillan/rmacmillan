"use client";
import List from "@/components/containers/list";
import LoadingBar from "@/animations/loading-bar";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-[1380px] mx-auto px-6 customMd:px-20">
      <div className="h-1 w-full absolute top-0 left-0 bg-customBlack" ></div>
      <div className={`${loading ? 'fadeIn z-50' : '-z-50'} fadeOut bg-customBlack w-full h-screen flex justify-center fixed top-0 left-0`}>
        <h1 className={`fadeInScale text-customWhite font-light text-5xl sm:text-7xl z-50 my-auto`}>Loading...</h1>
        <LoadingBar backgroundColorClass="bg-customEmerald"></LoadingBar>
      </div>

      {loading && <div className="w-full h-screen absolute top-0 left-0 bg-customWhite z-20"></div>}

      <List 
      
      hiddenClass={`${loading ? 'hidden' : 'block'}`} >
      


      </List>
    </div>
  );
}


      // blurClass={`${loading ? 'hidden' : 'block'}`}>
