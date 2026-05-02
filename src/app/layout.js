import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppNavbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Footer />

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastStyle={{
            backgroundColor: "#1A1A1A",
            border: "1px solid #ea580c",
            color: "#fff",
            borderRadius: "12px",
          }}
        />
      </body>
    </html>
  );
}
