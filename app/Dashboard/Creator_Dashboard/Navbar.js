"use client"
import React , {useState} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
    const pathname =usePathname();
    if (pathname && pathname.startsWith("/Dashboard/Fan_Dashboard")) {
        return null;
    }
    const noNavbarRoutes =["/Dashboard/Creator_Dashboard/Create","/Dashboard/Creator_Dashboard/First_Dash/Edit_P"]
    if (noNavbarRoutes.includes(pathname)) {
      return null;
    }
    let active="";
    if (pathname && pathname.startsWith("/Dashboard/Creator_Dashboard/First_Dash")) {
      active = "bg-slate-800 rounded-2xl";
    }
    const [open, setopen] = useState(false)
      const [selected, setselected] = useState({name: "Freelancer", image:"/dog.jpg"})
      const handleSelect = (option) => {
        setselected(option)
        setopen(false)
      }

      const hideLabels = pathname === "/Dashboard/Creator_Dashboard/Dashboard2/Chat" || pathname === "/Dashboard/Creator_Dashboard/Dashboard2/Chat";
      const navWidth = hideLabels ? "w-20" : "w-62";
    return (
    <nav className={`sideNav ${navWidth} h-[100vh] bg-slate-900 flex flex-col justify-between py-2 px-3 gap-10 border-r-2 border-slate-700`}>
        <div className="flex flex-col gap-5 ">
          <img className="w-12 h-8" src="/logo (1).png" alt="" />
          <Link href={"/Dashboard/Creator_Dashboard/First_Dash/Home"} className={`flex items-center text-l  font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl ${active}`}><img className="h-7" src="/Dashboard.svg" alt="" />{!hideLabels && <span>Dashboard</span> }</Link>
          <Link href={"/Dashboard/Creator_Dashboard/Dashboard2/Audience"} className={`flex items-center gap-3 text-l  font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl ${pathname === "/Dashboard/Creator_Dashboard/Audience" ? "bg-slate-800 rounded-2xl" : "" }`}><img className="h-7" src="/group.svg" alt="" />{!hideLabels && <span>Audience</span> }</Link>
          <Link href={"/Dashboard/Creator_Dashboard/Dashboard2/Payment"} className="flex items-center gap-3 text-l  font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl focus:bg-slate-800 focus:rounded-2xl"><img className="h-7" src="/payment.svg" alt="" />{!hideLabels && <span>Payment</span> }</Link>
          <Link href={"/Dashboard/Creator_Dashboard/Dashboard2/Statistics"} className="flex items-center gap-3 text-l  font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl focus:bg-slate-800 focus:rounded-2xl"><img className="h-7" src="/Stats.svg" alt="" />{!hideLabels && <span>Statistics</span> }</Link>
          <Link href={"/Dashboard/Creator_Dashboard/Dashboard2/Notification"} className="flex items-center gap-3 text-l  font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl focus:bg-slate-800 focus:rounded-2xl"><img className="h-7" src="/Notification.svg" alt="" />{!hideLabels && <span>Notifications</span> }</Link>
          <Link href={"/Dashboard/Creator_Dashboard/Dashboard2/Chat"} className="flex items-center gap-3 text-l  font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl focus:bg-slate-800 focus:rounded-2xl"><img className="h-7" src="/Chat.svg" alt="" />{!hideLabels && <span>Community</span> }</Link>
          <Link href={"/Dashboard/Creator_Dashboard/Dashboard2/Promotion"} className="flex items-center gap-3 text-l  font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl focus:bg-slate-800 focus:rounded-2xl"><img className="h-7" src="/promotion.svg" alt="" />{!hideLabels && <span>Promotion</span> }</Link>        </div>
        <div className="profile relative flex justify-between items-center text-l text-white mb-5">
        <button id="dropdownTopButton" onClick={() => setopen(!open)} data-dropdown-toggle="dropdownTop" data-dropdown-placement="top" className="w-full  text-white    font-medium rounded-lg text-l ${hideLabels ? 'px-2 py-2':'px-5 py-2.5'} text-center inline-flex justify-between items-center " type="button">
          <div className="flex gap-3 items-center"><img className="h-10 w-10 border-2 rounded-3xl" src={selected.image} alt="" />{!hideLabels && <span>{selected.name}</span>}</div>
         {!hideLabels && <img className="cursor-pointer  hover:bg-slate-800 hover:rounded-2xl h-10 p-2" src="/more.svg" alt="" />}
        </button>
        <div id="dropdownTop" className={`absolute bottom-full mb-2 left-0 z-10 ${open ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownTopButton">
            <li>
              <button onClick={() => handleSelect({name: "Subham Singh", image:"/dog.jpg"})} className="inline-flex px-4 items-center py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <Link href={"/Dashboard/Fan_Dashboard"}>
                <div className="profile flex justify-between items-center text-l text-white mb-5">
                    <div className="Main flex gap-5 p-2 items-center cursor-pointer  hover:bg-slate-800 hover:rounded-3xl">
                      <img className="h-10 w-10 border-2 rounded-3xl" src="/dog.jpg" alt="" />
                      <span className="font-bold">Subham Singh</span>
                    </div>
                </div>
                  </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
      </nav>
  )
}

export default Navbar
