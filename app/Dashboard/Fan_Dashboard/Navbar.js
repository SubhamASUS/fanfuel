"use client"
import React, { use, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../../firebase.js'
import { useEffect } from 'react'
const Navbar = () => {
  const pathname = usePathname();
  const hideLabels = pathname === "/Dashboard/Fan_Dashboard/Chat" || pathname === "/Dashboard/Fan_Dashboard/Chat";
  const [open, setopen] = useState(false)
  const [selected, setselected] = useState({ name: "Subham Singh", image: "/profile.svg" })
  const handleSelect = (option) => {
    setselected(option)
    setopen(false)
  }
  const navWidth = hideLabels ? "w-20" : "w-66";
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setselected(prev => ({
          ...prev,
          name: user.displayName || user.email.split('@')[0],
          image: user.photoURL || "/profile.svg"
        }));
      }
    });
    return () => unsubscribe();

  }, []);
  return (
    <nav className={`sideNav ${navWidth} h-[100vh] bg-slate-900 flex flex-col justify-between py-2 px-3 gap-10 border-r-2 border-slate-700`}>
      <div className="flex flex-col gap-5 ">
        <img className="w-12 h-8" src="/logo (1).png" alt="" />
        <Link href={"/Dashboard/Fan_Dashboard"} className={`flex items-center ${hideLabels ? 'justify-center' : 'gap-3'}  text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl  ${pathname === "/Dashboard/Fan_Dashboard" ? "bg-slate-800 rounded-2xl" : ""}`}><img className="h-7" src="/Home.svg" alt="" />{!hideLabels && <span>Home</span>}</Link>
        <Link href={"/Dashboard/Fan_Dashboard/Explore"} className={`flex items-center ${hideLabels ? 'justify-center' : 'gap-3'}  text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl  ${pathname === "/Dashboard/Fan_Dashboard/Explore" ? "bg-slate-800 rounded-2xl" : ""}`}><img className="h-7" src="/Search.svg" alt="" />{!hideLabels && <span>Explore</span>}</Link>
        <Link href={"/Dashboard/Fan_Dashboard/Notification"} className={`flex items-center ${hideLabels ? 'justify-center' : 'gap-3'}  text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl  ${pathname === "/Dashboard/Fan_Dashboard/Notification" ? "bg-slate-800 rounded-2xl" : ""}`}><img className="h-7" src="/Notification.svg" alt="" />{!hideLabels && <span>Notifications</span>}</Link>
        <Link href={"/Dashboard/Fan_Dashboard/Chat"} className={`flex items-center ${hideLabels ? 'justify-center' : 'gap-3'}  text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl  ${pathname === "/Dashboard/Fan_Dashboard/Chat" ? "bg-slate-800 rounded-2xl" : ""}`}><img className="h-7" src="/Chat.svg" alt="" />{!hideLabels && <span>Community</span>}</Link>
        <Link href={"/Dashboard/Fan_Dashboard/Profile"} className={`flex items-center ${hideLabels ? 'justify-center' : 'gap-3'}  text-l font-bold text-white cursor-pointer p-2 hover:bg-slate-800 hover:rounded-2xl `}><img className="h-7" src="/Settings.svg" alt="" />{!hideLabels && <span>Settings</span>}</Link>
      </div>
      <div className="profile relative flex justify-between items-center text-l text-white mb-5">
        <button id="dropdownTopButton" onClick={() => setopen(!open)} data-dropdown-toggle="dropdownTop" data-dropdown-placement="top" className="w-full  text-white    font-medium rounded-lg text-l ${hideLabels ? 'px-2 py-2':'px-5 py-2.5'} text-center inline-flex justify-between items-center " type="button">
          <div className="flex gap-3 items-center"><img className="h-10 w-10 border-2 rounded-3xl" src={selected.image} alt="" />{!hideLabels && <span>{selected.name}</span>}</div>
          {!hideLabels && <img className="cursor-pointer  hover:bg-slate-800 hover:rounded-2xl h-10 p-2" src="/more.svg" alt="" />}
        </button>
        <div id="dropdownTop" className={`absolute bottom-full mb-2 left-0 z-10 ${open ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownTopButton">
            <li>
              <button onClick={() => handleSelect({ name: "Freelancer", image: "/profile.svg" })} className="inline-flex px-4 items-center py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <Link href={"/Dashboard/Creator_Dashboard/First_Dash/Home"}>
                  <div className="profile flex justify-between items-center text-l text-white mb-5">
                    <div className="Main flex gap-5 p-2 items-center cursor-pointer  hover:bg-slate-800 hover:rounded-3xl">
                      <img className="h-10 w-10 border-2 rounded-3xl" src="/profile.svg" alt="" />
                      <span className="font-bold">Freelancer</span>
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
