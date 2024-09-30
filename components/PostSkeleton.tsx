"use client";

import { useSelector } from "react-redux";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function AdDetailSkeleton() {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <Card
      className={`max-w-4xl mx-auto my-8 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } shadow-xl rounded-xl overflow-hidden animate-pulse`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className={`w-12 h-12 rounded-full ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            ></div>
            <div className="space-y-2">
              <div
                className={`h-6 w-32 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } rounded`}
              ></div>
              <div
                className={`h-4 w-24 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } rounded`}
              ></div>
            </div>
          </div>
          <div
            className={`h-6 w-20 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } rounded-full`}
          ></div>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className={`h-4 w-full ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          } rounded mb-4`}
        ></div>
        <div
          className={`h-4 w-5/6 ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          } rounded mb-4`}
        ></div>
        <div
          className={`h-4 w-4/6 ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          } rounded mb-6`}
        ></div>
        <div className="flex justify-between mb-6">
          <div
            className={`h-6 w-32 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } rounded`}
          ></div>
          <div
            className={`h-6 w-24 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } rounded`}
          ></div>
        </div>
        <div
          className={`w-[32rem] h-[36rem] mx-auto ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          } rounded-xl`}
        ></div>
      </CardContent>
      <CardFooter
        className={`flex justify-between py-4 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div className="flex space-x-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`h-10 w-24 ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              } rounded`}
            ></div>
          ))}
        </div>
        <div
          className={`h-10 w-24 ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          } rounded`}
        ></div>
      </CardFooter>
    </Card>
  );
}
