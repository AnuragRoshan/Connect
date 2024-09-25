"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectTopLoaderStatus } from "@/redux/slices/Loader/topLoaderSlice";

const TopLoader: React.FC = () => {
  const isTopLoading = useSelector(selectTopLoaderStatus);

  return (
    <>
      {isTopLoading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-[9999]"
          initial={{ scaleX: 0, transformOrigin: "0%" }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      )}
    </>
  );
};

export default TopLoader;
