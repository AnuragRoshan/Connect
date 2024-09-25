"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DealSection from "@/components/DealSection";
import { mockDeals } from "@/constants/deals";
import { DealSectionSkeleton } from "@/components/DealSectionSkeleton";

export default function EnhancedDealsOverviewPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [expandedDeal, setExpandedDeal] = useState<string | null>(null);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  const toggleDealExpansion = (dealId: string) => {
    setExpandedDeal(expandedDeal === dealId ? null : dealId);
  };

  const appliedDeals = mockDeals.filter((deal) => deal.status === "Pending");
  const ongoingDeals = mockDeals.filter(
    (deal) => deal.status === "In Progress"
  );
  const completedDeals = mockDeals.filter(
    (deal) => deal.status === "Completed"
  );

  if (isLoading) {
    // Render skeleton when loading
    return (
      <div className="min-h-screen bg-gray-800 rounded-xl text-white p-8 mx-[3rem] my-[2rem]">
        <motion.div
          className="h-12 bg-gray-600 rounded w-64 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <DealSectionSkeleton />
        <DealSectionSkeleton />
        <DealSectionSkeleton />
      </div>
    );
  }

  // Render actual content after loading
  return (
    <div className="min-h-screen bg-gray-800 rounded-xl text-white p-8 mx-[3rem] my-[2rem]">
      <motion.h1
        className="text-4xl font-bold mb-12 text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Deals Overview
      </motion.h1>

      <DealSection
        title="Applied Deals"
        deals={appliedDeals}
        toggleDealExpansion={toggleDealExpansion}
        expandedDeal={expandedDeal}
      />
      <DealSection
        title="Ongoing Deals"
        deals={ongoingDeals}
        toggleDealExpansion={toggleDealExpansion}
        expandedDeal={expandedDeal}
      />
      <DealSection
        title="Completed Deals"
        deals={completedDeals}
        toggleDealExpansion={toggleDealExpansion}
        expandedDeal={expandedDeal}
      />
    </div>
  );
}
