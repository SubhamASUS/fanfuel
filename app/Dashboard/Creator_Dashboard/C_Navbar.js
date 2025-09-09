"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navbar2 from './Navbar2'
const C_Navbar = () => {
  const pathname = usePathname();
  if (pathname && pathname.startsWith("/Dashboard/Fan_Dashboard")) {
    return null;
  }
  if (pathname && pathname.startsWith("/Dashboard/Creator_Dashboard/Dashboard2")) {
    return null;
  }
  const noNavbarRoutes = ["/Dashboard/Creator_Dashboard/Create"]
  if (noNavbarRoutes.includes(pathname)) {
    return null;
  }
  return (
    <>
    <div className="absolute flex h-[100vh] text-white">
      <Navbar2 />
      </div>
      <div className="relative mb-10 w-full ml-auto">
        <h1 className="text-2xl font-bold text-center mt-18 mr-10">Freelancer</h1>
        <div className="mt-10 mr-10 flex justify-center gap-20 text-sm font-bold">
          <Link href={"/Dashboard/Creator_Dashboard/First_Dash/Home"} className={` group ${pathname === "/Dashboard/Creator_Dashboard/First_Dash/Home" ? "text-purple-500" : ""}`}> Home
            <div className={`h-0.5 border-1  opacity-0 ${pathname === "/Dashboard/Creator_Dashboard/First_Dash/Home" ? "border-purple-500 opacity-100" : "border-slate-700"}`}></div>
          </Link>
          <Link href={"/Dashboard/Creator_Dashboard/First_Dash/Post"} className={` group group ${pathname === "/Dashboard/Creator_Dashboard/First_Dash/Post" ? "text-purple-500" : ""}`}> Posts
            <div className={`h-0.5 border-1  opacity-0 ${pathname === "/Dashboard/Creator_Dashboard/First_Dash/Post" ? "border-purple-500 opacity-100" : "border-slate-700"}`}></div>
          </Link>
          <Link href={"/Dashboard/Creator_Dashboard/First_Dash/Library"} className={` group group ${pathname === "/Dashboard/Creator_Dashboard/First_Dash/Library" ? "text-purple-500" : ""}`}> Collections
            <div className={`h-0.5 border-1  opacity-0 ${pathname === "/Dashboard/Creator_Dashboard/First_Dash/Library" ? "border-purple-500 opacity-100" : "border-slate-700"}`}></div>
          </Link>
          <Link href={"/Dashboard/Creator_Dashboard/First_Dash/Membership"} className={` group group ${pathname === "/Dashboard/Creator_Dashboard/First_Dash/Membership" ? "text-purple-500" : ""}`}> Membership
            <div className={`h-0.5 border-1  opacity-0 ${pathname === "/Dashboard/Creator_Dashboard/First_Dash/Membership" ? "border-purple-500 opacity-100" : "border-slate-700"}`}></div>
          </Link>
        </div>
        <div className="h-0.5 border-1 border-slate-700 mt-3"></div>
      </div>
</>
  )
}

export default C_Navbar
