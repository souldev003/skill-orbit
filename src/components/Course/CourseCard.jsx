/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiStar, FiUser } from "react-icons/fi";
import Link from "next/link";
import EnrollButton from "./EnrollButton";

const CourseCard = ({ course }) => {
  return (
    <div className="group relative bg-[#121212] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-orange-500/30 flex flex-col h-full shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-transparent to-transparent z-10 opacity-80" />
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-5 left-5 z-20 flex gap-2">
          <span className="bg-orange-600 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-2xl">
            {course.level}
          </span>
        </div>
      </div>

      <div className="p-7 flex flex-col grow relative z-20 -mt-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-orange-500 text-[10px] font-black uppercase tracking-widest bg-orange-500/5 px-3 py-1 rounded-md border border-orange-500/10">
            {course.category}
          </span>
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg border border-white/5">
            <FiStar className="text-yellow-500 fill-yellow-500" size={12} />
            <span className="text-white text-xs font-bold">
              {course.rating}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-1 group-hover:text-orange-500 transition-colors leading-tight italic tracking-tight line-clamp-1">
          {course.title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <FiUser className="text-orange-500/70" size={12} />
          <span className="text-gray-400 text-[11px] font-bold uppercase tracking-tighter">
            {course.instructor}
          </span>
        </div>

        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
          {course.description}
        </p>

        <div className="space-y-4 pt-6 border-t border-white/5 mt-auto">
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest">
                Premium Price
              </span>
              <span className="text-3xl font-black text-white italic tracking-tighter">
                ${course.price}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Link
              href={`/courses/${course.id}`}
              className="flex items-center justify-center bg-[#1A1A1A] border border-white/5 text-gray-300 hover:bg-white hover:text-black py-3.5 rounded-xl font-black text-[10px] tracking-widest transition-all duration-300 uppercase"
            >
              Details
            </Link>
            <EnrollButton courseTitle={course.title} courseId={course.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
