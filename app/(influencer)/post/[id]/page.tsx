"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
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
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  Bookmark,
  ArrowLeft,
  Clock,
  DollarSign,
  Users,
} from "lucide-react";
import Link from "next/link";
import ads from "@/constants/ads";
import { useParams } from "next/navigation";
import AdDetailSkeleton from "@/components/PostSkeleton";

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

export default function AdDetailView() {
  const [ad, setAd] = useState<Ad | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useSelector(selectIsDarkMode);
  const params = useParams();
  const adId = `${params.id}`;

  useEffect(() => {
    const loadAd = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      const foundAd = ads.find((ad) => ad.id === parseInt(adId));
      if (foundAd) {
        setAd(foundAd);
      }
      setIsLoading(false);
    };
    loadAd();
  }, [adId]);

  const handleLikeClick = () => setIsLiked(!isLiked);
  const handleSaveClick = () => setIsSaved(!isSaved);

  if (isLoading) return <AdDetailSkeleton />;
  if (!ad) return <div>Ad not found</div>;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          className={`max-w-4xl mx-auto my-8 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          } shadow-xl rounded-xl overflow-hidden`}
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
                  <CardTitle className="font-bold text-2xl">
                    {ad.company}
                  </CardTitle>
                  <p
                    className={`flex items-center ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <Clock className="w-4 h-4 mr-1" />
                    Posted 2 hours ago
                  </p>
                </div>
              </div>
              <Badge
                variant="secondary"
                className={`${
                  isDarkMode ? "bg-purple-700" : "bg-purple-100 text-purple-800"
                } px-3 py-1 rounded-full text-sm font-medium`}
              >
                {ad.category}
              </Badge>
            </div>
          </CardHeader>

          <CardContent>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } mb-6 text-lg leading-relaxed`}
            >
              {ad.description}
            </p>

            <div className="flex justify-between mb-6 text-sm">
              <div className="flex items-center space-x-2">
                <DollarSign
                  className={`w-5 h-5 ${
                    isDarkMode ? "text-green-400" : "text-green-600"
                  }`}
                />
                <span
                  className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                >
                  Budget:
                </span>
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full shadow-md font-semibold">
                  {ad.budget}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users
                  className={`w-5 h-5 ${
                    isDarkMode ? "text-purple-400" : "text-purple-600"
                  }`}
                />
                <span
                  className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                >
                  Followers:
                </span>
                <span className="text-purple-500 font-medium">
                  {ad.followers}
                </span>
              </div>
            </div>

            <motion.div
              className="flex justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-[32rem] h-[36rem] mb-6 rounded-xl overflow-hidden group">
                <Image
                  src={ad.imageUrl}
                  alt={`${ad.company} Ad`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
              </div>
            </motion.div>
          </CardContent>

          <CardFooter
            className={`flex flex-wrap justify-between py-4 ${
              isDarkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
          >
            <div className="flex flex-wrap space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                onClick={handleLikeClick}
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-purple-400 hover:bg-gray-800"
                    : "text-gray-600 hover:text-purple-600 hover:bg-gray-200"
                } mb-2 sm:mb-0`}
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
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-purple-400 hover:bg-gray-800"
                    : "text-gray-600 hover:text-purple-600 hover:bg-gray-200"
                } mb-2 sm:mb-0`}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">Contact</span>
              </Button>

              <Button
                variant="ghost"
                onClick={handleSaveClick}
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-purple-400 hover:bg-gray-800"
                    : "text-gray-600 hover:text-purple-600 hover:bg-gray-200"
                } mb-2 sm:mb-0`}
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
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-purple-400 hover:bg-gray-800"
                    : "text-gray-600 hover:text-purple-600 hover:bg-gray-200"
                } mb-2 sm:mb-0`}
              >
                <Share2 className="w-5 h-5 mr-2" />
                <span className="font-semibold">Share</span>
              </Button>
            </div>

            <Link href="/home" className="w-full sm:w-auto mt-4 sm:mt-0">
              <Button
                variant="outline"
                className={`w-full sm:w-auto ${
                  isDarkMode
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to ads
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
