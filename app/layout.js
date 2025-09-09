import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "./Components/navbarWrapper.js";
import FooterWrapper from "./Components/FooterWrapper";
import SessionWrapper from "./Components/SessionWrapper";


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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
        <NavbarWrapper/>
        {children}
        <FooterWrapper/>
        </SessionWrapper>
      </body>
    </html>
  );
}
