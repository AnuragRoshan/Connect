"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSelector, useDispatch } from "react-redux";
import {
  startTopLoading,
  stopTopLoading,
  selectTopLoaderStatus,
} from "@/redux/slices/Loader/topLoaderSlice";
import {
  LogOut,
  Home,
  MessageSquare,
  User,
  Bell,
  Search,
  Settings,
  Menu,
  CirclePlus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ResponsiveLayout() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const isTopLoading = useSelector(selectTopLoaderStatus);

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  const menuItems = [
    { icon: Home, label: "Home", route: "/home" },
    { icon: MessageSquare, label: "Messages", route: "/messages" },
    { icon: User, label: "Profile", route: "/profile" },
    { icon: CirclePlus, label: "New Post", route: "/create" },
    {
      icon: Bell,
      label: "Notifications",
      route: "/notifications",
      hasNewNotifications: true,
    },
    { icon: Search, label: "Explore", route: "/explore" },
    { icon: Settings, label: "Settings", route: "/settings" },
  ];

  const navigateTo = (path: string) => {
    dispatch(startTopLoading());
    console.log("Is loading before navigation:", isTopLoading);

    setTimeout(() => {
      router.push(path);
      dispatch(stopTopLoading());
      console.log("Is loading after navigation:", isTopLoading);
    }, 2000);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        initial={{ width: "4rem" }}
        animate={{ width: isMenuExpanded ? "15rem" : "4rem" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="z-20 bg-gradient-to-b from-gray-900 to-gray-950 border-r border-gray-800 overflow-hidden"
      >
        <div className="p-4 flex items-center">
          <Button size="icon" onClick={toggleMenu} className="mr-2">
            <Menu className="h-6 w-6" />
          </Button>
          <AnimatePresence>
            {isMenuExpanded && (
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400"
              >
                InfluConnect
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => navigateTo(item.route)}
              className={`relative flex items-center w-full px-4 py-2 mt-2 text-gray-300 transition-colors duration-200 ease-in-out ${
                pathname === item.route
                  ? "bg-gradient-to-r from-gray-700 to-gray-800 border-l-4 border-gray-300"
                  : "hover:bg-gray-800"
              }`}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative flex items-center">
                <item.icon className="w-5 h-5" />
                {item.hasNewNotifications && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-gray-800"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                )}
              </div>
              <AnimatePresence>
                {isMenuExpanded && (
                  <motion.span
                    className="ml-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </nav>
        <motion.div
          className="absolute bottom-0 p-4"
          initial={{ width: "3rem" }}
          animate={{ width: isMenuExpanded ? "14rem" : "3rem" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Button
            variant="outline"
            onClick={() => navigateTo("/logout")}
            className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white border-gray-600"
          >
            <LogOut className="w-4 h-4" />
            <AnimatePresence>
              {isMenuExpanded && (
                <motion.span
                  className="ml-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Search Bar */}
        <div className="bg-white shadow-md p-4">
          <div className="flex items-center max-w-4xl mx-auto">
            <div className="mr-4 flex-shrink-0">
              <Image
                src="https://images.ctfassets.net/xz1dnu24egyd/7t8wRWcEslsDvgHoLE9K4T/faed1fce309bd59862467551cb72450a/gitlab-logo-200.png"
                alt="logo"
                width={50}
                height={50}
              />
            </div>
            <form onSubmit={handleSearch} className="relative flex-1">
              <Input
                type="text"
                placeholder="Search for something amazing..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="h-4 w-4" />
              </div>
            </form>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {/* Your page content goes here */}
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome to InfluConnect
          </h1>
          <p className="mt-2 text-gray-600">
            This is where your main content will be displayed.
          </p>
        </main>
      </div>
    </div>
  );
}
