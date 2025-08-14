import Link from "next/link";
import { Button } from "./button";

export const Navbar = () => {
  const navLinks = [
    { name: "Features", link: "#features" },
    { name: "Benefits", link: "#benefits" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[0.5px] border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">IntelliTest</span>
        </div>

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
            <Button  
                buttonText="Get Started"
                className="bg-gradient-to-r text-white from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            />
          </div>
      </div>
    </header>
  );
};
