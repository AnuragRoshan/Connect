"use client";

import { useSelector } from "react-redux";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import MainContent from "@/components/HomeMainContent";
import RightSidebar from "@/components/RightSidebar";
import ads from "@/constants/ads";

export default function Component() {
  const isDarkMode = useSelector(selectIsDarkMode);

  // const bgColor = isDarkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = isDarkMode ? "text-gray-100" : "text-gray-900";

  return (
    <div
      className={`flex w-[90%] ${textColor}  px-6 py-4 min-h-screen mx-auto`}
    >
      {/* Main content: 70% width on larger screens, full width on small screens */}
      <div className="w-full lg:w-[70%]">
        <MainContent ads={ads} isDarkMode={isDarkMode} />
      </div>
      {/* Sidebar: 30% width on larger screens, hidden on small screens */}
      <div className="hidden lg:block w-[30%]">
        <RightSidebar isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
