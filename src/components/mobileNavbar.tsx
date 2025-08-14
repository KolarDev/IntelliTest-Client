import { navLinks } from "@/utils/utils";
import Link from "next/link";
import { Button } from "./button";

interface MobileNavbarProps {
    mobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}
export const MobileNavbar = ({
    mobileMenuOpen, toggleMobileMenu
}: MobileNavbarProps) => {
  return (
    <div
      className={`
        bg-white border-t border-gray-200
        overflow-hidden transition-all duration-300 ease-in-out
        ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} md:hidden
      `}
    >
      <div className="container px-4 py-3 flex flex-col space-y-3">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            className="py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            onClick={toggleMobileMenu}
          >
            {link.name}
          </Link>
        ))}
        <div className="py-2">
          <Button
            buttonText="Get Started"
            className="w-full bg-gradient-to-r text-white from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>
    </div>
  );
};
