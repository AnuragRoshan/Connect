"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import {
  startTopLoading,
  stopTopLoading,
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
import { selectTopLoaderStatus } from "@/redux/slices/Loader/topLoaderSlice";

export default function Sidebar() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
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
    dispatch(startTopLoading()); // Start loading
    console.log("Is loading before navigation:", isTopLoading);

    setTimeout(() => {
      router.push(path);
      dispatch(stopTopLoading()); // Stop loading
      console.log("Is loading after navigation:", isTopLoading);
    }, 2000);
  };

  return (
    <aside
      className={`${
        isMenuExpanded ? "w-60" : "w-16"
      } z-10 bg-gradient-to-b from-gray-900 opacity-80 to-gray-950 border-r border-gray-800 transition-all duration-400 ease-in-out`}
    >
      <div className="p-4 flex items-center">
        <Button size="icon" onClick={toggleMenu} className="mr-2">
          <Menu className="h-6 w-6" />
        </Button>
        {isMenuExpanded && (
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            InfluConnect
          </h1>
        )}
      </div>
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigateTo(item.route)}
            className={`relative flex items-center w-full px-4 py-2 mt-2 text-gray-300 transition-colors duration-200 ease-in-out ${
              pathname === item.route
                ? "bg-gradient-to-r from-gray-700 to-gray-800 border-l-4 border-gray-300"
                : "hover:bg-gray-800"
            }`}
          >
            <div className="relative flex items-center transition-transform duration-300 hover:translate-x-1">
              <item.icon className="w-5 h-5" />
              {item.hasNewNotifications && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-gray-800"></div>
              )}
            </div>
            {isMenuExpanded && <span className="ml-3">{item.label}</span>}
          </button>
        ))}
      </nav>
      <div className={`absolute bottom-0 p-4`}>
        <Button
          variant="outline"
          onClick={() => navigateTo("/logout")}
          className={`w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white border-gray-600 ${
            !isMenuExpanded && "p-2"
          }`}
        >
          <LogOut className="w-4 h-4" />
          {isMenuExpanded && <span className="ml-2">Logout</span>}
        </Button>
      </div>
    </aside>
  );
}
