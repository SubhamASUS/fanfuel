"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="sideNav  w-66 h-[100vh] bg-slate-900 flex flex-col justify-between py-2 px-3 gap-10 border-r-2 border-slate-700">
        <div className="flex flex-col gap-5 ">
          <img className="w-12 h-8" src="/logo (1).png" alt="" />
          <Link href={"/Dashboard/Fan_Dashboard"} className={`flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl  ${pathname === "/Dashboard/Fan_Dashboard" ? "bg-slate-800 rounded-2xl" : "" }`}><img className="h-7" src="/Home.svg" alt="" />Home</Link>
          <Link href={"/Dashboard/Fan_Dashboard/Explore"} className={`flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl  ${pathname === "/Dashboard/Fan_Dashboard/Explore" ? "bg-slate-800 rounded-2xl" : ""}`}><img className="h-7" src="/Search.svg" alt="" />Explore</Link>
          <Link href={"/Dashboard/Fan_Dashboard/"} className={`flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl  ${pathname === "/Dashboard/Fan_Dashboard" ? "bg-slate-800 rounded-2xl" : ""}`}><img className="h-7" src="/Notification.svg" alt="" />Notification</Link>
          <Link href={"/Dashboard/Fan_Dashboard"} className={`flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl  ${pathname === "/Dashboard/Fan_Dashboard" ? "bg-slate-800 rounded-2xl" : ""}`}><img className="h-7" src="/Chat.svg" alt="" />Community</Link>
          <Link href={"/Dashboard/Creator_Dashboard/Create"} className={`flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl `}><img className="h-7" src="/Creator.svg" alt="" />Be a creator</Link>
        </div>
        <div className="profile flex justify-between items-center text-l text-white mb-5">
          <Link href={"/Dashboard/Fan_Dashboard/Profile"}>
          <div className="Main flex gap-5 p-2 items-center cursor-pointer  hover:bg-slate-800 hover:rounded-3xl">
          <img className="h-10 w-10 border-2 rounded-3xl" src="/dog.jpg" alt="" />
          <span className="font-bold">Subham singh</span>
          </div>
          </Link>
          <img className="cursor-pointer  hover:bg-slate-800 hover:rounded-2xl h-10 p-2" src="/more.svg" alt="" />
        </div>
      </nav>
  )
}

export default Navbar
