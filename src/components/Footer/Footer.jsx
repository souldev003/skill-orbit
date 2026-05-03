import React from "react";
import Link from "next/link";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] text-gray-400 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-75 h-75 bg-orange-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black text-white tracking-tighter italic">
                SKILL<span className="text-orange-500">ORBIT</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Empowering the next generation of creators and developers with
              world-class education. Join our orbit and accelerate your career.
            </p>
            <div className="flex gap-3">
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300 border border-white/5 group"
                  >
                    <Icon
                      size={18}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              Platform
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm"
                >
                  <FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-orange-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm"
                >
                  <FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-orange-500" />
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm"
                >
                  <FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-orange-500" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm"
                >
                  <FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-orange-500" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              Resources
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                "Help Center",
                "Terms of Service",
                "Privacy Policy",
                "FAQs",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors border-b border-transparent hover:border-orange-500/30 pb-0.5"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 shadow-inner">
            <h3 className="text-white font-bold mb-6">Stay Connected</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                  <FiMapPin className="text-orange-500 group-hover:text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  Gopalganj, Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                  <FiPhone className="text-orange-500 group-hover:text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  +880 1234 567890
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                  <FiMail className="text-orange-500 group-hover:text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  support@skillorbit.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-medium tracking-widest text-gray-600 uppercase">
            &copy; {currentYear} SkillOrbit. Designed by{" "}
            <span className="text-orange-500/60 font-bold hover:text-orange-500 transition-colors cursor-pointer">
              Mehrab Hosen
            </span>
          </p>
          <div className="flex gap-6 text-[11px] font-bold uppercase tracking-tighter text-gray-600">
            <a href="#" className="hover:text-white transition-colors">
              Status
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
