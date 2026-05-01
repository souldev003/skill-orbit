"use client";
import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-[#121212]">
      <div className="relative mb-8">
        <h1 className="text-9xl font-extrabold text-gray-900 tracking-tighter select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl font-bold text-orange-500 uppercase tracking-widest bg-black px-4">
            Lost in Orbit?
          </p>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-400 max-w-md mb-10 leading-relaxed">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable. Let&apos;s get you back to the
        right orbit.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-bold transition-all shadow-lg shadow-orange-900/20"
        >
          <FiHome size={20} />
          Back to Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 px-8 py-3 rounded-md font-bold transition-all"
        >
          <FiArrowLeft size={20} />
          Go Back
        </button>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-600/5 blur-[120px] rounded-full -z-10"></div>
    </div>
  );
}
