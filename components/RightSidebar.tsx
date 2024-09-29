"use client";

import React from "react";
import { motion } from "framer-motion";

interface RightSidebarProps {
  isDarkMode: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isDarkMode }) => {
  const bgGradient = isDarkMode
    ? "bg-gradient-to-b from-gray-900 to-gray-950"
    : "bg-gradient-to-b from-gray-100 to-white";
  const borderColor = isDarkMode ? "border-gray-800" : "border-gray-200";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-[100%] p-4 rounded-2xl min-h-[100vh] h-max ${bgGradient} z-10 opacity-80 border-r ${borderColor} hidden md:block`}
    >
      <div className={textColor}>RightSidebar</div>
    </motion.div>
  );
};

export default RightSidebar;
