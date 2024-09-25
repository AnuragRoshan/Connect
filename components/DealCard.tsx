"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  DollarSign,
  Calendar,
  CheckCircle,
  Instagram,
  Youtube,
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
}

export default function DealCard({
  deal,
  toggleDealExpansion,
  isExpanded,
}: DealCardProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <motion.div
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg "
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
              <h3 className="text-xl font-semibold">{deal.businessName}</h3>
              <p className="text-gray-400 text-sm">
                {deal.status === "Pending" ? "Applied on: " : "Deal date: "}
                {deal.date}
              </p>
            </div>
            <Button
              className="bg-gray-600 hover:bg-gray-500"
              onClick={() => {
                dispatch(startTopLoading());
                setTimeout(() => {
                  router.push(`/deals/${deal.id}`);
                  dispatch(stopTopLoading());
                }, 3000);
              }}
            >
              To Deal
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
            <span className="text-purple-400 font-semibold">
              ${deal.agreedRate}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${
                isExpanded ? "transform rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="px-6 pb-6 pt-2 border-t border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-300 mb-4">{deal.contractTerms}</p>
            <div className="flex space-x-6">
              <div className="flex items-center text-purple-400">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>${deal.agreedRate}</span>
              </div>
              <div className="flex items-center text-gray-400">
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
              <div className="flex items-center text-gray-400">
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
