"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import NotificationPage from "@/app/(influencer)/notifications/page";

const NotificationCardSkeleton = () => (
  <Card className="bg-gray-800 border-gray-700">
    <CardContent className="p-4 flex items-center space-x-4">
      <div className="w-12 h-12 rounded-full bg-gray-700 animate-pulse" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-700 rounded animate-pulse" />
        <div className="h-3 bg-gray-700 rounded w-3/4 animate-pulse" />
      </div>
      <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse" />
    </CardContent>
  </Card>
);

export default function NotificationPageSkeleton() {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="flex h-screen text-gray-100 bg-gray-700 rounded-xl mx-12 my-8">
      <main className="flex-1 p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <motion.div
            className="h-8 w-40 bg-gray-800 rounded animate-pulse"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <Button
            variant="outline"
            className="text-gray-400 border-gray-700 hover:bg-gray-800"
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
              <NotificationCardSkeleton key={index} />
            ))}
          </motion.div>
        </ScrollArea>
      </main>
    </div>
  );
}
