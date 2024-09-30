"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import { mockOpportunities } from "@/constants/mockOpportunity";
import OpportunityCard from "@/components/OpportunityCard";
import OpportunityCardSkeleton from "@/components/OpportunityCardSkeleton";
import OpportunityFilter from "@/components/OpportunityFilter";

// Define the Filters interface
interface Filters {
  startDate?: string;
  endDate?: string;
  deadline?: string;
  minBudget?: number;
  maxBudget?: number;
  minFollowers?: number;
  maxFollowers?: number;
  category?: string;
}

export default function OpportunitiesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredOpportunities, setFilteredOpportunities] =
    useState(mockOpportunities);
  const isDarkMode = useSelector(selectIsDarkMode);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Use the Filters type for the filters parameter
  const handleFilterChange = (filters: Filters) => {
    const filtered = mockOpportunities.filter((opportunity) => {
      const postedDate = new Date(opportunity.createdAt);
      const deadline = new Date(opportunity.deadline);
      return (
        (!filters.startDate || postedDate >= new Date(filters.startDate)) &&
        (!filters.endDate || postedDate <= new Date(filters.endDate)) &&
        (!filters.deadline || deadline <= new Date(filters.deadline)) &&
        (!filters.minBudget || opportunity.budget >= filters.minBudget) &&
        (!filters.maxBudget || opportunity.budget <= filters.maxBudget) &&
        (!filters.minFollowers ||
          opportunity.followerCountRequirement >= filters.minFollowers) &&
        (!filters.maxFollowers ||
          opportunity.followerCountRequirement <= filters.maxFollowers) &&
        (!filters.category || opportunity.category === filters.category)
      );
    });
    setFilteredOpportunities(filtered);
  };

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

      <OpportunityFilter
        onFilterChange={handleFilterChange}
        isDarkMode={isDarkMode}
      />

      <div>
        {filteredOpportunities.length > 0 ? (
          <>{filteredOpportunities.length} Opportunities</>
        ) : (
          <></>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <OpportunityCardSkeleton key={index} isDarkMode={isDarkMode} />
            ))
          : filteredOpportunities.map((opportunity) => (
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
