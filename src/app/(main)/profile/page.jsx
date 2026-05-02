/* eslint-disable @next/next/no-img-element */
"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState, useEffect } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaShieldAlt,
  FaCamera,
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

import { FiEdit3, FiX, FiCheck } from "react-icons/fi";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [isEditing, setIsEditing] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    image: user?.image || "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdateLoading(true);

    try {
      const { error } = await authClient.updateUser({
        name: formData.name,
        image: formData.image,
      });

      if (error) {
        toast.error(error.message || "Failed to update profile");
      } else {
        toast.success("Profile updated successfully!");
        setIsEditing(false);
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setUpdateLoading(false);
    }
  };

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
              <div className="h-32 w-32 md:h-40 md:w-40 rounded-3xl border-2 border-orange-500/30 p-2 bg-[#0b0b0b]">
                <div className="h-full w-full rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center">
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="text-gray-600 text-7xl" />
                  )}
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="absolute bottom-2 right-2 p-2 bg-orange-600 rounded-xl text-white shadow-lg hover:scale-110 transition-transform z-10"
              >
                {isEditing ? <FiX size={18} /> : <FiEdit3 size={18} />}
              </button>
            </div>

            {/* User Info / Edit Form */}
            <div className="flex-1 text-center md:text-left">
              {!isEditing ? (
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight italic">
                    {user?.name}
                  </h1>
                  <p className="text-orange-500 font-bold tracking-widest text-[10px] uppercase bg-orange-500/10 inline-block px-3 py-1 rounded-full">
                    SkillOrbit Student
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaEnvelope className="text-orange-500/60" />{" "}
                      {user?.email}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaShieldAlt className="text-orange-500/60" /> Verified
                    </div>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleUpdate}
                  className="space-y-4 w-full max-w-sm mx-auto md:mx-0"
                >
                  <div className="space-y-1">
                    <label className="text-gray-500 text-[10px] font-bold uppercase ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#0b0b0b] border border-gray-800 text-white px-4 py-2 rounded-xl focus:border-orange-500 outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-500 text-[10px] font-bold uppercase ml-1">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.value })
                      }
                      className="w-full bg-[#0b0b0b] border border-gray-800 text-white px-4 py-2 rounded-xl focus:border-orange-500 outline-none transition-all"
                      placeholder="https://image-link.com"
                    />
                  </div>
                  <button
                    disabled={updateLoading}
                    type="submit"
                    className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-xl font-bold text-sm transition-all active:scale-95 disabled:opacity-50"
                  >
                    {updateLoading ? (
                      "Updating..."
                    ) : (
                      <>
                        <FiCheck /> Save Changes
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              label: "My Courses",
              value: "04",
              icon: <FaFire className="text-orange-500" />,
            },
            {
              label: "Certificates",
              value: "02",
              icon: <FaGraduationCap className="text-blue-500" />,
            },
            {
              label: "Points",
              value: "1250",
              icon: <FaGem className="text-purple-500" />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#141414] border border-gray-900 p-6 rounded-[2rem] hover:border-orange-500/30 transition-all"
            >
              <div className="text-2xl mb-2 transition-transform duration-300">
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
              Your <span className="text-orange-500">Progress</span>
            </h3>
            <div className="h-px grow bg-gradient-to-right from-orange-500/50 to-transparent"></div>
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
                name: "TypeScript",
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
                className="bg-[#141414] border border-gray-900 p-5 rounded-3xl flex flex-col items-center justify-center gap-3 hover:border-orange-500/40 transition-all group cursor-default"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {stack.icon}
                </div>
                <div className="text-center">
                  <p className="text-white text-xs font-bold tracking-wide">
                    {stack.name}
                  </p>
                  <p className="text-gray-600 text-[9px] uppercase font-black mt-0.5">
                    {stack.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
