"use client";

import React from "react";
import { toast } from "react-toastify";

const EnrollButton = () => {
  const handleEnroll = () => {
    toast.success("Successfully Enrolled in SkillOrbit!");
  };

  return (
    <button
      onClick={handleEnroll}
      className="bg-orange-600 cursor-pointer hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-900/20 active:scale-95"
    >
      Enroll Now
    </button>
  );
};

export default EnrollButton;
