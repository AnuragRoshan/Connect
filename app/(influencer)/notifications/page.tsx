"use client";
import { MessageSquare, ThumbsUp, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "@/components/Sidebar";
import SvgPattern from "@/components/SvgPattern";

export default function NotificationPage() {
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
      id: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Ethan Hunt",
      action: "started following you",
      time: "2 days ago",
      unread: false,
      icon: User,
    },
  ];

  return (
    <div className="flex h-screen bg-black text-gray-100">
      <SvgPattern />
      {/* Main content area */}
      <main className="flex-1 p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            Notifications
          </h2>
          <Button
            variant="outline"
            className="text-gray-400 border-gray-700 hover:bg-gray-800"
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
                  notification.unread ? "bg-gray-800" : "bg-black"
                } border-gray-700 cursor-pointer hover:bg-gray-800 transition-colors duration-200`}
              >
                <CardContent className="p-4 flex items-center space-x-4">
                  <Avatar className="w-12 h-12 border-2 border-gray-600">
                    <AvatarImage src={notification.avatar} />
                    <AvatarFallback>
                      {notification.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-200">
                      <span className="font-semibold">{notification.name}</span>{" "}
                      {notification.action}
                    </p>
                    <p className="text-xs text-gray-400">{notification.time}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-gray-100 hover:bg-gray-700"
                  >
                    <notification.icon className="w-5 h-5" />
                  </Button>
                  {notification.unread && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-2 right-2" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
