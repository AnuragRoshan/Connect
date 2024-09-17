"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Assuming you're using Lucide React icons
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Disable scroll when menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    // Clean up overflow property on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="container mx-auto px-4 py-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">InfluenceConnect</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Contact</Button>
          <Button variant="outline">Sign Up</Button>
          {/* <Button
            onClick={() => setTheme(theme === "dark" ? "dark" : "light")}
            className="text-lg"
          >
            {theme === "dark" ? (
              <Moon className="w-6 h-6" />
            ) : (
              <Sun className="w-6 h-6" />
            )}
          </Button> */}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black  shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Button
            variant="ghost"
            className="text-left mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Button>
          <Button
            variant="ghost"
            className="text-left mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Button>
          <Button
            variant="ghost"
            className="text-left mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Button>
          <Button
            variant="ghost"
            className="text-left mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Button>
          <Button
            variant="outline"
            className="w-full mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="self-end"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-6 w-6 text-white flex justify-center w-max m-auto" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
