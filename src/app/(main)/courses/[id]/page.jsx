/* eslint-disable @next/next/no-img-element */
import EnrollButton from "@/components/Course/EnrollButton";
import React from "react";
import { FiClock, FiBook, FiCheckCircle, FiStar } from "react-icons/fi";

async function getCourseData(id) {
  const res = await fetch("https://skill-orbit-two.vercel.app/data.json", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  const json = await res.json();
  return json.data.find((course) => course.id === parseInt(id));
}

export default async function CourseDetails({ params }) {
  const { id } = await params;
  const course = await getCourseData(id);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center text-white">
        <h1 className="text-2xl">Course not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 bg-orange-600 px-4 py-1 rounded-full text-xs font-bold uppercase">
            {course.level}
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            {course.category}
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            {course.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-6 py-6 border-y border-gray-900">
            <div className="flex items-center gap-2">
              <FiClock className="text-orange-500 text-xl" />
              <span className="text-gray-300">{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiBook className="text-orange-500 text-xl" />
              <span className="text-gray-300">{course.lessons} Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <FiStar className="text-yellow-500 text-xl fill-yellow-500" />
              <span className="text-gray-300 font-bold">
                {course.rating} Rating
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div>
              <p className="text-gray-500 text-sm italic">Course Price</p>
              <h2 className="text-4xl font-bold text-white">${course.price}</h2>
            </div>
            <EnrollButton />
          </div>
        </div>
      </div>

      <div className="mt-20 p-8 rounded-3xl bg-[#141414] border border-gray-900 flex items-center gap-6">
        <div className="h-16 w-16 rounded-full bg-orange-500/20 flex items-center justify-center">
          <span className="text-orange-500 font-bold">Inst</span>
        </div>
        <div>
          <h3 className="text-xl font-bold">{course.instructor}</h3>
          <p className="text-gray-500">Lead Instructor at SkillOrbit</p>
        </div>
      </div>
    </div>
  );
}
