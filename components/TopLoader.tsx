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
          className="fixed top-0 left-15 h-1 bg-gradient-to-r from-purple-500 to-purple-800 "
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeIn" }}
        />
      )}
    </>
  );
};

export default TopLoader;
