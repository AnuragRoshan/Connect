"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import { mockOpportunities } from "@/constants/mockOpportunity";
import OpportunityCard from "@/components/OpportunityCard";
import OpportunityCardSkeleton from "@/components/OpportunityCardSkeleton";

export default function OpportunitiesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useSelector(selectIsDarkMode);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const bgColor = isDarkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";

  return (
    <div
      className={`min-h-screen ${bgColor} ${textColor} p-8 mx-12 my-8 rounded-xl`}
    >
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Opportunities
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <OpportunityCardSkeleton key={index} isDarkMode={isDarkMode} />
            ))
          : mockOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity._id}
                opportunity={opportunity}
                isDarkMode={isDarkMode}
              />
            ))}
      </div>
    </div>
  );
}
