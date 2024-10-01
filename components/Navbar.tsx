"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  startTopLoading,
  stopTopLoading,
  selectTopLoaderStatus,
} from "@/redux/slices/Loader/topLoaderSlice";
import { toggleTheme, selectIsDarkMode } from "@/redux/slices/themeSlice";
import {
  LogOut,
  Home,
  User,
  Bell,
  Search,
  Settings,
  // CirclePlus,
  Menu,
  X,
  BriefcaseBusiness,
  Sun,
  Moon,
  FolderSymlink,
  MessageSquare,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

export default function CombinedSearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const isTopLoading = useSelector(selectTopLoaderStatus);
  const isDarkMode = useSelector(selectIsDarkMode);

  const menuItems = [
    { icon: Home, label: "Home", route: "/home" },
    { icon: User, label: "Profile", route: "/profile" },
    { icon: BriefcaseBusiness, label: "Opportunities", route: "/apply" },
    { icon: FolderSymlink, label: "Deals", route: "/deals" },
    { icon: MessageSquare, label: "Messages", route: "/chats" },
    {
      icon: Bell,
      label: "Notifications",
      route: "/notifications",
      hasNewNotifications: true,
    },
    { icon: Settings, label: "Settings", route: "/settings" },
  ];

  const navigateTo = (path: string) => {
    dispatch(startTopLoading());
    console.log("Is loading before navigation:", isTopLoading);

    setTimeout(() => {
      router.push(path);
      dispatch(stopTopLoading());
      console.log("Is loading after navigation:", isTopLoading);
    }, 3000);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={`w-full shadow-md p-4 sticky top-0 z-50 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between text-black">
          {/* Logo */}
          <div className="flex items-center">
            <div className="mr-4 flex-shrink-0">
              <Image
                src="https://lucide.dev/logo.dark.svg"
                alt="logo"
                width={35}
                height={35}
              />
            </div>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-lg mr-64">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search creators, businesses, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 text-sm border rounded-md ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-200 border-gray-700 focus:ring-blue-500 focus:border-purple-500 placeholder-gray-500"
                    : "bg-gray-100 text-gray-800 border-gray-300 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400"
                } focus:outline-none focus:ring-2`}
              />
              <div
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <Search className="h-4 w-4" />
              </div>
            </div>
          </form>

          {/* Hamburger Menu for small screens */}
          <div className="sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                isDarkMode
                  ? "text-gray-400 hover:text-purple-500 hover:bg-gray-800"
                  : "text-gray-600 hover:text-blue-500 hover:bg-gray-100"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Navigation Menu for larger screens */}
          <nav className="hidden sm:flex sm:items-center sm:space-x-2">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => navigateTo(item.route)}
                className={`relative ${
                  pathname === item.route
                    ? isDarkMode
                      ? "bg-gray-800 text-gray-100"
                      : "bg-gray-200 text-gray-800"
                    : isDarkMode
                    ? "text-gray-400 hover:text-purple-500 hover:bg-gray-800"
                    : "text-gray-600 hover:text-blue-500 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.label}</span>
                {item.hasNewNotifications && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </Button>
            ))}
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleThemeToggle}
              className={`mr-2 ${
                isDarkMode
                  ? "text-gray-400 hover:text-purple-500"
                  : "text-gray-600 hover:text-blue-500"
              } hover:bg-transparent`}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-blue-600 " />
              )}
            </Button>
            <DropdownMenu>
              <DropdownMenuContent
                align="end"
                className={
                  isDarkMode
                    ? "bg-gray-800 text-gray-200 border-gray-700"
                    : "bg-white text-gray-800 border-gray-200"
                }
              >
                <DropdownMenuItem
                  onClick={() => navigateTo("/profile")}
                  className={
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }
                >
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigateTo("/settings")}
                  className={
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }
                >
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigateTo("/logout")}
                  className={
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden mt-4"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigateTo(item.route);
                    }}
                    className={`relative w-full text-left mb-2 ${
                      pathname === item.route
                        ? isDarkMode
                          ? "bg-gray-800 text-gray-100"
                          : "bg-gray-200 text-gray-800"
                        : isDarkMode
                        ? "text-gray-400 hover:text-purple-500 hover:bg-gray-800"
                        : "text-gray-600 hover:text-blue-500 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-2" />
                    {item.label}
                    {item.hasNewNotifications && (
                      <div className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </Button>
                </motion.div>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigateTo("/logout");
                }}
                className={`w-full text-left ${
                  isDarkMode
                    ? "text-gray-400 hover:text-purple-500 hover:bg-gray-800"
                    : "text-gray-600 hover:text-blue-500 hover:bg-gray-100"
                }`}
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </Button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
