"use client";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
// import { text } from "stream/consumers";

export default function SplashScreen() {
  const isDarkMode = useSelector(selectIsDarkMode);

  const bgColor = isDarkMode ? "#1a202c" : "#f7fafc";
  const primaryColor = isDarkMode ? "#81e6d9" : "#319795";
  const secondaryColor = isDarkMode ? "#d53f8c" : "#b83280";
  const tertiaryColor = isDarkMode ? "#faf089" : "#d69e2e";
  // const textColor = isDarkMode ? "#ffffff" : "#2d3748";

  return (
    <div
      className="flex items-center justify-center h-screen z-100 flex-col "
      style={{ backgroundColor: bgColor }}
    >
      <svg width="300" height="300" viewBox="0 0 300 300">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <motion.circle
          cx="150"
          cy="150"
          r="120"
          fill="none"
          stroke={primaryColor}
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Orbiting circles */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <motion.circle
            cx="150"
            cy="30"
            r="15"
            fill={secondaryColor}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.circle
            cx="270"
            cy="150"
            r="15"
            fill={tertiaryColor}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
          />
          <motion.circle
            cx="150"
            cy="270"
            r="15"
            fill={secondaryColor}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          />
          <motion.circle
            cx="30"
            cy="150"
            r="15"
            fill={tertiaryColor}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1.5,
            }}
          />
        </motion.g>

        {/* Central icon */}
        <g filter="url(#glow)">
          <motion.path
            d="M150 100 L130 140 L170 140 Z"
            fill={primaryColor}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.path
            d="M150 180 L130 140 L170 140 Z"
            fill={secondaryColor}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: -360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </g>

        {/* Pulsating connection lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <line
            x1="150"
            y1="100"
            x2="150"
            y2="30"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <line
            x1="170"
            y1="140"
            x2="270"
            y2="150"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <line
            x1="150"
            y1="180"
            x2="150"
            y2="270"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <line
            x1="130"
            y1="140"
            x2="30"
            y2="150"
            stroke={primaryColor}
            strokeWidth="2"
          />
        </motion.g>

        {/* Text */}
      </svg>
      <div
        style={{
          fontSize: "3rem",
          fontWeight: "bolder",
          color: primaryColor,
        }}
      >
        Connect
      </div>
    </div>
  );
}
