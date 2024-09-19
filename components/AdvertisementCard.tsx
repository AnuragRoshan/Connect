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
import { ThumbsUp, MessageCircle, Share2, UserRoundPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the type for the ad object
interface Ad {
  id: number;
  company: string;
  avatar: string;
  description: string;
  budget: string;
  category: string;
  followers: string;
  imageUrl: string; // Add imageUrl property for the fixed-size image
}

// Define the prop type for the component
interface AdvertisementCardProps {
  ad: Ad;
}

export default function AdvertisementCard({ ad }: AdvertisementCardProps) {
  const [isLiked, setIsLiked] = useState(false); // Track the like state

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // Toggle like status
  };

  return (
    <Card className="relative bg-black border border-gray-700 cursor-pointer shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:bg-gray-950 hover:shadow-2xl hover:shadow-gray-900/50 hover:border-gray-500">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="border-2 border-gray-600">
              <AvatarImage src={ad.avatar} alt={`${ad.company} avatar`} />
              <AvatarFallback className="bg-gray-700 text-gray-200">
                {ad.company.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <CardTitle className="text-white font-bold">
                {ad.company}
              </CardTitle>
              <p className="text-sm text-gray-400">Posted 2 hours ago</p>
              {/* Follow button */}
            </div>
          </div>
          <Badge
            variant="secondary"
            className="bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 px-3 py-1 rounded-full shadow-lg"
          >
            {ad.category}
          </Badge>
        </div>
        <Button
          variant="ghost"
          className="flex w-max gap-1 px-0 text-gray-400 hover:text-white hover:bg-transparent"
        >
          <UserRoundPlus /> Follow
        </Button>
      </CardHeader>

      <CardContent>
        <p className="text-gray-300 mb-4">{ad.description}</p>

        {/* Budget and Followers section */}
        <div className="flex justify-between mb-2 text-sm text-gray-400">
          <span>Budget: {ad.budget}</span>
          <span>Followers: {ad.followers}</span>
        </div>
        {/* Fixed orientation image using Next.js Image */}
        <div className="flex justify-center">
          <div className="relative w-[32rem] h-[35rem] mb-4 border-2 border-gray-600 rounded-lg">
            <Image
              src={ad.imageUrl}
              alt={`${ad.company} Ad`}
              layout="fill" // Fills the parent container
              objectFit="cover" // Maintains aspect ratio while covering the entire area
              className="rounded-lg"
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex  align-middle">
        <Button
          variant="ghost"
          onClick={handleLikeClick}
          className="text-gray-400 hover:text-white hover:bg-transparent"
        >
          {/* Animated ThumbsUp icon */}
          <motion.div
            whileTap={{ scale: 0.8 }} // Tap effect (contraction)
            animate={{ scale: isLiked ? 1.2 : 1 }} // Expand effect when liked
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <ThumbsUp
              className="w-4 h-4 mr-2"
              stroke={isLiked ? "gray" : "currentColor"} // Change stroke color
              fill="none"
            />
          </motion.div>
          Like
        </Button>

        <Button
          variant="ghost"
          className="text-gray-400 hover:text-white hover:bg-transparent"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Contact
        </Button>

        <Button
          variant="ghost"
          className="text-gray-400 hover:text-white hover:bg-transparent"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
