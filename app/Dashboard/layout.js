import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Creator_Dashboard/Navbar";
import NavbarWrapper from "./Fan_Dashboard/NavbarWrapper";
import C_Navbar from "./Creator_Dashboard/C_Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FanFuel",
  description: "Fuel the creators you love",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex h-[100vh] text-white">
      <NavbarWrapper />
      <Navbar/>
      <div className="flex flex-col flex-1 overflow-auto no-scrollbar display-none bg-slate-950 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]">
        <C_Navbar />
        <main className="flex-1">

          {children}

        </main>
      </div>
    </div>
  );
}
