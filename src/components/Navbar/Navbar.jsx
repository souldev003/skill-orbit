/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <nav className="bg-[#1A1A1A]/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white tracking-tight">
                Skill<span className="text-orange-500">Orbit</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/courses">Courses</NavLink>
            {user && <NavLink href="/profile">My Profile</NavLink>}
          </div>

          <div className="hidden md:flex items-center gap-5">
            {user ? (
              <div className="flex items-center gap-4 border-l border-gray-800 pl-5">
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-white text-sm font-bold leading-tight">
                      {user.name}
                    </p>
                    <p className="text-gray-500 text-[10px]">Student</p>
                  </div>
                  <div className="h-10 w-10 rounded-full border-2 border-orange-500 overflow-hidden bg-gray-800 flex items-center justify-center">
                    {user.image ? (
                      <img
                        src={user.image}
                        alt={user.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <FaUserCircle className="text-gray-400 text-3xl" />
                    )}
                    <FaUserCircle className="text-gray-400 text-3xl absolute -z-10" />
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <FiLogOut size={20} />
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white cursor-pointer text-sm font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-orange-600 hover:bg-orange-700 cursor-pointer text-white px-5 py-2 rounded-md text-sm font-bold transition-all shadow-lg shadow-orange-900/20"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-[#1A1A1A] border-b border-gray-800 transition-all duration-300 ease-in-out ${
          isOpen
            ? "top-16 opacity-100"
            : "-top-96 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
          {user && (
            <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-xl mb-4">
              <div className="h-12 w-12 rounded-full border border-orange-500 overflow-hidden bg-gray-800 flex items-center justify-center">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-gray-400 text-4xl" />
                )}
              </div>
              <div>
                <p className="text-white font-bold">{user.name}</p>
                <p className="text-gray-500 text-xs">{user.email}</p>
              </div>
            </div>
          )}

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-3 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-3 rounded-md text-base font-medium"
          >
            Courses
          </Link>

          <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-500/10 text-red-500 cursor-pointer hover:bg-red-500 hover:text-white py-3 rounded-md font-bold transition-all flex items-center justify-center gap-2"
              >
                <FiLogOut /> Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-gray-300 hover:text-white py-2 font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-md font-bold shadow-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
