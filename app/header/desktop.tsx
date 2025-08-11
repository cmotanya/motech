"use client";

import React, { useState } from "react";
import { navigationItems } from "../data/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Slide } from "react-awesome-reveal";

const DesktopNavigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="hidden w-full items-center justify-between bg-white px-8 py-4 shadow-sm md:flex">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-gray-900">
        Motech
      </Link>

      {/* Nav Menu */}
      <nav className="flex items-center space-x-8">
        {navigationItems.map((item) => (
          <div
            key={item.path}
            className="group relative"
            onMouseEnter={() => setOpenDropdown(item.title)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href={item.path}
              className="hover:text-highlight flex items-center gap-1 font-medium text-gray-700 uppercase transition-colors"
            >
              {item.title}
              {item.children && <ChevronDown size={16} />}
            </Link>

            {/* Dropdown with Slide */}
            {item.children && openDropdown === item.title && (
              <div className="absolute left-0 z-50 mt-2 w-48">
                <Slide direction="down" duration={250} triggerOnce>
                  <div className="rounded-lg bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </Slide>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* CTA */}
      <Link
        href="/quote"
        className="bg-highlight hover:bg-highlight-dark rounded-full px-5 py-2.5 text-sm font-semibold text-white uppercase transition-colors"
      >
        📋 Get a Free Quote
      </Link>
    </header>
  );
};

export default DesktopNavigation;
