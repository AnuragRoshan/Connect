"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  DollarSign,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

interface Deal {
  _id: string;
  business_id: string;
  influencer_id: string;
  post_id: string;
  agreed_rate: number;
  status: "Pending" | "In Progress" | "Completed" | "Cancelled";
  platform: "Instagram" | "YouTube" | "Twitter";
  content_type: string;
  short_description: string;
  contract_terms: string;
  created_at: string;
  updated_at: string;
}

interface Business {
  _id: string;
  name: string;
  logo: string;
}

// Mock data for the deal and business
const mockDeal: Deal = {
  _id: "1",
  business_id: "b1",
  influencer_id: "i1",
  post_id: "p1",
  agreed_rate: 1500,
  status: "In Progress",
  platform: "Instagram",
  content_type: "Story",
  short_description: "Promote our new summer collection",
  contract_terms:
    "Create 3 Instagram stories showcasing our new summer collection. Mention key features and provide a swipe-up link to our website. If the post performs well, we may extend the contract for additional posts. And if views is greater than 10k, we will pay an additional $500.",
  created_at: "2023-09-15T10:00:00Z",
  updated_at: "2023-09-16T14:30:00Z",
};

const mockBusiness: Business = {
  _id: "b1",
  name: "FashionBrand",
  logo: "/placeholder.svg?height=100&width=100",
};

export default function DetailedDealPage() {
  const [deal, setDeal] = useState<Deal | null>(null);
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to fetch deal and business data
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
      setDeal(mockDeal);
      setBusiness(mockBusiness);
      setLoading(false);
    };
    fetchData();
  }, []);

  const platformIcon = {
    Instagram: <Instagram className="w-6 h-6" />,
    YouTube: <Youtube className="w-6 h-6" />,
    Twitter: <Twitter className="w-6 h-6" />,
  };

  const statusColor = {
    Pending: "text-yellow-400",
    "In Progress": "text-blue-400",
    Completed: "text-green-400",
    Cancelled: "text-red-400",
  };

  return (
    <div className="min-h-screen w-[60%] mx-auto my-[2rem] p-[1rem] bg-gray-900 text-white rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="flex items-center mb-8">
          <ArrowLeft
            className="w-6 h-6 mr-4 cursor-pointer"
            onClick={() => window.history.back()}
          />
          <h1 className="text-3xl font-bold">Deal Details</h1>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              {loading ? (
                <div className="w-16 h-16 rounded-full bg-gray-700 animate-pulse mr-4"></div>
              ) : (
                <img
                  src={business?.logo}
                  alt={business?.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
              )}
              <div>
                {loading ? (
                  <>
                    <div className="h-8 w-48 bg-gray-700 rounded animate-pulse mb-2"></div>
                    <div className="h-4 w-64 bg-gray-700 rounded animate-pulse"></div>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-semibold">{business?.name}</h2>
                    <p className="text-gray-400">{deal?.short_description}</p>
                  </>
                )}
              </div>
            </div>
            {loading ? (
              <div className="h-8 w-24 bg-gray-700 rounded animate-pulse"></div>
            ) : (
              <div
                className={`text-lg font-semibold ${
                  deal ? statusColor[deal.status] : ""
                }`}
              >
                {deal?.status}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {["Platform", "Content Type", "Agreed Rate", "Created At"].map(
              (item, index) => (
                <div key={index}>
                  <p className="text-gray-400 mb-1">{item}</p>
                  {loading ? (
                    <div className="h-6 w-32 bg-gray-700 rounded animate-pulse"></div>
                  ) : (
                    <div className="flex items-center">
                      {item === "Platform" &&
                        deal?.platform &&
                        platformIcon[deal.platform]}
                      <span className="ml-2">
                        {item === "Platform" && deal?.platform}
                        {item === "Content Type" && deal?.content_type}
                        {item === "Agreed Rate" && (
                          <span className="text-purple-400 font-semibold">
                            ${deal?.agreed_rate}
                          </span>
                        )}
                        {item === "Created At" &&
                          deal?.created_at &&
                          new Date(deal.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          <div>
            <p className="text-gray-400 mb-1">Contract Terms</p>
            {loading ? (
              <div className="h-24 bg-gray-700 rounded animate-pulse"></div>
            ) : (
              <p className="bg-gray-700 p-4 rounded-lg">
                {deal?.contract_terms}
              </p>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Timeline</h3>
          <div className="space-y-4">
            {loading ? (
              <>
                <TimelineItemSkeleton />
                <TimelineItemSkeleton />
                <TimelineItemSkeleton />
              </>
            ) : (
              <>
                <TimelineItem
                  icon={<Clock className="w-5 h-5" />}
                  title="Deal Created"
                  date={
                    deal?.created_at
                      ? new Date(deal.created_at).toLocaleString()
                      : ""
                  }
                />
                <TimelineItem
                  icon={<CheckCircle className="w-5 h-5" />}
                  title="Last Updated"
                  date={
                    deal?.updated_at
                      ? new Date(deal.updated_at).toLocaleString()
                      : ""
                  }
                />
                {deal?.status === "Completed" && (
                  <TimelineItem
                    icon={<CheckCircle className="w-5 h-5 text-green-400" />}
                    title="Deal Completed"
                    date="Pending"
                  />
                )}
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  date: string;
}

function TimelineItem({ icon, title, date }: TimelineItemProps) {
  return (
    <div className="flex items-center">
      <div className="bg-gray-700 rounded-full p-2 mr-4">{icon}</div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  );
}

function TimelineItemSkeleton() {
  return (
    <div className="flex items-center">
      <div className="bg-gray-700 rounded-full p-2 mr-4 w-9 h-9"></div>
      <div>
        <div className="h-5 w-32 bg-gray-700 rounded animate-pulse mb-1"></div>
        <div className="h-4 w-24 bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
