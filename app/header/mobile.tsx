"use client";

import React, { useState } from "react";
import { navigationItems } from "../data/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Hamburger from "./hamburger";

const MobileNavigation = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setIsActiveLink] = useState(navigationItems[0].path);

  const handleClick = (path: string) => {
    setIsActiveLink(path);
    setIsOpen(false);
    router.push(path);
  };

  return (
    <nav className="block border-4 border-red-500 md:hidden">
      <span>MS</span>

      <div className="fixed top-0 right-2">
        <Hamburger onclick={() => setIsOpen(true)} isOpen={isOpen} />
      </div>

      {isOpen && (
        <div>
          {navigationItems.map((item) => (
            <ul key={item.path}>
              <Link
                href={item.path}
                onClick={() => handleClick(item.path)}
                className={cn("", activeLink && "bg-accent")}
              >
                {item.title}
              </Link>
            </ul>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MobileNavigation;
