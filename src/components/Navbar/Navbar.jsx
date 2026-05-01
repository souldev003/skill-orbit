import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="bg-[#1A1A1A]/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white tracking-tight">
                Skill<span className="text-orange-500">Orbit</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/courses">Courses</NavLink>
            <NavLink href="/profile">My Profile</NavLink>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/login"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md text-sm font-bold transition-all shadow-lg shadow-orange-900/20"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
