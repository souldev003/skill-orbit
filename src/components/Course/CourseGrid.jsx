"use client";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import Link from "next/link";
import { FiArrowRight, FiSearch } from "react-icons/fi";

const CourseGrid = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="py-16 md:py-24 bg-[#0b0b0b]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-0.5 bg-orange-500"></span>
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px]">
                Top Rated Programs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight italic tracking-tighter">
              Our Most Popular <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">
                Learning Paths
              </span>
            </h2>
          </div>

          {courses.length > 3 ? (
            <div className="relative w-full md:w-80 group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <FiSearch className="text-gray-500 group-focus-within:text-orange-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#141414] border border-white/5 text-white text-sm rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all duration-300 shadow-2xl placeholder:text-gray-600 font-bold tracking-tight"
              />
            </div>
          ) : (
            <Link
              href="/courses"
              className="group flex items-center gap-2 text-white bg-white/5 hover:bg-orange-600 border border-white/10 hover:border-orange-600 px-8 py-4 rounded-full transition-all duration-500 font-black text-[10px] uppercase tracking-widest italic"
            >
              View All Courses
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#141414] rounded-[3rem] border border-dashed border-white/10">
            <p className="text-gray-500 font-bold italic">
              No courses found matching your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseGrid;
