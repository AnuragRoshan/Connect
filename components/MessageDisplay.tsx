import { useSelector } from "react-redux";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Conversation, Message, User } from "@/constants/messageData";
import { motion, AnimatePresence } from "framer-motion";

interface MessageDisplayProps {
  conversation: Conversation | null;
  messages: Message[];
  users: User[];
}

export default function MessageDisplay({
  conversation,
  messages,
  users,
}: MessageDisplayProps) {
  const isDarkMode = useSelector(selectIsDarkMode);

  if (!conversation) {
    return (
      <div
        className={`h-full flex items-center justify-center ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white"
            : "bg-gradient-to-r from-sky-100 via-purple-100 to-pink-100 text-gray-800"
        }`}
      >
        <div className="p-6 text-center rounded">
          <p className="text-2xl font-semibold mb-4">
            Select a conversation to start messaging
          </p>
          <p className="text-sm opacity-80">
            Choose a conversation from the list to view messages and chat!
          </p>
        </div>
      </div>
    );
  }

  const otherParticipant = users.find(
    (user) => user._id === conversation.participants.find((id) => id !== "1")
  );

  const messageVariants = {
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={`h-full flex flex-col ${
        isDarkMode
          ? "bg-gray-800 text-white"
          : "bg-white bg-opacity-50 text-gray-800"
      }`}
    >
      <div
        className={`p-4 border-b ${
          isDarkMode ? "border-gray-700" : "border-sky-200"
        }`}
      >
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage
              src={otherParticipant?.avatar}
              alt={otherParticipant?.name}
            />
            <AvatarFallback className="bg-purple-600 text-white">
              {otherParticipant?.name.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold">{otherParticipant?.name}</h2>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        <AnimatePresence initial={false}>
          {messages.map((message) => {
            const sender = users.find((user) => user._id === message.sender);
            const isOwnMessage = message.sender === "1";
            return (
              <motion.div
                key={message._id}
                className={`flex mb-4 ${
                  isOwnMessage ? "justify-end" : "justify-start"
                }`}
                variants={messageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "spring", stiffness: 100 }}
              >
                {!isOwnMessage && (
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={sender?.avatar} alt={sender?.name} />
                    <AvatarFallback className="bg-purple-600 text-white">
                      {sender?.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`p-3 rounded-lg w-3/5 ${
                    isOwnMessage
                      ? isDarkMode
                        ? "bg-purple-600 text-white"
                        : "bg-sky-400 text-white"
                      : isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-sky-200 text-gray-800"
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {message.sentAt.toLocaleString()}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div
        className={`p-4 border-t ${
          isDarkMode ? "border-gray-700" : "border-sky-200"
        }`}
      >
        <form className="flex items-center">
          <Input
            type="text"
            placeholder="Type a message..."
            className={`flex-grow mr-2 ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-white text-gray-800 border-sky-300"
            }`}
          />
          <Button
            type="submit"
            size="icon"
            className={isDarkMode ? "bg-purple-600" : "bg-sky-400"}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
