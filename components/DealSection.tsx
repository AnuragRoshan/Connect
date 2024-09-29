"use client";

import { motion } from "framer-motion";
import { Deal } from "@/app/types/dealType";
import DealCard from "./DealCard";

interface DealSectionProps {
  title: string;
  deals: Deal[];
  toggleDealExpansion: (dealId: string) => void;
  expandedDeal: string | null;
  isDarkMode: boolean;
}

export default function DealSection({
  title,
  deals,
  toggleDealExpansion,
  expandedDeal,
  isDarkMode,
}: DealSectionProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2
        className={`text-2xl font-semibold mb-6 ${
          isDarkMode ? "text-purple-400" : "text-purple-600"
        }`}
      >
        {title}
      </h2>
      <div className="space-y-6">
        {deals.map((deal) => (
          <DealCard
            key={deal.id}
            deal={deal}
            toggleDealExpansion={toggleDealExpansion}
            isExpanded={expandedDeal === deal.id}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </motion.div>
  );
}
