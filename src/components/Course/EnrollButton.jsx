"use client";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const EnrollButton = ({ courseTitle, courseId }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleEnrollClick = () => {
    if (!session) {
      toast.error("Please login first to enroll!");
      router.push("/login");
      return;
    }

    toast.success(`Successfully Enrolled in ${courseTitle}!`);
  };

  return (
    <button
      onClick={handleEnrollClick}
      className="flex items-center cursor-pointer justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white py-3.5 rounded-xl font-black text-[10px] tracking-widest transition-all duration-300 uppercase shadow-[0_10px_20px_-10px_rgba(234,88,12,0.5)] active:scale-95 w-full"
    >
      Enroll Now <FiChevronRight size={14} />
    </button>
  );
};

export default EnrollButton;
