import React from "react";
import Logo from "./Logo";
import { DarkModeToggleButton } from "./DarkModeToggleButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col items-center p-5 pl-2 mx-auto bg-white sm:flex-row dark:bg-gray-900 max-w-7xl">
        <Logo />
        <div className="flex items-center justify-end flex-1 space-x-4">
          <DarkModeToggleButton />
        </div>
      </nav>
      {/* Upgrade Banner */}
    </header>
  );
};

export default Header;
