import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Use Link for the logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          ZAHID HASAN
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-gray-800 hover:text-blue-500">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-800 hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Toggle Visibility */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link to="/" className="text-gray-800 hover:text-blue-500" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-gray-800 hover:text-blue-500" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-800 hover:text-blue-500" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-800 hover:text-blue-500" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
