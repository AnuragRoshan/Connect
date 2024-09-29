"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import { mockOpportunities } from "@/constants/mockOpportunity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  DollarSign,
  MapPin,
  Users,
  Briefcase,
  Clock,
} from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";

// Define Opportunity type
interface Opportunity {
  _id: string;
  title: string;
  description: string;
  platform: string[];
  budget: number;
  followerCountRequirement: number;
  deadline: string;
  location: string;
  dealType: string;
  createdAt: string;
  category: string;
  business: {
    name: string;
    logo: string;
  };
}

export default function SingleOpportunityPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [opportunity, setOpportunity] = useState<Opportunity | null>(null); // Specify Opportunity type or null
  const isDarkMode = useSelector(selectIsDarkMode);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundOpportunity = mockOpportunities.find((opp) => opp._id === id);
      setOpportunity(foundOpportunity || null); // Handle the case where opportunity isn't found
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const bgColor = isDarkMode ? "bg-gray-900" : "bg-gray-50";
  const textColor = isDarkMode ? "text-gray-100" : "text-gray-900";
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const secondaryTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const badgeBg = isDarkMode ? "bg-gray-700" : "bg-gray-200";
  const badgeText = isDarkMode ? "text-gray-200" : "text-gray-800";

  if (isLoading) {
    return (
      <div className={`min-h-screen ${bgColor} ${textColor} p-8`}>
        <div className="max-w-4xl mx-auto">
          <div
            className={`h-8 w-64 ${
              isDarkMode ? "bg-gray-800" : "bg-gray-300"
            } rounded animate-pulse mb-8`}
          ></div>
          <div
            className={`h-64 ${
              isDarkMode ? "bg-gray-800" : "bg-gray-300"
            } rounded animate-pulse`}
          ></div>
        </div>
      </div>
    );
  }

  if (!opportunity) {
    return (
      <div className={`min-h-screen ${bgColor} ${textColor} p-8`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Opportunity not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${bgColor} ${textColor} p-8 mx-12 my-8 rounded-xl`}
    >
      <div className=" mx-auto">
        <motion.h1
          className={`text-4xl font-bold mb-8 ${textColor}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {opportunity.title}
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className={`${cardBg} ${cardBorder} shadow-lg`}>
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={opportunity.business.logo}
                    alt={opportunity.business.name}
                  />
                  <AvatarFallback
                    className={`${
                      isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    } ${textColor}`}
                  >
                    {opportunity.business.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className={`${textColor} text-2xl`}>
                    {opportunity.business.name}
                  </CardTitle>
                  <p className={`${secondaryTextColor} text-sm`}>
                    {opportunity.category}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {opportunity.platform.map((platform: string) => (
                  <Badge key={platform} className={`${badgeBg} ${badgeText}`}>
                    {platform}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className={`mb-6 ${textColor}`}>{opportunity.description}</p>
              <Separator
                className={isDarkMode ? "bg-gray-700" : "bg-gray-200"}
              />
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className={`flex items-center ${textColor}`}>
                  <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                  <span>Budget: ${opportunity.budget}</span>
                </div>
                <div className={`flex items-center ${textColor}`}>
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  <span>
                    {opportunity.followerCountRequirement.toLocaleString()}+
                    followers
                  </span>
                </div>
                <div className={`flex items-center ${textColor}`}>
                  <Calendar className="w-5 h-5 mr-2 text-red-500" />
                  <span>
                    Deadline:{" "}
                    {new Date(opportunity.deadline).toLocaleDateString()}
                  </span>
                </div>
                <div className={`flex items-center ${textColor}`}>
                  <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
                  <span>Location: {opportunity.location}</span>
                </div>
                <div className={`flex items-center ${textColor}`}>
                  <Briefcase className="w-5 h-5 mr-2 text-purple-500" />
                  <span>Deal Type: {opportunity.dealType}</span>
                </div>
                <div className={`flex items-center ${textColor}`}>
                  <Clock className="w-5 h-5 mr-2 text-indigo-500" />
                  <span>
                    Posted:{" "}
                    {new Date(opportunity.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <ApplicationForm
            isDarkMode={isDarkMode}
            opportunityId={opportunity._id}
          />
        </div>
      </div>
    </div>
  );
}
