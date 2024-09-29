"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Plus } from "lucide-react";

interface SocialMediaStats {
  instagram?: { followers: number; engagement_rate: number };
  youtube?: { subscribers: number; average_views: number };
  twitter?: { followers: number };
  linkedin?: { followers: number };
  facebook?: { followers: number };
}

interface RateCards {
  instagram?: { story_rate: number; reels_rate: number; post_rate: number };
  youtube?: {
    in_video_collaboration_rate: number;
    shorts_rate: number;
  };
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
}

interface EditProfileModalProps {
  influencer: Influencer;
  onClose: () => void;
  onSave: (updatedInfluencer: Influencer) => void;
  isDarkMode: boolean;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  influencer,
  onClose,
  onSave,
  isDarkMode,
}) => {
  const [editedInfluencer, setEditedInfluencer] =
    useState<Influencer>(influencer);

  const handleInputChange = (
    field: string,
    value: string | number | string[]
  ) => {
    setEditedInfluencer((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialMediaStatsChange = (
    platform: string,
    field: string,
    value: number
  ) => {
    setEditedInfluencer((prev) => ({
      ...prev,
      social_media_stats: {
        ...prev.social_media_stats,
        [platform]: {
          ...prev.social_media_stats[platform as keyof SocialMediaStats],
          [field]: value,
        },
      },
    }));
  };

  const handleRateCardChange = (
    platform: string,
    field: string,
    value: number
  ) => {
    setEditedInfluencer((prev) => ({
      ...prev,
      rate_cards: {
        ...prev.rate_cards,
        [platform]: {
          ...prev.rate_cards[platform as keyof RateCards],
          [field]: value,
        },
      },
    }));
  };

  const handlePortfolioChange = (
    index: number,
    field: string,
    value: string
  ) => {
    setEditedInfluencer((prev) => ({
      ...prev,
      portfolio: prev.portfolio?.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleAddPortfolioItem = () => {
    setEditedInfluencer((prev) => ({
      ...prev,
      portfolio: [
        ...(prev.portfolio || []),
        { platform: "", content_type: "", link: "", description: "" },
      ],
    }));
  };

  const handleRemovePortfolioItem = (index: number) => {
    setEditedInfluencer((prev) => ({
      ...prev,
      portfolio: prev.portfolio?.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedInfluencer);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
      >
        <div
          className={`sticky top-0 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } p-4 flex justify-between items-center border-b ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h2
            className={`text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Edit Profile
          </h2>
          <button
            onClick={onClose}
            className={`${
              isDarkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-1 ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={editedInfluencer.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  isDarkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-1 ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={editedInfluencer.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  isDarkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="bio"
              className={`block text-sm font-medium mb-1 ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Bio
            </label>
            <textarea
              id="bio"
              value={editedInfluencer.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
              rows={3}
              className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                isDarkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="about"
              className={`block text-sm font-medium mb-1 ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              About
            </label>
            <textarea
              id="about"
              value={editedInfluencer.about}
              onChange={(e) => handleInputChange("about", e.target.value)}
              rows={5}
              className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                isDarkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className={`block text-sm font-medium mb-1 ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              value={editedInfluencer.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                isDarkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className={`block text-sm font-medium mb-1 ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Categories
            </label>
            <input
              type="text"
              id="category"
              value={editedInfluencer.category.join(", ")}
              onChange={(e) =>
                handleInputChange(
                  "category",
                  e.target.value.split(",").map((cat) => cat.trim())
                )
              }
              className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                isDarkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
              placeholder="Enter categories separated by commas"
            />
          </div>
          <div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Social Media Stats
            </h3>
            {Object.entries(editedInfluencer.social_media_stats).map(
              ([platform, stats]) => (
                <div key={platform} className="mb-4">
                  <h4
                    className={`text-md font-medium mb-2 capitalize ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {platform}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(stats).map(([stat]) => (
                      <div key={stat}>
                        <label
                          htmlFor={`${platform}-${stat}`}
                          className={`block text-sm font-medium mb-1 capitalize ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {stat.replace("_", " ")}
                        </label>
                        <input
                          type="number"
                          id={`${platform}-${stat}`}
                          value={"value"}
                          onChange={(e) =>
                            handleSocialMediaStatsChange(
                              platform,
                              stat,
                              Number(e.target.value)
                            )
                          }
                          className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                            isDarkMode
                              ? "bg-gray-700 text-white"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
          <div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Rate Cards
            </h3>
            {Object.entries(editedInfluencer.rate_cards).map(
              ([platform, rates]) => (
                <div key={platform} className="mb-4">
                  <h4
                    className={`text-md font-medium mb-2 capitalize ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {platform}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(rates).map(([rate]) => (
                      <div key={rate}>
                        <label
                          htmlFor={`${platform}-${rate}`}
                          className={`block text-sm font-medium mb-1 capitalize ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {rate.replace("_", " ")}
                        </label>
                        <input
                          type="number"
                          id={`${platform}-${rate}`}
                          value={"value"}
                          onChange={(e) =>
                            handleRateCardChange(
                              platform,
                              rate,
                              Number(e.target.value)
                            )
                          }
                          className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                            isDarkMode
                              ? "bg-gray-700 text-white"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
          <div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Portfolio
            </h3>
            {editedInfluencer.portfolio?.map((item, index) => (
              <div
                key={index}
                className={`mb-4 p-4 rounded-lg relative ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleRemovePortfolioItem(index)}
                  className={`absolute top-2 right-2 ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  <X size={20} />
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor={`portfolio-${index}-platform`}
                      className={`block text-sm font-medium mb-1 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Platform
                    </label>
                    <input
                      type="text"
                      id={`portfolio-${index}-platform`}
                      value={item.platform}
                      onChange={(e) =>
                        handlePortfolioChange(index, "platform", e.target.value)
                      }
                      className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        isDarkMode
                          ? "bg-gray-600 text-white"
                          : "bg-white text-gray-800"
                      }`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`portfolio-${index}-content-type`}
                      className={`block text-sm font-medium mb-1 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Content Type
                    </label>
                    <input
                      type="text"
                      id={`portfolio-${index}-content-type`}
                      value={item.content_type}
                      onChange={(e) =>
                        handlePortfolioChange(
                          index,
                          "content_type",
                          e.target.value
                        )
                      }
                      className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        isDarkMode
                          ? "bg-gray-600 text-white"
                          : "bg-white text-gray-800"
                      }`}
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor={`portfolio-${index}-link`}
                      className={`block text-sm font-medium mb-1 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Link
                    </label>
                    <input
                      type="text"
                      id={`portfolio-${index}-link`}
                      value={item.link}
                      onChange={(e) =>
                        handlePortfolioChange(index, "link", e.target.value)
                      }
                      className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        isDarkMode
                          ? "bg-gray-600 text-white"
                          : "bg-white text-gray-800"
                      }`}
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor={`portfolio-${index}-description`}
                      className={`block text-sm font-medium mb-1 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Description
                    </label>
                    <textarea
                      id={`portfolio-${index}-description`}
                      value={item.description}
                      onChange={(e) =>
                        handlePortfolioChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      rows={2}
                      className={`w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        isDarkMode
                          ? "bg-gray-600 text-white"
                          : "bg-white text-gray-800"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddPortfolioItem}
              className="mt-2 flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <Plus size={20} className="mr-2" /> Add Portfolio Item
            </button>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className={`py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${
                isDarkMode
                  ? "border-gray-600 text-white bg-gray-700 hover:bg-gray-600"
                  : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EditProfileModal;
