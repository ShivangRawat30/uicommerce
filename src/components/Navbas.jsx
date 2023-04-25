import React from "react";
// import { a } from "react-router-dom";
import { FaSearch, FaBell, FaHeart } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a to="/" className="font-bold text-2xl text-[#00df9a]">
              E-Commerce Site
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center justify-between">
            <a
              to="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"
            >
              Home
            </a>
            <a
              to="/about"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"
            >
              About
            </a>
            <a
              to="/services"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"
            >
              Services
            </a>
            <a
              to="/contact"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"
            >
              Contact
            </a>
            <div className="flex items-center ml-6 bg-white">
              <div className="relative">
                <button className="p-1 rounded-full  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white">
                  <span className="sr-only">Search</span>
                  <FaSearch className="h-6 w-6 bg-white border-white" />
                </button>
              </div>
              <div className="ml-3 relative">
                <button className=" p-1 rounded-full hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white">
                  <span className="sr-only">Notifications</span>
                  <FaBell className="h-7 w-7 bg-white border-white" />
                </button>
              </div>
              <div className="ml-3 relative">
                <button className=" p-1 rounded-full hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white">
                  <span className="sr-only">Whislist</span>
                  <FaHeart className="h-6 w-6 bg-white border-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            to="/"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            to="/about"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            to="/services"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            to="/contact"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
