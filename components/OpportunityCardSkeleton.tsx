import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface OpportunityCardSkeletonProps {
  isDarkMode: boolean;
}

export default function OpportunityCardSkeleton({
  isDarkMode,
}: OpportunityCardSkeletonProps) {
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const skeletonBg = isDarkMode ? "bg-gray-700" : "bg-gray-300";

  return (
    <Card className={`${cardBg} ${cardBorder} overflow-hidden`}>
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <div
            className={`w-10 h-10 rounded-full ${skeletonBg} animate-pulse`}
          ></div>
          <div className="space-y-2">
            <div
              className={`h-4 w-3/4 ${skeletonBg} rounded animate-pulse`}
            ></div>
            <div
              className={`h-3 w-1/2 ${skeletonBg} rounded animate-pulse`}
            ></div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className={`h-4 w-full ${skeletonBg} rounded animate-pulse mb-4`}
        ></div>
        <div
          className={`h-4 w-3/4 ${skeletonBg} rounded animate-pulse mb-4`}
        ></div>
        <div className="flex flex-wrap gap-2 mb-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`h-6 w-16 ${skeletonBg} rounded animate-pulse`}
            ></div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`h-4 w-full ${skeletonBg} rounded animate-pulse`}
            ></div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div
          className={`h-10 w-full ${skeletonBg} rounded animate-pulse`}
        ></div>
      </CardFooter>
    </Card>
  );
}
