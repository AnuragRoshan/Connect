"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import ConversationList from "@/components/ConversationList";
import MessageDisplay from "@/components/MessageDisplay";
import {
  ConversationListSkeleton,
  MessageDisplaySkeleton,
} from "@/components/ConversationSkeleton";
import { conversations, messages, users } from "@/constants/messageData";
import { Conversation } from "@/constants/messageData";
import { motion, AnimatePresence } from "framer-motion";

export default function MessagingPage() {
  const isDarkMode = useSelector(selectIsDarkMode);
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isDarkMode ? "dark" : "light"}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className={`flex h-screen mx-12 my-8 rounded-lg overflow-hidden shadow-2xl ${
          isDarkMode
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-br from-sky-100 to-purple-100 text-gray-900"
        }`}
      >
        <div className="w-1/3 border-r border-gray-300 dark:border-gray-700">
          {isLoading ? (
            <ConversationListSkeleton />
          ) : (
            <ConversationList
              conversations={conversations}
              users={users}
              onSelectConversation={setSelectedConversation}
              selectedConversationId={selectedConversation?._id}
            />
          )}
        </div>
        <div className="w-2/3">
          {isLoading ? (
            <MessageDisplaySkeleton />
          ) : (
            <MessageDisplay
              conversation={selectedConversation}
              messages={messages.filter(
                (m) => m.conversationId === selectedConversation?._id
              )}
              users={users}
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
