"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-all duration-200 px-1 py-2 border-b-2 ${
        isActive
          ? "text-orange-500 border-orange-500"
          : "text-gray-400 border-transparent hover:text-gray-200"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
