import { useSelector } from "react-redux";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Conversation, User, Message } from "@/constants/messageData";
import { motion } from "framer-motion";

interface ConversationListProps {
  conversations: Conversation[];
  users: User[];
  messages?: Message[]; // Make messages optional
  onSelectConversation: (conversation: Conversation) => void;
  selectedConversationId: string | undefined;
}

export default function ConversationList({
  conversations,
  users,
  messages,
  onSelectConversation,
  selectedConversationId,
}: ConversationListProps) {
  const isDarkMode = useSelector(selectIsDarkMode);

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const formatMessageTime = (date: Date) => {
    const now = new Date();
    const diffHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffHours < 24) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (diffHours < 48) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString([], { month: "short", day: "numeric" });
    }
  };

  return (
    <motion.div
      className={`h-full overflow-y-auto ${
        isDarkMode ? "bg-gray-800" : "bg-white bg-opacity-50"
      }`}
      variants={listVariants}
      initial="hidden"
      animate="show"
    >
      <h2
        className={`text-2xl font-bold p-6 border-b-[0.07rem] border-gray-500 ${
          isDarkMode ? "text-white" : "text-purple-600"
        }`}
      >
        Conversations
      </h2>
      {conversations.map((conversation) => {
        const otherParticipant = users.find(
          (user) =>
            user._id === conversation.participants.find((id) => id !== "1")
        );

        const lastMessage =
          messages && messages.length > 0
            ? messages
                .filter((m) => m.conversationId === conversation._id)
                .sort((a, b) => b.sentAt.getTime() - a.sentAt.getTime())[0]
            : null;

        const isUnread = lastMessage && !lastMessage.readStatus;

        return (
          <motion.div
            key={conversation._id}
            variants={itemVariants}
            className={`flex items-center p-4 cursor-pointer m-2 rounded-md transition-colors duration-200 ${
              selectedConversationId === conversation._id
                ? isDarkMode
                  ? "bg-gray-700"
                  : "bg-sky-200"
                : isDarkMode
                ? "hover:bg-gray-700"
                : "hover:bg-sky-100"
            }`}
            onClick={() => onSelectConversation(conversation)}
          >
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage
                src={otherParticipant?.avatar}
                alt={otherParticipant?.name}
              />
              <AvatarFallback className="bg-purple-600 text-white">
                {otherParticipant?.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-grow overflow-hidden">
              <div className="flex justify-between items-center">
                <h3
                  className={`font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {otherParticipant?.name}
                </h3>
                <span
                  className={`text-xs ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {lastMessage
                    ? formatMessageTime(lastMessage.sentAt)
                    : formatMessageTime(conversation.updatedAt)}
                </span>
              </div>
              <div className="flex items-center mt-1">
                <p
                  className={`text-sm truncate max-w-[200px] ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } ${isUnread ? "font-semibold" : ""}`}
                >
                  {lastMessage ? lastMessage.text : conversation.lastMessage}
                </p>
                {isUnread && (
                  <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
