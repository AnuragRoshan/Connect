"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  DollarSign,
  Calendar,
  CheckCircle,
  Instagram,
  Youtube,
  SquareArrowOutUpRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  startTopLoading,
  stopTopLoading,
} from "@/redux/slices/Loader/topLoaderSlice";
import { Deal } from "@/app/types/dealType";
import { Button } from "@/components/ui/button";

interface DealCardProps {
  deal: Deal;
  toggleDealExpansion: (dealId: string) => void;
  isExpanded: boolean;
  isDarkMode: boolean;
}

export default function DealCard({
  deal,
  toggleDealExpansion,
  isExpanded,
  isDarkMode,
}: DealCardProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const bgColor = isDarkMode ? "bg-gray-700" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const secondaryTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <motion.div
      className={`${bgColor} rounded-lg overflow-hidden shadow-lg`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => toggleDealExpansion(deal.id)}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img
              src={deal.businessLogo}
              alt={deal.businessName}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className={`text-xl font-semibold ${textColor}`}>
                {deal.businessName}
              </h3>
              <p className={secondaryTextColor}>
                {deal.status === "Pending" ? "Applied on: " : "Deal date: "}
                {deal.date}
              </p>
            </div>
            <Button
              className={
                isDarkMode
                  ? "bg-gray-600 hover:bg-gray-500"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }
              onClick={() => {
                dispatch(startTopLoading());
                setTimeout(() => {
                  router.push(`/deals/${deal.id}`);
                  dispatch(stopTopLoading());
                }, 3000);
              }}
            >
              To Deal
              <span className="ml-2 font-normal">
                <SquareArrowOutUpRight
                  style={{ width: "16px", height: "16px" }}
                />
              </span>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                deal.status === "In Progress"
                  ? "bg-blue-500 text-blue-100"
                  : deal.status === "Pending"
                  ? "bg-yellow-500 text-yellow-100"
                  : "bg-green-500 text-green-100"
              }`}
            >
              {deal.status}
            </span>
            <span
              className={isDarkMode ? "text-purple-400" : "text-purple-600"}
              font-semibold
            >
              ${deal.agreedRate}
            </span>
            <ChevronDown
              className={`w-5 h-5 ${secondaryTextColor} transition-transform ${
                isExpanded ? "transform rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className={`px-6 pb-6 pt-2 border-t ${
              isDarkMode ? "border-gray-600" : "border-gray-200"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p
              className={` mb-4 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {deal.contractTerms}
            </p>
            <div className="flex space-x-6">
              <div
                className={`flex items-center ${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}
              >
                <DollarSign className="w-5 h-5 mr-2" />
                <span>${deal.agreedRate}</span>
              </div>
              <div className={`flex items-center ${secondaryTextColor}`}>
                <Calendar className="w-5 h-5 mr-2" />
                <span>{deal.date}</span>
              </div>
              <div className="flex items-center">
                {deal.platform === "Instagram" ? (
                  <Instagram className="w-5 h-5 mr-2" />
                ) : (
                  <Youtube className="w-5 h-5 mr-2" />
                )}
                <span>{deal.platform}</span>
              </div>
              <div className={`flex items-center ${secondaryTextColor}`}>
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>{deal.contentType}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
