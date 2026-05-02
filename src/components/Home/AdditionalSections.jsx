/* eslint-disable @next/next/no-img-element */
import React from "react";

import {
  FaBookReader,
  FaClock,
  FaLightbulb,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const RefinedLearningHub = () => {
  const uniqueLearningTips = [
    {
      title: "Mastery Through Recall",
      subtitle: "Study Techniques",
      desc: "Apply Active Recall and Spaced Repetition. Challenge yourself to recall key concepts before reviewing material to strengthen retention.",
      icon: <FaBookReader />,
      accent: "from-orange-500 to-amber-500",
      imageRef:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "The Deep Work Method",
      subtitle: "Time Management",
      desc: "Schedule dedicated 90-minute blocks of uninterrupted focus. Designate specific, complex tasks for these 'deep work' sessions.",
      icon: <FaClock />,
      accent: "from-amber-400 to-orange-400",
      imageRef:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Building 'Atomic' Habits",
      subtitle: "Goal Setting",
      desc: "Identify small, 'atomic' actions that lead to major changes. Example: 'Write 5 lines of code after opening the editor.'",
      icon: <FaLightbulb />,
      accent: "from-orange-400 to-yellow-400",
      imageRef:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const topInstructors = [
    {
      name: "David Lee",
      role: "Full Stack Expert",
      rating: 5.0,
      students: "12k+",
      image: "https://i.pravatar.cc/150?u=davidlee",
    },
    {
      name: "Jane Smith",
      role: "Next.js Specialist",
      rating: 4.9,
      students: "10k+",
      image: "https://i.pravatar.cc/150?u=janesmith",
    },
    {
      name: "Michael Chen",
      role: "Cybersecurity Pro",
      rating: 4.9,
      students: "8k+",
      image: "https://i.pravatar.cc/150?u=michaelchen",
    },
    {
      name: "Ayesha Khan",
      role: "UI/UX Designer",
      rating: 4.8,
      students: "15k+",
      image: "https://i.pravatar.cc/150?u=ayeshakhan",
    },
  ];

  return (
    <div className="bg-[#0b0b0b] text-white py-20 px-6 lg:px-24">
      <section className="mb-24">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-3">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-orange-500"></div>
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-300">
              Forge Your Skill Path
            </h2>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            A regular course isn&apos;t enough. Activate your potential with
            these advanced learning methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {uniqueLearningTips.map((tip, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden group rounded-3xl p-8 border border-gray-900 bg-[#141414] transition-all duration-500 hover:-translate-y-2 hover:border-gray-800 hover:shadow-[0_20px_50px_-10px_rgba(249,115,22,0.15)] ${idx === 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-cover bg-center mix-blend-overlay"
                style={{ backgroundImage: `url(${tip.imageRef})` }}
              ></div>

              <div className="relative z-10 flex items-center gap-5 mb-8">
                <div
                  className={`flex items-center justify-center p-5 rounded-2xl bg-linear-to-br ${tip.accent} text-white text-3xl shadow-[0_5px_15px_-5px_rgba(249,115,22,0.3)] group-hover:shadow-[0_10px_25px_-5px_rgba(249,115,22,0.5)] transition-shadow duration-300`}
                >
                  {tip.icon}
                </div>
                <div>
                  <span
                    className={`text-sm font-bold text-transparent bg-clip-text bg-linear-to-br ${tip.accent}`}
                  >
                    {tip.subtitle.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-orange-300 transition-colors">
                    {tip.title}
                  </h3>
                </div>
              </div>

              <p className="relative z-10 text-gray-400 leading-relaxed text-base group-hover:text-gray-200 transition-colors">
                {tip.desc}
              </p>

              <div className="absolute bottom-6 right-6 w-12 h-1 bg-linear-to-r from-orange-500 to-amber-500 opacity-20 group-hover:opacity-100 group-hover:w-20 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-3">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-orange-500"></div>
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-300">
              Elite Mentor Circle
            </h2>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Connect with and learn from the highest-rated experts who shape our
            industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topInstructors.map((ins, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center bg-[#141414] rounded-3xl p-7 text-center border border-gray-900 transition-all duration-500 hover:bg-[#1a1a1a] hover:border-orange-500/30 hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,0.15)]"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-orange-500 to-amber-500 scale-100 opacity-20 group-hover:scale-105 group-hover:opacity-40 transition-all duration-300"></div>
                <img
                  src={ins.image}
                  alt={ins.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#141414] group-hover:border-orange-500 transition-colors duration-300"
                />
              </div>

              <h3 className="text-xl font-bold truncate text-white mb-1">
                {ins.name}
              </h3>
              <p className="text-sm font-medium text-orange-400 mb-6 bg-orange-500/10 px-3 py-1 rounded-full inline-block">
                {ins.role}
              </p>

              <div className="flex justify-between items-center w-full bg-[#0b0b0b] p-4 rounded-xl border border-gray-900 mt-auto">
                <div className="flex items-center gap-1.5 text-sm text-gray-300">
                  <FaStar className="text-amber-400" />
                  <span className="font-bold">{ins.rating.toFixed(1)}</span>
                </div>
                <div className="h-6 w-px bg-gray-800"></div>
                <div className="flex items-center gap-1.5 text-sm text-gray-300">
                  <FaUsers className="text-gray-500" />
                  <span>{ins.students} Students</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RefinedLearningHub;
