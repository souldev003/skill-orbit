import React from "react";
import { FiUsers, FiBookOpen, FiAward, FiStar } from "react-icons/fi";

const Features = () => {
  const stats = [
    {
      id: 1,
      icon: <FiUsers className="text-orange-500" size={28} />,
      count: "15K+",
      label: "Active Students",
      desc: "Learners from all over the world.",
    },
    {
      id: 2,
      icon: <FiBookOpen className="text-orange-500" size={28} />,
      count: "120+",
      label: "Expert Courses",
      desc: "High-quality technical content.",
    },
    {
      id: 3,
      icon: <FiAward className="text-orange-500" size={28} />,
      count: "50+",
      label: "Expert Mentors",
      desc: "Learn from industry professionals.",
    },
    {
      id: 4,
      icon: <FiStar className="text-orange-500" size={28} />,
      count: "4.9/5",
      label: "User Rating",
      desc: "Top-rated learning experience.",
    },
  ];

  return (
    <section className="bg-[#121212] py-20 border-b border-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-8 rounded-2xl bg-[#1A1A1A] border border-gray-800 hover:border-orange-500/50 transition-all group"
            >
              <div className="mb-4 p-3 bg-orange-500/10 w-fit rounded-lg group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">
                {stat.count}
              </h3>
              <p className="text-orange-500 font-semibold text-sm mb-2 uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
