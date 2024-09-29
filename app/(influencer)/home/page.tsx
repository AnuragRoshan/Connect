"use client";

import { useSelector } from "react-redux";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import MainContent from "@/components/HomeMainContent";
import RightSidebar from "@/components/RightSidebar";

const ads = [
  {
    id: 1,
    company: "EcoStyle",
    avatar: "/placeholder.svg?height=40&width=40",
    description:
      "Seeking influencers passionate about sustainable fashion to promote our new eco-friendly clothing line. akjfaiofi aifjaoi jfioa jio fia sfio hasiof ioa hfia hsif haoh foaha fio haio fh aij do fia hfio haiofiao hfha ofiah fiah ifo haif hia hfoiah foa hiof hoif hioa hfiha ifhiahfiahfahsf haisofhai shfiohah ia hfi hai fia fi hasif hi shfi hi",
    budget: "$1000-$2000",
    category: "Fashion",
    followers: "10k+",
    imageUrl:
      "https://images.unsplash.com/photo-1523568129082-a8d6c095638e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2hpdGUlMjB0cmF2ZWx8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 2,
    company: "TechNova",
    avatar: "/placeholder.svg?height=40&width=40",
    description:
      "Looking for tech enthusiasts to review and showcase our latest smart home devices.",
    budget: "$1500-$3000",
    category: "Technology",
    followers: "50k+",
    imageUrl:
      "https://images.unsplash.com/photo-1500627964684-141351970a7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2hpdGUlMjB0cmF2ZWx8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 3,
    company: "FitLife",
    avatar: "/placeholder.svg?height=40&width=40",
    description:
      "Fitness influencers needed to promote our new line of workout supplements and equipment.",
    budget: "$800-$1500",
    category: "Health & Fitness",
    followers: "25k+",
    imageUrl:
      "https://images.unsplash.com/photo-1564163042405-c9442d2ace81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjB0cmF2ZWx8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 4,
    company: "GourmetEats",
    avatar: "/placeholder.svg?height=40&width=40",
    description:
      "Seeking food bloggers and culinary enthusiasts to create content featuring our gourmet meal kits.",
    budget: "$1200-$2500",
    category: "Food & Cooking",
    followers: "15k+",
    imageUrl:
      "https://images.unsplash.com/photo-1498081959737-f3ba1af08103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3JmdWwlMjB0cmF2ZWx8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 5,
    company: "TravelDreams",
    avatar: "/placeholder.svg?height=40&width=40",
    description:
      "Travel influencers wanted to showcase our luxury resort destinations and travel packages.",
    budget: "$2000-$4000",
    category: "Travel",
    followers: "75k+",
    imageUrl:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbG9yZnVsJTIwdHJhdmVsfGVufDB8fDB8fHwy",
  },
];

export default function Component() {
  const isDarkMode = useSelector(selectIsDarkMode);

  const bgColor = isDarkMode ? "bg-gray-900" : "bg-gray-100";
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
