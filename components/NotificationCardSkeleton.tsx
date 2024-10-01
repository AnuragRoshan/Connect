"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import NotificationPage from "@/app/(influencer)/notifications/page";

const NotificationCardSkeleton = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <Card
    className={
      isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"
    }
  >
    <CardContent className="p-4 flex items-center space-x-4">
      <div
        className={`w-12 h-12 rounded-full ${
          isDarkMode ? "bg-gray-700" : "bg-gray-200"
        } animate-pulse`}
      />
      <div className="flex-1 space-y-2">
        <div
          className={`h-4 ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          } rounded animate-pulse`}
        />
        <div
          className={`h-3 ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          } rounded w-3/4 animate-pulse`}
        />
      </div>
      <div
        className={`w-8 h-8 rounded-full ${
          isDarkMode ? "bg-gray-700" : "bg-gray-200"
        } animate-pulse`}
      />
    </CardContent>
  </Card>
);

export default function NotificationPageSkeleton() {
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useSelector(selectIsDarkMode);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return <NotificationPage />;
  }

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "text-gray-100 bg-gray-900" : "text-gray-900 bg-gray-50"
      } rounded-xl mx-12 my-8`}
    >
      <main className="flex-1 p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <motion.div
            className={`h-8 w-40 ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            } rounded animate-pulse`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <Button
            variant="outline"
            className={`${
              isDarkMode
                ? "text-gray-400 border-gray-700 hover:bg-gray-800"
                : "text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
            disabled
          >
            Mark all as read
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-120px)]">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(6)].map((_, index) => (
              <NotificationCardSkeleton key={index} isDarkMode={isDarkMode} />
            ))}
          </motion.div>
        </ScrollArea>
      </main>
    </div>
  );
}
