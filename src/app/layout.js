import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppNavbar from "@/components/Navbar/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillOrbit | Online Learning Platform",
  description: "Upgrade Your Skills Today with Industry Experts on SkillOrbit.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-(family-name:--font-poppins) bg-[#121212]">
        <AppNavbar />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
