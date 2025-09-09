"use client"
import Footer from "./Footer";
import { usePathname } from "next/navigation"
export default function FooterWrapper(){
    const pathname =usePathname();
    if (pathname && pathname.startsWith("/Dashboard")) {
        return null;
    }
    return <Footer/>
}