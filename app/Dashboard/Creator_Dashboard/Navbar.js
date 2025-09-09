"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
    const pathname =usePathname();
    if (pathname && pathname.startsWith("/Dashboard/Fan_Dashboard")) {
        return null;
    }
    const noNavbarRoutes =["/Dashboard/Creator_Dashboard/Create"]
    if (noNavbarRoutes.includes(pathname)) {
      return null;
    }
    let active="";
    if (pathname && pathname.startsWith("/Dashboard/Creator_Dashboard/First_Dash")) {
      active = "bg-slate-800 rounded-2xl";
    }
    
    return (
    <nav className="sideNav  w-62 h-[100vh] bg-slate-900 flex flex-col justify-between py-2 px-3 gap-10 border-r-2 border-slate-700">
        <div className="flex flex-col gap-5 ">
          <img className="w-12 h-8" src="/logo (1).png" alt="" />
          <Link href={"/Dashboard/Creator_Dashboard/First_Dash/Home"} className={`flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl ${active}`}><img className="h-7" src="/Dashboard.svg" alt="" />Dashboard</Link>
          <Link href={"/Dashboard/Creator_Dashboard/Dashboard2/Audience"} className={`flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl ${pathname === "/Dashboard/Creator_Dashboard/Audience" ? "bg-slate-800 rounded-2xl" : "" }`}><img className="h-7" src="/group.svg" alt="" />Audience</Link>
          <Link href={"/Dashboard/Creator_Dashboard"} className="flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl focus:bg-slate-800 focus:rounded-2xl"><img className="h-7" src="/payment.svg" alt="" />Payment</Link>
          <Link href={"/Dashboard/Creator_Dashboard"} className="flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl focus:bg-slate-800 focus:rounded-2xl"><img className="h-7" src="/Stats.svg" alt="" />Statistics</Link>
          <Link href={"/Dashboard/Creator_Dashboard"} className="flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl focus:bg-slate-800 focus:rounded-2xl"><img className="h-7" src="/Notification.svg" alt="" />Notification</Link>
          <Link href={"/Dashboard/Creator_Dashboard"} className="flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl focus:bg-slate-800 focus:rounded-2xl"><img className="h-7" src="/Chat.svg" alt="" />Community</Link>
          <Link href={"/Dashboard/Creator_Dashboard"} className="flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl focus:bg-slate-800 focus:rounded-2xl"><img className="h-7" src="/promotion.svg" alt="" />Promotion</Link>
          <Link href={"/Dashboard/Creator_Dashboard"} className="flex items-center gap-3 text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl focus:bg-slate-800 focus:rounded-2xl"><img className="h-7" src="/Settings.svg" alt="" />Settings</Link>
        </div>
        <div className="profile flex justify-between items-center text-l text-white mb-5">
          <Link href={"/Dashboard/Fan_Dashboard/Profile"}>
          <div className="Main flex gap-5 p-2 items-center cursor-pointer  hover:bg-slate-800 hover:rounded-3xl">
          <img className="h-10 w-10 border-2 rounded-3xl" src="/dog.jpg" alt="" />
          <span className="font-bold">Freelancer</span>
          </div>
          </Link>
          <img className="cursor-pointer  hover:bg-slate-800 hover:rounded-2xl h-10 p-2" src="/more.svg" alt="" />
        </div>
      </nav>
  )
}

export default Navbar
