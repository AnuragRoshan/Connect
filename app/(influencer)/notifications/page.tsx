"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import { MessageSquare, ThumbsUp, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import NotificationPageSkeleton from "@/components/NotificationCardSkeleton";

export default function NotificationPage() {
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useSelector(selectIsDarkMode);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  const notifications = [
    {
      id: 1,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Alice Johnson",
      action: "liked your post",
      time: "2 minutes ago",
      unread: true,
      icon: ThumbsUp,
    },
    {
      id: 2,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Bob Smith",
      action: "commented on your photo",
      time: "1 hour ago",
      unread: true,
      icon: MessageSquare,
    },
    {
      id: 3,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Charlie Brown",
      action: "mentioned you in a comment",
      time: "3 hours ago",
      unread: false,
      icon: User,
    },
    {
      id: 4,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Diana Prince",
      action: "sent you a message",
      time: "Yesterday",
      unread: false,
      icon: MessageSquare,
    },
    {
      id: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Ethan Hunt",
      action: "started following you",
      time: "2 days ago",
      unread: false,
      icon: User,
    },
    {
      id: 6,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Fiona Gallagher",
      action: "started following you",
      time: "2 days ago",
      unread: false,
      icon: User,
    },
  ];

  if (isLoading) {
    return <NotificationPageSkeleton />;
  }

  const bgColor = isDarkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = isDarkMode ? "text-gray-100" : "text-gray-900";
  const headingGradient = isDarkMode
    ? "from-gray-200 to-gray-400"
    : "from-gray-700 to-gray-900";
  const buttonVariant = isDarkMode ? "outline" : "secondary";
  const buttonTextColor = isDarkMode ? "text-gray-400" : "text-gray-700";
  const buttonBorderColor = isDarkMode ? "border-gray-700" : "border-gray-300";
  const buttonHoverBg = isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200";
  const cardBgUnread = isDarkMode ? "bg-gray-800" : "bg-white";
  const cardBgRead = isDarkMode ? "bg-black" : "bg-gray-100";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const cardHoverBg = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200";
  const avatarBorder = isDarkMode ? "border-gray-600" : "border-gray-300";
  const nameTextColor = isDarkMode ? "text-gray-200" : "text-gray-800";
  const timeTextColor = isDarkMode ? "text-gray-400" : "text-gray-500";
  const iconButtonTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const iconButtonHoverTextColor = isDarkMode
    ? "hover:text-gray-100"
    : "hover:text-gray-900";
  const iconButtonHoverBg = isDarkMode
    ? "hover:bg-gray-700"
    : "hover:bg-gray-300";

  return (
    <div
      className={`flex h-screen ${textColor} ${bgColor} rounded-xl mx-12 my-8`}
    >
      <main className="flex-1 p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${headingGradient}`}
          >
            Notifications
          </h2>
          <Button
            variant={buttonVariant}
            className={`${buttonTextColor} ${buttonBorderColor} ${buttonHoverBg}`}
          >
            Mark all as read
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card
                key={notification.id}
                className={`${
                  notification.unread ? cardBgUnread : cardBgRead
                } ${cardBorder} cursor-pointer ${cardHoverBg} transition-colors duration-200`}
              >
                <CardContent className="p-4 flex items-center space-x-4">
                  <Avatar className={`w-12 h-12 border-2 ${avatarBorder}`}>
                    <AvatarImage src={notification.avatar} />
                    <AvatarFallback>
                      {notification.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${nameTextColor}`}>
                      <span className="font-semibold">{notification.name}</span>{" "}
                      {notification.action}
                    </p>
                    <p className={`text-xs ${timeTextColor}`}>
                      {notification.time}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`${iconButtonTextColor} ${iconButtonHoverTextColor} ${iconButtonHoverBg}`}
                  >
                    <notification.icon className="w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
