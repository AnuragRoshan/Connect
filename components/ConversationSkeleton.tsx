import { useSelector } from "react-redux";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import { motion } from "framer-motion";

export function ConversationListSkeleton() {
  const isDarkMode = useSelector(selectIsDarkMode);

  const skeletonVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div
      className={`h-full overflow-y-auto ${
        isDarkMode ? "bg-gray-800" : "bg-white bg-opacity-50"
      }`}
    >
      <div className="p-4">
        <motion.div
          className={`h-8 w-40 ${
            isDarkMode ? "bg-gray-700" : "bg-sky-200"
          } rounded animate-pulse`}
          variants={skeletonVariants}
          initial="initial"
          animate="animate"
        />
      </div>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="flex items-center p-4"
          variants={skeletonVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: i * 0.1 }}
        >
          <motion.div
            className={`h-12 w-12 rounded-full mr-4 ${
              isDarkMode ? "bg-gray-700" : "bg-sky-200"
            } animate-pulse`}
          />
          <div className="space-y-2">
            <motion.div
              className={`h-4 w-32 ${
                isDarkMode ? "bg-gray-700" : "bg-sky-200"
              } rounded animate-pulse`}
            />
            <motion.div
              className={`h-3 w-24 ${
                isDarkMode ? "bg-gray-700" : "bg-sky-200"
              } rounded animate-pulse`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function MessageDisplaySkeleton() {
  const isDarkMode = useSelector(selectIsDarkMode);

  const skeletonVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div
      className={`h-full flex flex-col ${
        isDarkMode ? "bg-gray-800" : "bg-white bg-opacity-50"
      }`}
    >
      <div
        className={`p-4 border-b ${
          isDarkMode ? "border-gray-700" : "border-sky-200"
        }`}
      >
        <div className="flex items-center">
          <motion.div
            className={`h-10 w-10 rounded-full mr-4 ${
              isDarkMode ? "bg-gray-700" : "bg-sky-200"
            } animate-pulse`}
            variants={skeletonVariants}
            initial="initial"
            animate="animate"
          />
          <motion.div
            className={`h-6 w-40 ${
              isDarkMode ? "bg-gray-700" : "bg-sky-200"
            } rounded animate-pulse`}
            variants={skeletonVariants}
            initial="initial"
            animate="animate"
          />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`flex ${i % 2 === 0 ? "justify-end" : "justify-start"}`}
            variants={skeletonVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: i * 0.1 }}
          >
            {i % 2 !== 0 && (
              <motion.div
                className={`h-8 w-8 rounded-full mr-2 ${
                  isDarkMode ? "bg-gray-700" : "bg-sky-200"
                } animate-pulse`}
              />
            )}
            <div>
              <motion.div
                className={`h-16 w-48 rounded-lg ${
                  isDarkMode ? "bg-gray-700" : "bg-sky-200"
                } animate-pulse`}
              />
              <motion.div
                className={`h-3 w-24 mt-1 ${
                  isDarkMode ? "bg-gray-700" : "bg-sky-200"
                } rounded animate-pulse`}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div
        className={`p-4 border-t ${
          isDarkMode ? "border-gray-700" : "border-sky-200"
        }`}
      >
        <div className="flex items-center">
          <motion.div
            className={`flex-grow h-10 mr-2 ${
              isDarkMode ? "bg-gray-700" : "bg-sky-200"
            } rounded animate-pulse`}
            variants={skeletonVariants}
            initial="initial"
            animate="animate"
          />
          <motion.div
            className={`h-10 w-10 ${
              isDarkMode ? "bg-gray-700" : "bg-sky-200"
            } rounded animate-pulse`}
            variants={skeletonVariants}
            initial="initial"
            animate="animate"
          />
        </div>
      </div>
    </div>
  );
}
