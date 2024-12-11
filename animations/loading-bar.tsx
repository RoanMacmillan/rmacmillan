import { motion } from "framer-motion";
import React from "react";

interface LoadingBarProps {
  backgroundColorClass: string;
}

const LoadingBar = ({ backgroundColorClass }: LoadingBarProps) => {
  const customEase = [0.4, 0.4, 0, 1];

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1, ease: customEase }}
      className={`absolute left-0 top-0 h-1 ${backgroundColorClass}`}
    />
  );
};

export default LoadingBar;
