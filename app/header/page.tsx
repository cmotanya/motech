import React from "react";
import DesktopNavigation from "./desktop";
import MobileNavigation from "./mobile";

const Header = () => {
  return (
    <header className="bg-primary fixed top-0 z-50 hidden h-[5rem] w-full items-center shadow-md">
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
};

export default Header;
