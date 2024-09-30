"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, DollarSign, Users, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface OpportunityFilters {
  startDate?: string;
  endDate?: string;
  deadline?: string;
  minBudget?: number;
  maxBudget?: number;
  minFollowers?: number;
  maxFollowers?: number;
  category?: string;
}

interface FilterComponentProps {
  onFilterChange: (filters: OpportunityFilters) => void;
  isDarkMode: boolean;
}

export default function OpportunityFilter({
  onFilterChange,
  isDarkMode,
}: FilterComponentProps) {
  const [filters, setFilters] = useState<OpportunityFilters>({
    startDate: undefined,
    endDate: undefined,
    deadline: undefined,
    minBudget: undefined, // Changed to undefined
    maxBudget: undefined, // Changed to undefined
    minFollowers: undefined, // Changed to undefined
    maxFollowers: undefined, // Changed to undefined
    category: undefined,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Convert the value to number if the name indicates budget or followers
    const isBudgetOrFollower = [
      "minBudget",
      "maxBudget",
      "minFollowers",
      "maxFollowers",
    ].includes(name);

    setFilters((prev) => ({
      ...prev,
      [name]: isBudgetOrFollower && value ? Number(value) : value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFilters((prev) => ({ ...prev, category: value }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  const handleResetFilters = () => {
    setFilters({
      startDate: undefined,
      endDate: undefined,
      deadline: undefined,
      minBudget: undefined,
      maxBudget: undefined,
      minFollowers: undefined,
      maxFollowers: undefined,
      category: undefined,
    });
    onFilterChange({
      startDate: undefined,
      endDate: undefined,
      deadline: undefined,
      minBudget: undefined,
      maxBudget: undefined,
      minFollowers: undefined,
      maxFollowers: undefined,
      category: undefined,
    });
  };

  const bgColor = isDarkMode ? "bg-gray-800" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-200";
  const inputBgColor = isDarkMode ? "bg-gray-700" : "bg-gray-50";
  const inputBorderColor = isDarkMode ? "border-gray-600" : "border-gray-300";

  return (
    <motion.div
      className={`${bgColor} ${textColor} p-8 rounded-xl shadow-lg mb-8 border ${borderColor}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Filter Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Posted Date Range</Label>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div className="grid grid-cols-2 gap-2 flex-grow">
              <Input
                type="date"
                name="startDate"
                value={filters.startDate}
                onChange={handleInputChange}
                className={`${inputBgColor} border ${inputBorderColor}`}
              />
              <Input
                type="date"
                name="endDate"
                value={filters.endDate}
                onChange={handleInputChange}
                className={`${inputBgColor} border ${inputBorderColor}`}
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Deadline</Label>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <Input
              type="date"
              name="deadline"
              value={filters.deadline}
              onChange={handleInputChange}
              className={`flex-grow ${inputBgColor} border ${inputBorderColor}`}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Budget Range</Label>
          <div className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-gray-400" />
            <div className="grid grid-cols-2 gap-2 flex-grow">
              <Input
                type="number"
                name="minBudget"
                value={filters.minBudget !== undefined ? filters.minBudget : ""}
                onChange={handleInputChange}
                placeholder="Min"
                className={`${inputBgColor} border ${inputBorderColor}`}
              />
              <Input
                type="number"
                name="maxBudget"
                value={filters.maxBudget !== undefined ? filters.maxBudget : ""}
                onChange={handleInputChange}
                placeholder="Max"
                className={`${inputBgColor} border ${inputBorderColor}`}
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Followers Required</Label>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-gray-400" />
            <div className="grid grid-cols-2 gap-2 flex-grow">
              <Input
                type="number"
                name="minFollowers"
                value={
                  filters.minFollowers !== undefined ? filters.minFollowers : ""
                }
                onChange={handleInputChange}
                placeholder="Min"
                className={`${inputBgColor} border ${inputBorderColor}`}
              />
              <Input
                type="number"
                name="maxFollowers"
                value={
                  filters.maxFollowers !== undefined ? filters.maxFollowers : ""
                }
                onChange={handleInputChange}
                placeholder="Max"
                className={`${inputBgColor} border ${inputBorderColor}`}
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Category</Label>
          <div className="flex items-center space-x-2">
            <Tag className="w-5 h-5 text-gray-400" />
            <Select onValueChange={handleSelectChange} value={filters.category}>
              <SelectTrigger
                className={`w-full ${inputBgColor} border ${inputBorderColor}`}
              >
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value=" ">Any</SelectItem>
                <SelectItem value="Beauty">Beauty</SelectItem>
                <SelectItem value="Fashion">Fashion</SelectItem>
                <SelectItem value="Tech">Technology</SelectItem>
                <SelectItem value="Food">Food</SelectItem>
                <SelectItem value="Travel">Travel</SelectItem>
                <SelectItem value="Lifestyle">Lifestyle</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-6">
        <Button
          onClick={handleResetFilters}
          variant="outline"
          className="w-full sm:w-auto"
        >
          Reset Filters
        </Button>
        <Button onClick={handleApplyFilters} className="w-full sm:w-auto">
          Apply Filters
        </Button>
      </div>
    </motion.div>
  );
}
