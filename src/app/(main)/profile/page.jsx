/* eslint-disable @next/next/no-img-element */
"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  FaUserCircle,
  FaEnvelope,
  FaShieldAlt,
  FaGem,
  FaGraduationCap,
  FaFire,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import { FiEdit3 } from "react-icons/fi";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-[#141414] rounded-[2.5rem] p-8 md:p-12 border border-gray-900 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] -mr-32 -mt-32"></div>

          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-orange-600 to-orange-400 rounded-[2rem] blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate__animated animate__pulse animate__infinite"></div>

              <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-3xl border-2 border-orange-500/30 p-2 bg-[#0b0b0b] shadow-[10px_10px_20px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="h-full w-full rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center animate__animated animate__fadeIn">
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <FaUserCircle className="text-gray-600 text-7xl" />
                  )}
                </div>
              </div>
              <button
                onClick={() => router.push("/profile/edit")}
                className="absolute bottom-2 right-2 p-3 bg-orange-600 rounded-2xl text-white shadow-xl hover:scale-110 active:scale-90 transition-all z-10 animate__animated animate__bounceIn animate__delay-1s"
              >
                <FiEdit3 size={20} />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight italic">
                  {user?.name}
                </h1>
                <p className="text-orange-500 font-bold tracking-widest text-[10px] uppercase bg-orange-500/10 inline-block px-3 py-1 rounded-full border border-orange-500/20">
                  SkillOrbit Pro Student
                </p>
                <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaEnvelope className="text-orange-500/60" /> {user?.email}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaShieldAlt className="text-orange-500/60" /> Verified
                    Identity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              label: "My Courses",
              value: "08",
              icon: <FaFire className="text-orange-500" />,
            },
            {
              label: "Certificates",
              value: "03",
              icon: <FaGraduationCap className="text-blue-500" />,
            },
            {
              label: "Skill Points",
              value: "2450",
              icon: <FaGem className="text-purple-500" />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#141414] border border-gray-900 p-6 rounded-[2rem] hover:border-orange-500/30 transition-all shadow-lg"
            >
              <div className="text-2xl mb-2 transition-transform">
                {stat.icon}
              </div>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                {stat.label}
              </p>
              <p className="text-2xl font-black text-white mt-1 italic">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-white font-black text-2xl tracking-tight italic">
              Tech <span className="text-orange-500">Stack</span>
            </h3>
            <div className="h-px grow bg-linear-to-r from-orange-500/50 to-transparent"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              {
                name: "React",
                icon: <SiReact className="text-[#61DAFB]" />,
                level: "Expert",
              },
              {
                name: "Next.js",
                icon: <SiNextdotjs className="text-white" />,
                level: "Pro",
              },
              {
                name: "Tailwind",
                icon: <SiTailwindcss className="text-[#06B6D4]" />,
                level: "Expert",
              },
              {
                name: "Framer",
                icon: <SiFramer className="text-[#0055FF]" />,
                level: "Advanced",
              },
              {
                name: "TS",
                icon: <SiTypescript className="text-[#3178C6]" />,
                level: "Intermediate",
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-[#47A248]" />,
                level: "Pro",
              },
            ].map((stack, i) => (
              <div
                key={i}
                className="bg-[#141414] border border-gray-900 p-5 rounded-3xl flex flex-col items-center gap-2 hover:border-orange-500/40 transition-all shadow-md"
              >
                <div className="text-3xl transition-transform">
                  {stack.icon}
                </div>
                <p className="text-white text-[10px] font-bold">{stack.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
