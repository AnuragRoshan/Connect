"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  UserRoundPlus,
  Bookmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Ad {
  id: number;
  company: string;
  avatar: string;
  description: string;
  budget: string;
  category: string;
  followers: string;
  imageUrl: string;
}

interface AdvertisementCardProps {
  ad: Ad;
  isDarkMode: boolean;
}

export default function AdvertisementCard({
  ad,
  isDarkMode,
}: AdvertisementCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  const cardBg = isDarkMode
    ? "bg-gradient-to-br from-gray-900 to-black"
    : "bg-gradient-to-br from-white to-gray-100";
  const cardBorder = isDarkMode ? "border-gray-800" : "border-gray-200";
  const cardHoverBorder = isDarkMode
    ? "hover:border-gray-600"
    : "hover:border-gray-400";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const secondaryTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const badgeBg = isDarkMode
    ? "bg-gradient-to-r from-purple-600 to-pink-500"
    : "bg-gradient-to-r from-purple-400 to-pink-300";
  const buttonHoverBg = isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200";
  const footerBg = isDarkMode
    ? "bg-gray-900 bg-opacity-50"
    : "bg-gray-100 bg-opacity-50";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`relative ${cardBg} border ${cardBorder} cursor-pointer  rounded-xl overflow-hidden transform transition-all ${cardHoverBorder}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="border-2 border-purple-500 ring-2 ring-purple-300 ring-opacity-50">
                <AvatarImage src={ad.avatar} alt={`${ad.company} avatar`} />
                <AvatarFallback className="bg-purple-700 text-white">
                  {ad.company.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <CardTitle className={`${textColor} font-bold text-lg`}>
                  {ad.company}
                </CardTitle>
                <p className={secondaryTextColor}>Posted 2 hours ago</p>
              </div>
            </div>
            <Badge
              variant="secondary"
              className={`${badgeBg} text-white px-3 py-1 rounded-full shadow-lg`}
            >
              {ad.category}
            </Badge>
          </div>
          <Button
            variant="ghost"
            className={`flex w-max gap-1  ${secondaryTextColor} hover:text-purple-400 ${buttonHoverBg} transition-colors duration-300`}
          >
            <UserRoundPlus className="w-5 h-5" />
            <span className="font-semibold">Follow</span>
          </Button>
        </CardHeader>

        <CardContent>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } mb-6 leading-relaxed`}
          >
            {ad.description}
          </p>

          <div className="flex justify-between mb-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className={secondaryTextColor}>Budget:</span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full shadow-md font-semibold">
                {ad.budget}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={secondaryTextColor}>Followers:</span>
              <span className="text-purple-500 font-medium">
                {ad.followers}
              </span>
            </div>
          </div>

          <motion.div
            className="flex justify-center"
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-[32rem] h-[36rem] mb-4 rounded-xl overflow-hidden ">
              <Image
                src={ad.imageUrl}
                alt={`${ad.company} Ad`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition-transform duration-300 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
            </div>
          </motion.div>
        </CardContent>

        <CardFooter className={`flex justify-start gap-4 py-4 ${footerBg}`}>
          <Button
            variant="ghost"
            onClick={handleLikeClick}
            className={`${secondaryTextColor} hover:text-purple-400 ${buttonHoverBg} transition-colors duration-300`}
          >
            <motion.div
              whileTap={{ scale: 0.8 }}
              animate={{ scale: isLiked ? 1.2 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <ThumbsUp
                className="w-5 h-5 mr-2"
                stroke={isLiked ? "rgb(192, 132, 252)" : "currentColor"}
                fill={isLiked ? "rgb(192, 132, 252)" : "none"}
              />
            </motion.div>
            <span className="font-semibold">Like</span>
          </Button>

          <Button
            variant="ghost"
            className={`${secondaryTextColor} hover:text-purple-400 ${buttonHoverBg} transition-colors duration-300`}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="font-semibold">Contact</span>
          </Button>

          <Button
            variant="ghost"
            onClick={handleSaveClick}
            className={`${secondaryTextColor} hover:text-purple-400 ${buttonHoverBg} transition-colors duration-300`}
          >
            <motion.div
              whileTap={{ scale: 0.8 }}
              animate={{ scale: isSaved ? 1.2 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Bookmark
                className="w-5 h-5 mr-2"
                stroke={isSaved ? "rgb(192, 132, 252)" : "currentColor"}
                fill={isSaved ? "rgb(192, 132, 252)" : "none"}
              />
            </motion.div>
            <span className="font-semibold">Save</span>
          </Button>

          <Button
            variant="ghost"
            className={`${secondaryTextColor} hover:text-purple-400 ${buttonHoverBg} transition-colors duration-300`}
          >
            <Share2 className="w-5 h-5 mr-2" />
            <span className="font-semibold">Share</span>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
