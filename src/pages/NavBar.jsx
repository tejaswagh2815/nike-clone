import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="padding-x py-8 z-10 absolute w-full">
        <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
          <a href="/">
            <img src={headerLogo} alt="logo" className="w-32 h-auto" />
          </a>
          <div className="lg:hidden">
            <img
              src={hamburger}
              alt="menu"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div
            className={`lg:hidden absolute top-16 z-18 right-0 mt-2 p-4 border border-gray-300 shadow-md ${
              menuOpen ? "bg-white block" : "hidden"
            }`}
          >
            <ul className="spcace-y-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-lg text-gray-700 font-semibold hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <ul className="flex space-x-8">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-lg text-gray-700 font-semibold hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
