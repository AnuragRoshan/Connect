"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Facebook,
  MapPin,
  DollarSign,
  User,
  Briefcase,
  Edit3,
} from "lucide-react";
import EditProfileModal from "@/components/EditProfileModal";
import { selectIsDarkMode } from "@/redux/slices/themeSlice";
import { useSelector } from "react-redux";

interface SocialMediaStats {
  instagram?: { followers: number; engagement_rate: number };
  youtube?: {
    subscribers: number;
    average_views: number;
  }; // Add `in_video_collaboration_rate` and `shorts_rate` here
  twitter?: { followers: number };
  linkedin?: { followers: number };
  facebook?: { followers: number };
}

interface RateCards {
  instagram?: { story_rate: number; reels_rate: number; post_rate: number };
  youtube?: {
    in_video_collaboration_rate: number;
    shorts_rate: number;
  }; // Include post_rate as optional
  twitter?: { post_rate: number };
  linkedin?: { reels_rate: number; post_rate: number };
  facebook?: { story_rate: number; reels_rate: number; post_rate: number };
}

interface PortfolioItem {
  platform: string;
  content_type: string;
  link: string;
  description: string;
}

interface Deal {
  deal_id: string;
  business_id: string;
  status: string;
  agreed_rate: number;
}

interface Influencer {
  _id: string;
  name: string;
  email: string;
  bio: string;
  about: string;
  location: string;
  category: string[];
  social_media_stats: SocialMediaStats;
  rate_cards: RateCards;
  portfolio?: PortfolioItem[];
  deals?: Deal[];
  profile_image: string;
}

const influencer: Influencer = {
  _id: "123456789",
  name: "Jane Doe",
  email: "jane.doe@example.com",
  bio: "Fitness enthusiast and lifestyle blogger. Inspiring others to live their best lives through health and wellness.",
  about:
    "Fitness enthusiast and lifestyle blogger. I share my fitness journey, recipes, and lifestyle tips with my followers. I love collaborating with brands in the fitness and lifestyle space.",
  location: "Los Angeles, CA",
  category: ["Fitness", "Lifestyle"],
  social_media_stats: {
    instagram: { followers: 500000, engagement_rate: 3.5 },
    youtube: {
      subscribers: 250000,
      average_views: 100000,
    }, // Ensure these match the type
    twitter: { followers: 100000 },
    linkedin: { followers: 50000 },
    facebook: { followers: 200000 },
  },
  rate_cards: {
    instagram: { story_rate: 500, reels_rate: 1000, post_rate: 1500 },
    youtube: {
      in_video_collaboration_rate: 3000,
      shorts_rate: 1000,
    }, // Ensure these match the type
    twitter: { post_rate: 300 },
    linkedin: { reels_rate: 800, post_rate: 500 },
    facebook: { story_rate: 400, reels_rate: 900, post_rate: 1200 },
  },
  portfolio: [
    {
      platform: "Instagram",
      content_type: "Post",
      link: "https://www.instagram.com/p/example1",
      description: "Fitness challenge collaboration with SportsBrand",
    },
    {
      platform: "YouTube",
      content_type: "Video",
      link: "https://www.youtube.com/watch?v=example2",
      description: "Healthy meal prep series sponsored by MealKit",
    },
  ],
  profile_image: "https://i.pravatar.cc/300?img=47",
};

