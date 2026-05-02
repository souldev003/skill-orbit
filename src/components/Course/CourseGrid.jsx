import React from "react";
import CourseCard from "./CourseCard";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const CourseGrid = ({ courses }) => {
  return (
    <section className="py-16 md:py-24 bg-[#121212]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-0.5 bg-orange-500"></span>
              <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
                Top Rated Programs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Our Most Popular <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">
                Learning Paths
              </span>
            </h2>
          </div>

          {courses.length <= 3 && (
            <Link
              href="/courses"
              className="group flex items-center gap-2 text-white bg-white/5 hover:bg-orange-600 border border-white/10 hover:border-orange-600 px-6 py-3 rounded-full transition-all duration-300"
            >
              View All Courses
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
