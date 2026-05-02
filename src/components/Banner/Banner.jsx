import React from "react";
import Link from "next/link";
import { FiPlayCircle, FiArrowRight } from "react-icons/fi";

const Banner = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#121212]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Banner.png')`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#121212] via-[#121212]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">
              Future of Online Learning
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Orbit Around Your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">
              Future Success
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Master the most in-demand technical skills with SkillOrbit. Get
            expert-led courses in React, Next.js, and Full-Stack development to
            stay ahead in your career.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/courses"
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-orange-900/20"
            >
              Explore Courses
              <FiArrowRight size={20} />
            </Link>

            <button className="flex items-center gap-2 border border-gray-700 hover:border-orange-500 hover:bg-orange-500/5 text-white px-8 py-4 rounded-lg font-bold transition-all">
              <FiPlayCircle size={24} className="text-orange-500" />
              Watch Demo
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-gray-800 pt-8">
            <div>
              <p className="text-2xl font-bold text-white">8+</p>
              <p className="text-gray-500 text-sm">Expert Courses</p>
            </div>
            <div className="h-10 w-1px bg-gray-800"></div>
            <div>
              <p className="text-2xl font-bold text-white">15k+</p>
              <p className="text-gray-500 text-sm">Global Students</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-orange-600/10 blur-[150px] rounded-full -z-1"></div>
    </section>
  );
};

export default Banner;
