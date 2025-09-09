"use client"
import Navbar from "./Navbar"
import { usePathname } from "next/navigation"
export default function navbarWrapper (){
    const pathname =usePathname();
    if (pathname && pathname.startsWith("/Dashboard")) {
        return null;
    }
    const noNavbarRoutes =["/SignUp" , "/Login",]
    if (noNavbarRoutes.includes(pathname)) {
        return null;
    }
    return <Navbar/>
}