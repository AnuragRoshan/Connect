"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-full max-w-lg mx-auto my-6 z-10 flex items-center">
      {/* Logo placed on the left */}
      <div className="">
        <Image
          src={
            "https://images.ctfassets.net/xz1dnu24egyd/7t8wRWcEslsDvgHoLE9K4T/faed1fce309bd59862467551cb72450a/gitlab-logo-200.png"
          }
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="relative flex-1">
        <Input
          type="text"
          placeholder="Search for something amazing..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-14 pr-4 py-4 text-base border-transparent rounded-md bg-gray-900 text-white placeholder-gray-400 shadow-md hover:bg-gray-800"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </div>
      </form>
    </div>
  );
}
