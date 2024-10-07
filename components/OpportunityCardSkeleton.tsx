import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface OpportunityCardSkeletonProps {
  isDarkMode: boolean;
}

export default function OpportunityCardSkeleton({
  isDarkMode,
}: OpportunityCardSkeletonProps) {
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const skeletonBg = isDarkMode ? "bg-gray-700" : "bg-gray-300";
  const separatorColor = isDarkMode ? "bg-gray-700" : "bg-gray-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`w-[360px] h-[440px]  ${cardBg} ${cardBorder} overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col`}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center space-x-4">
            <div
              className={`w-12 h-12 rounded-full ${skeletonBg} animate-pulse`}
            ></div>
            <div>
              <div
                className={`h-4 w-24 ${skeletonBg} rounded animate-pulse mb-1`}
              ></div>
              <div
                className={`h-3 w-16 ${skeletonBg} rounded animate-pulse`}
              ></div>
            </div>
          </div>
        </CardHeader>
        <Separator className={separatorColor} />
        <CardContent className="pt-4 flex-grow">
          <div
            className={`h-4 w-3/4 ${skeletonBg} rounded animate-pulse mb-2`}
          ></div>
          <div
            className={`h-3 w-full ${skeletonBg} rounded animate-pulse mb-4`}
          ></div>
          <div className="flex flex-wrap gap-2 mb-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={`h-6 w-16 ${skeletonBg} rounded animate-pulse`}
              ></div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={`h-4 w-full ${skeletonBg} rounded animate-pulse`}
              ></div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <div
            className={`h-10 w-full ${skeletonBg} rounded animate-pulse`}
          ></div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
