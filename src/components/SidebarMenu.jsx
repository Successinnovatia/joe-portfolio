import React from "react";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const SidebarMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-48 md:w-64 bg-[#2A2A2A] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-white"
      >
        <X size={30} />
      </button>
     {/* Navigation Links */}
     <nav className="flex flex-col gap-4 mt-16">
        {menuItems.map(({ name, path }) => (
          <Link
            key={path}
            to={path}
            onClick={toggleMenu}
            className={`block py-3 px-6 rounded-lg text-white transition-all mx-5 ${
              location.pathname === path ? "bg-[#70909F] text-black font-bold" : "hover:bg-gray-700"
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SidebarMenu;
