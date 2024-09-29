"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";

interface ApplicationFormProps {
  isDarkMode: boolean;
  opportunityId: string;
}

export default function ApplicationForm({
  isDarkMode,
  opportunityId,
}: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    socialMediaLinks: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "Submitting application for opportunity:",
      opportunityId,
      formData
    );
    // Here you would typically send the data to your backend
  };

  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const inputBg = isDarkMode ? "bg-gray-700" : "bg-gray-100";
  const inputBorder = isDarkMode ? "border-gray-600" : "border-gray-300";
  const inputText = isDarkMode ? "text-white" : "text-gray-900";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`${cardBg} ${cardBorder}`}>
        <CardHeader>
          <CardTitle>Apply for this Opportunity</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`${inputBg} ${inputBorder} ${inputText}`}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`${inputBg} ${inputBorder} ${inputText}`}
              />
            </div>
            <div>
              <label
                htmlFor="socialMediaLinks"
                className="block text-sm font-medium mb-1"
              >
                Social Media Links
              </label>
              <Input
                id="socialMediaLinks"
                name="socialMediaLinks"
                value={formData.socialMediaLinks}
                onChange={handleChange}
                required
                className={`${inputBg} ${inputBorder} ${inputText}`}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Why are you a good fit for this opportunity?
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`${inputBg} ${inputBorder} ${inputText}`}
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
