"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock,
  Youtube,
  Instagram,
  Send,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";
import {
  selectTopLoaderStatus,
  startTopLoading,
  stopTopLoading,
} from "@/redux/slices/Loader/topLoaderSlice";

interface Deal {
  id: string;
  businessName: string;
  businessLogo: string;
  agreedRate: number;
  status: "Pending" | "In Progress" | "Completed" | "Cancelled";
  platform: string; // Platform for promotion (e.g., Instagram, YouTube)
  contentType: string; // Content type (e.g., Story, Post, Video)
  contractTerms: string; // Terms or brief description of the deal
  date: string;
  createdAt: string;
  updatedAt: string;
}

const mockDeals: Deal[] = [
  {
    id: "1",
    businessName: "TechGiant",
    businessLogo: "/placeholder.svg?height=50&width=50",
    agreedRate: 1500,
    status: "In Progress",
    platform: "Instagram",
    contentType: "Post",
    contractTerms: "Instagram post about the latest smartphone",
    date: "2023-09-15",
    createdAt: "2023-09-01",
    updatedAt: "2023-09-10",
  },
  {
    id: "2",
    businessName: "FashionBrand",
    businessLogo: "/placeholder.svg?height=50&width=50",
    agreedRate: 800,
    status: "Pending",
    platform: "Youtube",
    contentType: "Video",
    contractTerms: "YouTube video showcasing summer collection",
    date: "2023-09-20",
    createdAt: "2023-09-05",
    updatedAt: "2023-09-15",
  },
  {
    id: "3",
    businessName: "FoodChain",
    businessLogo: "/placeholder.svg?height=50&width=50",
    agreedRate: 2000,
    status: "Completed",
    platform: "Instagram",
    contentType: "Story",
    contractTerms: "Instagram story about new menu items",
    date: "2023-09-10",
    createdAt: "2023-09-01",
    updatedAt: "2023-09-12",
  },
  {
    id: "4",
    businessName: "TravelCo",
    businessLogo: "/placeholder.svg?height=50&width=50",
    agreedRate: 1200,
    status: "Pending",
    platform: "Instagram",
    contentType: "Post",
    contractTerms: "Instagram post about travel destinations",
    date: "2023-09-25",
    createdAt: "2023-09-08",
    updatedAt: "2023-09-18",
  },
  {
    id: "5",
    businessName: "FitnessBrand",
    businessLogo: "/placeholder.svg?height=50&width=50",
    agreedRate: 1000,
    status: "Completed",
    platform: "Instagram",
    contentType: "Post",
    contractTerms: "Instagram post promoting fitness products",
    date: "2023-09-05",
    createdAt: "2023-09-01",
    updatedAt: "2023-09-07",
  },
  {
    id: "6",
    businessName: "TechGiant",
    businessLogo: "/placeholder.svg?height=50&width=50",
    agreedRate: 1500,
    status: "In Progress",
    platform: "Instagram",
    contentType: "Post",
    contractTerms: "Instagram post about the latest smartphone",
    date: "2023-09-15",
    createdAt: "2023-09-01",
    updatedAt: "2023-09-10",
  },
  {
    id: "7",
    businessName: "FashionBrand",
    businessLogo: "/placeholder.svg?height=50&width=50",
    agreedRate: 800,
    status: "Pending",
    platform: "YouTube",
    contentType: "Video",
    contractTerms: "YouTube video showcasing summer collection",
    date: "2023-09-20",
    createdAt: "2023-09-05",
    updatedAt: "2023-09-15",
  },
  {
    id: "8",
    businessName: "FoodChain",
    businessLogo: "/placeholder.svg?height=50&width=50",
    agreedRate: 2000,
    status: "Completed",
    platform: "Instagram",
    contentType: "Story",
    contractTerms: "Instagram story about new menu items",
    date: "2023-09-10",
    createdAt: "2023-09-01",
    updatedAt: "2023-09-12",
  },
  {
    id: "9",
    businessName: "TravelCo",
    businessLogo: "/placeholder.svg?height=50&width=50",
    agreedRate: 1200,
    status: "Pending",
    platform: "Instagram",
    contentType: "Post",
    contractTerms: "Instagram post about travel destinations",
    date: "2023-09-25",
    createdAt: "2023-09-08",
    updatedAt: "2023-09-18",
  },
  {
    id: "10",
    businessName: "FitnessBrand",
    businessLogo: "/placeholder.svg?height=50&width=50",
    agreedRate: 1000,
    status: "Completed",
    platform: "Instagram",
    contentType: "Post",
    contractTerms: "Instagram post promoting fitness products",
    date: "2023-09-05",
    createdAt: "2023-09-01",
    updatedAt: "2023-09-07",
  },
];

export default function EnhancedDealsOverviewPage() {
  const [expandedDeal, setExpandedDeal] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-gray-800 rounded-xl text-white p-8 mx-[3rem] my-[2rem] ">
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

interface DealSectionProps {
  title: string;
  deals: Deal[];
  toggleDealExpansion: (dealId: string) => void;
  expandedDeal: string | null;
}

function DealSection({
  title,
  deals,
  toggleDealExpansion,
  expandedDeal,
}: DealSectionProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-purple-400">{title}</h2>
      <div className="space-y-6">
        {deals.map((deal) => (
          <DealCard
            key={deal.id}
            deal={deal}
            toggleDealExpansion={toggleDealExpansion}
            isExpanded={expandedDeal === deal.id}
          />
        ))}
      </div>
    </motion.div>
  );
}

interface DealCardProps {
  deal: Deal;
  toggleDealExpansion: (dealId: string) => void;
  isExpanded: boolean;
}

function DealCard({ deal, toggleDealExpansion, isExpanded }: DealCardProps) {
  const router = useRouter();

  const dispatch = useDispatch();

  const isTopLoading = useSelector(selectTopLoaderStatus);

  return (
    <motion.div
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
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
                  // router.push(path);
                  router.push(`/deals/${deal.id}`);
                  dispatch(stopTopLoading());
                  console.log("Is loading after navigation:", isTopLoading);
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
                  : deal.status === "Completed"
                  ? "bg-green-500 text-green-100"
                  : "bg-red-500 text-red-100"
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
              <div className="flex items-center text-inherit">
                <div className="flex items-center">
                  {deal.platform === "Instagram" ? (
                    <Instagram className="w-5 h-5 mr-2 " />
                  ) : (
                    <Youtube className="w-5 h-5 mr-2 " />
                  )}
                  <span>{deal.platform}</span>
                </div>
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
