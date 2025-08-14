"use client"
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { MobileNavbar } from "./mobileNavbar";
import { navLinks } from "@/utils/utils";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[0.5px] border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
          <span className="text-xl font-bold text-gray-900">IntelliTest</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.link}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Button  
              buttonText="Get Started"
              className="bg-gradient-to-r text-white from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            />
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none transition-colors"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X size={24} className="transition-transform duration-300" />
            ) : (
              <Menu size={24} className="transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavbar
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </header>
  );
};