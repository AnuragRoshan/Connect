import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";

const DealCardSkeleton = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <div
    className={`${
      isDarkMode ? "bg-gray-800" : "bg-white"
    } rounded-lg overflow-hidden shadow-lg animate-pulse`}
  >
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div
            className={`w-12 h-12 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } rounded-full`}
          ></div>
          <div>
            <div
              className={`h-5 ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              } rounded w-40`}
            ></div>
            <div
              className={`h-4 ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              } rounded w-24 mt-2`}
            ></div>
          </div>
          <div
            className={`h-8 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } rounded w-20`}
          ></div>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className={`h-6 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } rounded w-16`}
          ></div>
          <div
            className={`h-6 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } rounded w-16`}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

export const DealSectionSkeleton = () => {
  const isDarkMode = useSelector(selectIsDarkMode); // Get dark mode status from Redux

  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`h-8 ${
          isDarkMode ? "bg-gray-700" : "bg-gray-200"
        } rounded w-48 mb-6`}
      ></div>
      <div className="space-y-6">
        {[...Array(3)].map((_, index) => (
          <DealCardSkeleton key={index} isDarkMode={isDarkMode} />
        ))}
      </div>
    </motion.div>
  );
};
