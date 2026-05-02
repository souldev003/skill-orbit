"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { data: res, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Invalid email or password!");
      } else {
        toast.success("Login Successful! Redirecting...");

        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-[#141414] rounded-[2.5rem] p-10 border border-gray-900 shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-white mb-3 tracking-tight">
            Skill<span className="text-orange-500">Orbit</span>
          </h2>
          <p className="text-gray-400 font-medium">
            Elevate your potential today
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-semibold ml-1">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-500 group-focus-within:text-orange-500 transition-colors" />
              </div>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="john@example.com"
                className="w-full h-14 bg-[#0b0b0b] border border-gray-800 text-white rounded-2xl pl-12 pr-4 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-semibold ml-1">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaLock className="text-gray-500 group-focus-within:text-orange-500 transition-colors" />
              </div>
              <input
                {...register("password", { required: true })}
                type={isVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full h-14 bg-[#0b0b0b] border border-gray-800 text-white rounded-2xl pl-12 pr-12 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-gray-600"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-orange-500 transition-colors"
              >
                {isVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full h-14 bg-orange-600 cursor-pointer hover:bg-orange-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-orange-900/20 mt-4 active:scale-[0.98] transition-all duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Verifying..." : "Sign In"}
          </button>
        </form>

        <div className="flex items-center my-8 gap-4">
          <div className="h-px grow bg-gray-800"></div>
          <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            Secure Access
          </span>
          <div className="h-px grow bg-gray-800"></div>
        </div>

        <button
          type="button"
          className="w-full h-14 border cursor-pointer border-gray-800 text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 group"
        >
          <FaGoogle className="group-hover:text-orange-500 transition-colors" />
          <span>Continue with Google</span>
        </button>

        <p className="text-center text-gray-500 mt-10 text-sm">
          New to the platform?{" "}
          <Link
            href="/register"
            className="text-orange-500 font-bold hover:underline underline-offset-4 transition-all"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
