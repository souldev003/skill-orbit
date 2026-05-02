/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiClock, FiBook, FiStar } from "react-icons/fi";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-[#1A1A1A] border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 group flex flex-col h-full shadow-2xl">
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {course.level}
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-orange-500 text-xs font-semibold px-2 py-1 bg-orange-500/10 rounded">
            {course.category}
          </span>
          <div className="flex items-center gap-1 text-yellow-400">
            <FiStar fill="currentColor" size={14} />
            <span className="text-sm font-bold">{course.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors line-clamp-1">
          {course.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center gap-4 text-gray-500 text-xs mb-6 mt-auto">
          <div className="flex items-center gap-1">
            <FiClock className="text-orange-500" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiBook className="text-orange-500" />
            <span>{course.lessons} Lessons</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-4 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-white">
              ${course.price}
            </span>
            <span className="text-gray-500 text-xs italic">
              Lifetime Access
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href={`/courses/${course.id}`}
              className="flex items-center justify-center bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-2.5 rounded-lg font-bold text-xs transition-all duration-300"
            >
              View Details
            </Link>
            <button className="bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-lg font-bold text-xs transition-all duration-300 shadow-lg shadow-orange-900/20">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
