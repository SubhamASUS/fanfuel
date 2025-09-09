"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session , status } = useSession()
  
  return (
    <nav className="h-15 bg-slate-950 flex justify-between pt-2 px-10">
      <div className="flex justify-center items-center gap-3 ">
        <img className="w-15 h-10" src="logo (1).png" alt="" />
        <span className="text-white text-xl font-bold">FanFuel</span>
      </div>
      <div className="flex gap-5">
        {status ==="authenticated" ?(
          <> <Link href={"/Dashboard/Fan_Dashboard"}></Link></>
        ):(
          <>
        <Link href={"/SignUp"}><button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">SignUp</button></Link>
        <Link href={"/Login"}><button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button></Link>
        </>
     )}
      </div>
    </nav>
  )
}

export default Navbar
