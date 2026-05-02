"use client";
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const BrandStrip = () => {
  const techStack = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiFramer />, name: "Framer" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
  ];

  return (
    <section className="bg-[#0b0b0b] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-4 w-full">
            <div className="h-px grow bg-linear-to-r from-transparent via-gray-800 to-transparent"></div>
            <span className="text-[10px] text-gray-600 font-black uppercase tracking-[0.4em] whitespace-nowrap">
              Master the <span className="text-orange-500">Modern Stack</span>
            </span>
            <div className="h-px grow bg-linear-to-r from-transparent via-gray-800 to-transparent"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-700">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-3 cursor-crosshair"
              >
                <div className="text-4xl md:text-5xl text-gray-400 group-hover:text-orange-500 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                  {tech.icon}
                </div>
                <span className="text-[9px] font-black text-gray-700 group-hover:text-white uppercase tracking-widest transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs font-medium max-w-sm leading-relaxed">
            All our courses are built with industry-leading technologies to
            ensure you stay ahead of the curve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
