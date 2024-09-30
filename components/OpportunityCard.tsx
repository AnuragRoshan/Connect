"use client";

import { useEffect, useState } from "react"; // Add useState and useEffect
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, Users, ArrowRight, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from "date-fns"; // Import date-fns
import { useRouter } from "next/navigation";
import {
  startTopLoading,
  stopTopLoading,
} from "@/redux/slices/Loader/topLoaderSlice";
import { useDispatch } from "react-redux";

interface Business {
  name: string;
  logo: string;
}

interface Opportunity {
  _id: string;
  business: Business;
  category: string;
  title: string;
  description: string;
  platform: string[];
  budget: number;
  followerCountRequirement: number;
  deadline: string;
  createdAt: string;
}

interface OpportunityCardProps {
  opportunity: Opportunity;
  isDarkMode: boolean;
}

export default function OpportunityCard({
  opportunity,
  isDarkMode,
}: OpportunityCardProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const textColor = isDarkMode ? "text-gray-100" : "text-gray-900";
  const secondaryTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const badgeBg = isDarkMode ? "bg-gray-700" : "bg-gray-200";
  const badgeText = isDarkMode ? "text-gray-200" : "text-gray-800";
  const separatorColor = isDarkMode ? "bg-gray-700" : "bg-gray-200";

  // Utility function to format the posted date
  const formatPostedDate = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  useEffect(() => {
    setIsMounted(true); // Set to true after the component mounts
  }, []);

  const handleApply = () => {
    if (!isMounted) return; // Ensure router is available only on the client side

    dispatch(startTopLoading());

    setTimeout(() => {
      router.push(`/apply/${opportunity._id}`);
      dispatch(stopTopLoading());
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`w-[340px] h-[440px] ${cardBg} ${cardBorder} overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col`}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 border-2 border-primary">
              <AvatarImage
                src={opportunity.business.logo}
                alt={opportunity.business.name}
              />
              <AvatarFallback
                className={`${
                  isDarkMode ? "bg-gray-600" : "bg-gray-200"
                } ${textColor}`}
              >
                {opportunity.business.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className={`text-lg ${textColor} font-bold`}>
                {opportunity.business.name}
              </CardTitle>
              <p className={`text-sm ${secondaryTextColor}`}>
                {opportunity.category}
              </p>
            </div>
          </div>
        </CardHeader>
        <Separator className={separatorColor} />
        <CardContent className="pt-4 flex-grow">
          <h3
            className={`${textColor} font-semibold text-lg mb-2 line-clamp-2`}
          >
            {opportunity.title}
          </h3>
          <p className={`text-sm ${secondaryTextColor} mb-4 line-clamp-3`}>
            {opportunity.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {opportunity.platform.map((platform: string) => (
              <Badge key={platform} className={`${badgeBg} ${badgeText}`}>
                {platform}
              </Badge>
            ))}
          </div>
          <div className={`grid grid-cols-2 gap-4 text-sm ${textColor}`}>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-green-500" />
              <span>${opportunity.budget}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-blue-500" />
              <span>
                {opportunity.followerCountRequirement.toLocaleString()}+
              </span>
            </div>
            <div className="flex items-center col-span-2">
              <Calendar className="w-4 h-4 mr-2 text-red-500" />
              <span>
                Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center col-span-2">
              <Clock className="w-4 h-4 mr-2 text-purple-500" />
              <span>Posted: {formatPostedDate(opportunity.createdAt)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-auto" onClick={handleApply}>
          <Button className="w-full group">
            Apply For Deal
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-14" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
