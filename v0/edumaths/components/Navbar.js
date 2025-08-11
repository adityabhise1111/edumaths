"use client"
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm py-4 px-6 sm:px-8 lg:px-12 flex justify-between items-center rounded-b-xl">
      {/* Logo/Site Title */}
      <div className="flex items-center">
        <svg className="h-8 w-8 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="text-2xl font-bold text-gray-900">AbacusPro</span>
      </div>

      {/* Placeholder Navigation Links (can be expanded later) */}
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-200">Features</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-200">Pricing</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-200">About Us</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-200">Contact</a>
      </div>

      {/* Mobile Menu Button (optional, can be implemented later) */}
      <div className="md:hidden">
        <button className="text-gray-600 hover:text-indigo-600 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}