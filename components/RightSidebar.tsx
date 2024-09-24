"use client";
import React from "react";
import { motion } from "framer-motion";

const RightSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[100%] p-4 rounded-2xl min-h-[100vh] h-max bg-black z-10 bg-gradient-to-b from-gray-900 opacity-80 to-gray-950 border-r border-gray-800 hidden md:block"
    >
      <div>RightSideBAr</div>
    </motion.div>
  );
};

export default RightSidebar;