const InfluencerProfile: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDarkMode = useSelector(selectIsDarkMode);

  const displayedText = showMore
    ? influencer.about
    : influencer.about.slice(0, 450);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    // Update the influencer data
  };

  return (
    <div>
      <div
        className={`min-h-screen ${
          isDarkMode ? "text-gray-100" : "text-gray-800"
        } py-8 px-12`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`max-w-6xl mx-auto ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-2xl shadow-2xl overflow-hidden relative`}
        >
          <button
            onClick={handleEditClick}
            className={`absolute top-4 right-4 ${
              isDarkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            <Edit3 />
          </button>

          <div
            className={`${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } p-8 flex flex-col md:flex-row items-center`}
          >
            <div className="relative md:mr-8 mb-4 md:mb-0">
              <img
                className="h-48 w-48 rounded-full object-cover border-4 border-white shadow-lg"
                src={influencer.profile_image}
                alt={influencer.name}
              />
            </div>
            <div className="text-center md:text-left">
              <div className="flex flex-wrap gap-2 mb-2">
                {influencer.category.map((cat, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-600 rounded-full text-sm font-semibold text-white"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl font-bold mb-2"
              >
                {influencer.name}
              </motion.h1>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } mb-4`}
              >
                <MapPin className="inline-block mr-2" size={16} />
                {influencer.location}
              </p>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } max-w-lg`}
              >
                {influencer.bio}
              </p>
            </div>
          </div>

          {/* About Section */}
          <div
            className={`px-8 py-6 ${
              isDarkMode ? "bg-gray-750" : "bg-gray-100"
            }`}
          >
            <h2
              className={`text-2xl font-semibold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              About
            </h2>
            <p
              className={`${
                isDarkMode
                  ? "text-gray-300 bg-gray-700"
                  : "text-gray-600 bg-white"
              } p-4 rounded-md`}
            >
              {displayedText}
              {influencer.about.length > 450 && (
                <>
                  {!showMore && "... "}
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-blue-500 hover:underline focus:outline-none"
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </button>
                </>
              )}
            </p>
          </div>

          {/* Social Media Stats */}
          <div
            className={`px-8 py-6 ${
              isDarkMode ? "bg-gray-750" : "bg-gray-100"
            }`}
          >
            <h2
              className={`text-2xl font-semibold mb-4 flex items-center ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <User className="mr-2 text-purple-400" />
              Social Media Stats
            </h2>
            <div className="flex flex-row flex-wrap gap-4">
              <SocialMediaCard
                platform="Instagram"
                icon={<Instagram className="text-pink-400" />}
                stats={influencer.social_media_stats.instagram || {}}
                isDarkMode={isDarkMode}
              />
              <SocialMediaCard
                platform="YouTube"
                icon={<Youtube className="text-red-500" />}
                stats={influencer.social_media_stats.youtube || {}}
                isDarkMode={isDarkMode}
              />
              <SocialMediaCard
                platform="Twitter"
                icon={<Twitter className="text-blue-400" />}
                stats={influencer.social_media_stats.twitter || {}}
                isDarkMode={isDarkMode}
              />
              <SocialMediaCard
                platform="LinkedIn"
                icon={<Linkedin className="text-blue-600" />}
                stats={influencer.social_media_stats.linkedin || {}}
                isDarkMode={isDarkMode}
              />
              <SocialMediaCard
                platform="Facebook"
                icon={<Facebook className="text-blue-500" />}
                stats={influencer.social_media_stats.facebook || {}}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>

          {/* Rate Cards */}
          <div
            className={`px-8 py-6 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <h2
              className={`text-2xl font-semibold mb-4 flex items-center ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <DollarSign className="mr-2 text-green-400" />
              Rate Cards
            </h2>
            <div className="overflow-x-auto">
              <div className="flex flex-row flex-wrap gap-4 pb-4">
                {Object.entries(influencer.rate_cards).map(
                  ([platform, rates]) => (
                    <RateCard
                      key={platform}
                      platform={platform}
                      rates={rates}
                      isDarkMode={isDarkMode}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Portfolio */}
          {influencer.portfolio && (
            <div
              className={`px-8 py-6 ${
                isDarkMode ? "bg-gray-750" : "bg-gray-100"
              }`}
            >
              <h2
                className={`text-2xl font-semibold mb-4 flex items-center ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                <Briefcase className="mr-2 text-yellow-400" />
                Portfolio
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {influencer.portfolio.map((item, index) => (
                  <PortfolioItem
                    key={index}
                    item={item}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
      {/* Modal for editing the profile */}
      {isModalOpen && (
        <EditProfileModal
          influencer={influencer}
          onClose={closeModal}
          onSave={handleSave}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};

interface SocialMediaCardProps {
  platform: string;
  icon: React.ReactNode;
  stats: {
    followers?: number;
    engagement_rate?: number;
    average_views?: number;
  };
}

const SocialMediaCard: React.FC<
  SocialMediaCardProps & { isDarkMode: boolean }
> = ({ platform, icon, stats, isDarkMode }) => {
  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-700" : "bg-white"
      } p-4 rounded-lg shadow-lg w-[30%]`}
    >
      <div className="flex items-center mb-2">
        {icon}
        <h3
          className={`font-medium ml-2 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {platform}
        </h3>
      </div>
      {stats.followers && (
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <span
            className={`font-medium ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {stats.followers.toLocaleString()}
          </span>{" "}
          followers
        </p>
      )}
      {stats.engagement_rate && (
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <span
            className={`font-medium ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {stats.engagement_rate.toFixed(2)}%
          </span>{" "}
          engagement rate
        </p>
      )}
      {stats.average_views && (
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <span
            className={`font-medium ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {stats.average_views.toLocaleString()}
          </span>{" "}
          average views
        </p>
      )}
    </div>
  );
};

interface RateCardProps {
  platform: string;
  rates: Record<string, number>;
}

const RateCard: React.FC<RateCardProps & { isDarkMode: boolean }> = ({
  platform,
  rates,
  isDarkMode,
}) => (
  <div
    className={`${
      isDarkMode ? "bg-gray-700" : "bg-white"
    } p-4 rounded-lg shadow-lg w-[30%]`}
  >
    <h3
      className={`font-medium mb-2 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      {platform}
    </h3>
    <ul>
      {Object.entries(rates).map(([rateType, rateValue]) => (
        <li
          key={rateType}
          className={`text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <span
            className={`font-medium ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {rateType}:
          </span>{" "}
          ${rateValue.toLocaleString()}
        </li>
      ))}
    </ul>
  </div>
);

interface PortfolioItemProps {
  item: PortfolioItem;
}

// const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => (
//   <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
//     <h4 className="font-medium text-white mb-2">
//       {item.platform} - {item.content_type}
//     </h4>
//     <p className="text-sm text-gray-300 mb-2">{item.description}</p>
//     <a
//       href={item.link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-blue-400 hover:underline"
//     >
//       View Content
//     </a>
//   </div>
// );

const PortfolioItem: React.FC<PortfolioItemProps & { isDarkMode: boolean }> = ({
  item,
  isDarkMode,
}) => (
  <div
    className={`${
      isDarkMode ? "bg-gray-700" : "bg-white"
    } p-4 rounded-lg shadow-lg`}
  >
    <h4
      className={`font-medium mb-2 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      {item.platform} - {item.content_type}
    </h4>
    <p
      className={`text-sm mb-2 ${
        isDarkMode ? "text-gray-300" : "text-gray-600"
      }`}
    >
      {item.description}
    </p>
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      View Content
    </a>
  </div>
);

export default InfluencerProfile;
