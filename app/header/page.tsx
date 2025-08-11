import React from "react";
import DesktopNavigation from "./desktop";
import MobileNavigation from "./mobile";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full items-center shadow-md">
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
};

export default Header;
