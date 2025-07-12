"use client";

import React, { useState } from "react";
import { navigationItems } from "../data/navigation";
import Link from "next/link";

const DesktopNavigation = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="hidden h-full w-full items-center justify-between md:flex">
      <div className="flex items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          MT
        </Link>
      </div>

      <nav className="flex w-full items-center justify-center">
        {navigationItems.map((item) => (
          <div
            key={item.path}
            className="group relative inline-block h-full rounded"
          >
            <Link
              href={item.path}
              className="inline-block p-2 font-medium text-white/80 uppercase"
            >
              {item.title}
            </Link>

            {item.children && (
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="absolute top-full left-0 ml-2 hidden min-w-full rounded-lg shadow-md group-hover:block"
              >
                <span className="sr-only">Open submenu for {item.title}</span>
                {item.children.map((child) => (
                  <Link key={child.path} href={child.path}>
                    {child.title}
                  </Link>
                ))}
              </button>
            )}
          </div>
        ))}
      </nav>

      <Link
        href="/quote"
        className="bg-highlight hover:bg-highlight-dark mr-2 min-w-fit rounded-full p-2.5 text-sm font-semibold text-white uppercase transition-colors"
      >
        📋 Get a Free Quote
      </Link>
    </div>
  );
};

export default DesktopNavigation;
