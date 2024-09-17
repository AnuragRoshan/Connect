"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import ProfileCard from "@/components/ProfileCard";
import StepCard from "@/components/StepCard";
import FeatureCard from "@/components/FeatureCard";
import SvgPattern from "@/components/SvgPattern";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Facebook } from "lucide-react";
import {
  Instagram,
  Twitter,
  Youtube,
  Briefcase,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function EnhancedLandingPage() {
  const [activeTab, setActiveTab] = useState("influencers");

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SvgPattern />
      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4">
          <section className="flex flex-col h-[90vh] md:flex-row items-center mb-12">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-6xl font-bold mb-6">
                Connect. Collaborate. Create.
              </h2>
              <p className="text-2xl mb-8 text-gray-400">
                The ultimate platform for influencers and businesses to forge
                powerful partnerships and drive growth.
              </p>
              <div className="space-x-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6"
                >
                  Watch Demo
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1496147539180-13929f8aa03a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern Collaboration"
                className="w-full h-auto rounded-lg shadow-2xl"
                height={500}
                width={800}
              />
            </motion.div>
          </section>
          <section className="container mx-auto px-4 py-12 bg-transparent">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Trusted by Leading Brands
            </h2>
            <LogoMarquee />
          </section>
          <section className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold mb-12 text-center">
              How It Works
            </h2>
            <div className="relative flex flex-col md:flex-row items-start mx-h-full">
              {/* Parent container for the steps and vertical line */}
              <div className="relative flex flex-col md:flex-row md:items-start w-full mx-h-full">
                {/* Vertical line */}

                {/* Steps on the left */}
                <div className="md:w-2/5 flex flex-col space-y-8 mx-h-full ">
                  {/* <div className="absolute inset-y-0 left-1/4 w-1 max-h-full bg-gradient-to-t w-2 from-gray-400 to-black transform -translate-x-1/2"></div> */}
                  <StepCard
                    number="1"
                    title="Create Your Profile"
                    description="Showcase your unique style and skills by creating a compelling profile. Upload high-quality images, share your bio, and highlight your achievements to attract the attention of top brands."
                  />
                  <StepCard
                    number="2"
                    title="Connect with Brands"
                    description="Browse a wide variety of brand opportunities tailored to your niche. Whether you're into fashion, tech, beauty, or fitness, you'll find brands looking for influencers like you."
                  />
                  <StepCard
                    number="3"
                    title="Collaborate and Grow"
                    description="Work on exciting campaigns that resonate with your audience. Collaborate with brands to create authentic content that drives engagement, builds your follower base, and strengthens your brand identity."
                  />
                </div>

                <div className="md:w-3/5 mx-6 h-full  mt-8 md:mt-0 flex items-center justify-center">
                  <video
                    src="https://videos.pexels.com/video-files/8113145/8113145-sd_360_640_30fps.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-[76vh] h-4/5 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="mb-24 max-h-60vh min-h-60vh">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="flex space-x-4 mb-12 w-max justify-center mx-auto bg-transparent ">
                <TabsTrigger
                  value="influencers"
                  className={` text-lg ${
                    activeTab === "influencers"
                      ? "bg-gray-800 text-yellow-400 font-semibold"
                      : " font-medium"
                  }`}
                >
                  For Influencers
                </TabsTrigger>
                <TabsTrigger
                  value="businesses"
                  className={` text-lg ${
                    activeTab === "businesses"
                      ? "bg-gray-800 text-yellow-400 font-semibold"
                      : " font-medium"
                  }`}
                >
                  For Businesses
                </TabsTrigger>
              </TabsList>
              <TabsContent value="influencers">
                <div className="grid md:grid-cols-3 gap-8">
                  <FeatureCard
                    icon={TrendingUp}
                    title="Grow Your Audience"
                    description="Connect with brands that align with your values and expand your reach to new heights."
                  />
                  <FeatureCard
                    icon={Briefcase}
                    title="Diverse Opportunities"
                    description="Access a wide range of collaboration opportunities across various industries and niches."
                  />
                  <FeatureCard
                    icon={Users}
                    title="Community Support"
                    description="Join a thriving community of influencers, share insights, and learn from the best in the business."
                  />
                </div>
              </TabsContent>
              <TabsContent value="businesses">
                <div className="grid md:grid-cols-3 gap-8">
                  <FeatureCard
                    icon={Users}
                    title="Find Perfect Matches"
                    description="Discover influencers who truly resonate with your brand's voice, values, and target audience."
                  />
                  <FeatureCard
                    icon={TrendingUp}
                    title="Boost Your Reach"
                    description="Leverage influencer partnerships to dramatically expand your market presence and engagement."
                  />
                  <FeatureCard
                    icon={Briefcase}
                    title="Streamlined Campaigns"
                    description="Easily manage and track your influencer marketing campaigns with our intuitive tools and analytics."
                  />
                </div>
              </TabsContent>
            </Tabs>
          </section>
          <section className="mb-10">
            <h2 className="text-4xl font-bold mb-10 text-center">
              Featured{" "}
              {activeTab === "influencers" ? "Influencers" : "Businesses"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {activeTab === "influencers" ? (
                <>
                  <ProfileCard
                    name="Alex Johnson"
                    role="Lifestyle Influencer"
                    image="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
                    socialLinks={[
                      { icon: <Instagram className="w-6 h-6" />, url: "#" },
                      { icon: <Twitter className="w-6 h-6" />, url: "#" },
                      { icon: <Youtube className="w-6 h-6" />, url: "#" },
                    ]}
                  />
                  <ProfileCard
                    name="Sarah Lee"
                    role="Tech Reviewer"
                    image="https://plus.unsplash.com/premium_photo-1686777551229-d8eca134c66e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                    socialLinks={[
                      { icon: <Youtube className="w-6 h-6" />, url: "#" },
                      { icon: <Twitter className="w-6 h-6" />, url: "#" },
                    ]}
                  />
                  <ProfileCard
                    name="Mike Chen"
                    role="Food Blogger"
                    image="https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                    socialLinks={[
                      { icon: <Instagram className="w-6 h-6" />, url: "#" },
                      { icon: <Youtube className="w-6 h-6" />, url: "#" },
                    ]}
                  />
                </>
              ) : (
                <>
                  <ProfileCard
                    name="EcoLife"
                    role="Sustainable Products"
                    image="/placeholder.svg?height=400&width=300&text=EL"
                    socialLinks={[
                      { icon: <Instagram className="w-6 h-6" />, url: "#" },
                      { icon: <Twitter className="w-6 h-6" />, url: "#" },
                    ]}
                  />
                  <ProfileCard
                    name="TechNova"
                    role="Innovative Gadgets"
                    image="/placeholder.svg?height=400&width=300&text=TN"
                    socialLinks={[
                      { icon: <Youtube className="w-6 h-6" />, url: "#" },
                      { icon: <Twitter className="w-6 h-6" />, url: "#" },
                    ]}
                  />
                  <ProfileCard
                    name="FitFuel"
                    role="Fitness Nutrition"
                    image="/placeholder.svg?height=400&width=300&text=FF"
                    socialLinks={[
                      { icon: <Instagram className="w-6 h-6" />, url: "#" },
                      { icon: <Youtube className="w-6 h-6" />, url: "#" },
                    ]}
                  />
                </>
              )}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="text-lg px-8 py-6">
                View All{" "}
                {activeTab === "influencers" ? "Influencers" : "Businesses"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>
          <section className="mb-24">
            <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-lg">
              <div className="md:w-1/2 p-12">
                <h2 className="text-4xl font-bold mb-6 text-black">
                  Ready to Elevate Your Influence?
                </h2>
                <p className="text-xl mb-8 text-gray-700">
                  Join InfluenceConnect today and start your journey to
                  successful collaborations and exponential growth.
                </p>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-black">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="bg-white border border-gray-400 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className="text-black">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-white border border-gray-400 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg bg-black text-white hover:bg-gray-800"
                  >
                    Sign Up Now
                  </Button>
                </form>

                {/* Social Login Buttons */}
                <div className="flex flex-col space-y-4 mt-8">
                  <Button
                    variant="outline"
                    className="flex w-max justify-center m-auto items-center justify-center space-x-2 border border-gray-300 text-black hover:bg-gray-100"
                  >
                    <Instagram className="w-6 h-6 text-gray-700" />
                    <span>SignUp with Instagram</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex w-max justify-center m-auto items-center justify-center space-x-2 border border-gray-300 text-black hover:bg-gray-100"
                  >
                    <Facebook className="w-6 h-6 text-gray-700" />
                    <span>SignUp with Facebook</span>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 m-4">
                <video
                  src="https://videos.pexels.com/video-files/4994326/4994326-sd_640_360_25fps.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center">
              What Our Users Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard>
                <div className="p-8">
                  <p className="text-xl mb-6">
                    `InfluenceConnect has been a gamechanger for my influencer
                    career. The opportunities and connections Iaposve made are
                    invaluable!`
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwbWFufGVufDB8fDB8fHww"
                      alt="Jane Doe"
                      className="w-16 h-16 rounded-full mr-4"
                      height={64}
                      width={64}
                    />
                    <div>
                      <h4 className="font-semibold">Jane Doe</h4>
                      <p className="text-gray-400">Fashion Influencer</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="p-8">
                  <p className="text-xl mb-6">
                    `As a small business, finding the right influencers was
                    always a challenge. InfluenceConnect made it easy and
                    effective.`
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwbWFufGVufDB8fDB8fHww"
                      alt="John Smith"
                      className="w-16 h-16 rounded-full mr-4"
                      height={64}
                      width={64}
                    />
                    <div>
                      <h4 className="font-semibold">John Smith</h4>
                      <p className="text-gray-400">CEO, TechStart</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </section>
        </main>

        <footer className="bg-white/5 backdrop-blur-md py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">InfluenceConnect</h3>
                <p className="text-gray-400">
                  Connecting influencers and businesses for powerful
                  collaborations.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center text-gray-400">
              <p>&copy; 2023 InfluenceConnect. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
