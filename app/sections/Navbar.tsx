"use client";

import { Code2 } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/Services" },
  { name: "Projects", href: "/Projects" },
  { name: "Contact", href: "/Contact" },
];

export function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
          <Code2 className="w-5 h-5 text-blue-600" />
        </div>
        <span className="font-semibold text-lg text-gray-900">
          Muhammad Vlas
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Hire Me Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors">
        Hire Me
      </button>
    </nav>
  );
}