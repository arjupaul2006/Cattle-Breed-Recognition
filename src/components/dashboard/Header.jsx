// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaHome, FaCamera, FaDatabase } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuBar = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center flex-wrap fixed bg-white max-w-full">
        {/* Left section: Logo and App Title */}
        <Link to="/">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="lg:h-8 lg:w-8 h-20 w-20" />
            <div className="flex flex-col">
              <span className="lg:block hidden text-lg font-semibold">
                Cattle Breed Recognition
              </span>
              <span className="lg:block hidden text-xs text-gray-500">
                Government of India
              </span>
            </div>
          </div>
        </Link>

        {/* Center section: Navigation Links */}
        <nav className="flex-row justify-center space-x-8 mb-4 md:mb-0 md:flex hidden">
          <Link
            to="/"
            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="/identifications"
            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
          >
            <FaCamera />
            <span>Identify Breed</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
          >
            <FaDatabase />
            <span>Browse Breeds</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span>Results</span>
          </Link>
        </nav>

        {/* Right section: Language and Region Selectors */}
        <div className="flex items-center space-x-4">
          <select className="bg-gray-100 p-2 rounded text-gray-700">
            <option>English</option>
            <option>Hindi</option>
          </select>
          <button className="md:hidden block" onClick={handleMenuBar}>
            {openMenu ? <IoClose /> : <GiHamburgerMenu />}
          </button>
          {/* Menu bar */}
          {openMenu && (
            <div className="absolute right-[55px] top-[85px] mt-2 w-48 bg-white rounded-lg shadow-lg border md:hidden">
              <Link
                to="/"
                className="px-4 py-2 text-sm hover:bg-gray-100 flex flex-row justify-start items-center gap-2"
              >
                <FaHome />
                <span>Home</span>
              </Link>
              <Link
                to="/identifications"
                className="px-4 py-2 text-sm hover:bg-gray-100 flex flex-row justify-start items-center gap-2"
              >
                <FaCamera />
                <span>Identify Breed</span>
              </Link>
              <Link
                to=""
                className="px-4 py-2 text-sm hover:bg-gray-100 flex flex-row justify-start items-center gap-2"
              >
                <FaDatabase />
                <span>Browse Breeds</span>
              </Link>
              <Link
                to=""
                className="px-4 py-2 text-sm hover:bg-gray-100 flex flex-row justify-start items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>Results</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
