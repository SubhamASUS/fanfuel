"use client"
import React from 'react'
import { useEffect , useRef, useState } from 'react'
import Link from 'next/link'

const page = () => {
  const scrollRef = useRef(null)
  const [scrollLeft, setscrollLeft] = useState(false)
  const [scrollRight, setscrollRight] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return 
    const check = () => {
      setscrollLeft(el.scrollLeft >0)
      setscrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth -1)
    }
     check()
     el.addEventListener("scroll",check)
     window.addEventListener("resize",check)
     return () =>{
      el.removeEventListener("scroll",check)
      window.removeEventListener("resize",check)
     }
  },[])
   const scrollBy =(dir = 1) =>{
    const el =scrollRef.current
    if(!el) return
    const amount = el.clientWidth*0.4089
    el.scrollBy({left:dir*amount , behavior:"smooth"})
   }
  
  return (
    <div>
      <div className="h-20 text-center">
        <div className="relative w-[50%] mt-10 mx-auto">
          <input type="text" placeholder="Search your Fav Creator" className="cursor-pointer w-full text-sm text-slate-400  px-3 py-2 border-2 border-slate-700 focus:outline-slate-500 hover:border-slate-500 rounded-3xl" />
          <img className="absolute right-3 top-2 cursor-pointer " src="/Search.svg" alt="" />
        </div>
      </div>
      <div className="Popular h-[45vh] mx-6 mb-5 flex flex-col  "> 
        <div className="flex justify-between  items-center">
        <div className="flex items-center">
        <span className="text-xl font-bold">Popular Creators</span>
        <Link href={"/Dashboard/Fan_Dashboard/Explore/Popular"}>
        <button className="cursor-pointer" >
          <img className="w-6 h-6 mt-3" src="/arrow.svg" alt="" />
        </button>
        </Link>
        </div>
        <div className="flex gap-3">
          <button onClick={()=> scrollBy(-1)} disabled={!scrollLeft} className="disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"><img className="w-7 h-7 " src="/arrow_L.svg" alt="" /></button>
          <button onClick={()=> scrollBy(+1)} disabled={!scrollRight} className="disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"><img className="w-7 h-7 " src="/arrow_R.svg" alt="" /></button>
        </div>
        </div>
        <div ref={scrollRef} className="Cards flex gap-7.5 overflow-hidden ">
        <div className="card group relative w-55 h-65 rounded-2xl hover:bg-slate-800">
          <img className="w-50 h-36 mx-auto my-2.5 rounded-xl" src="/dog.jpg" alt="" />
          <h2 className="mx-2.5">Dog Gamer call of Duty | BGMI</h2>
          <p className="mx-2.5 truncate ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quaerat!</p>
          <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h.svg" alt="" />
        </div>
        <div className="card group relative w-55 h-65 rounded-2xl hover:bg-slate-800">
          <img className="w-50 h-36 mx-auto my-2.5 rounded-xl" src="/Rabbit.jpg" alt="" />
          <h2 className="mx-2.5">Poetry | Creative Writting</h2>
          <p className="mx-2.5 truncate ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quaerat!</p>
          <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h.svg" alt="" />
        </div>
        <div className="card group relative w-55 h-65 rounded-2xl hover:bg-slate-800">
          <img className="w-50 h-36 mx-auto my-2.5 rounded-xl" src="/dog.jpg" alt="" />
          <h2 className="mx-2.5">Dog Gamer builder Minecraft | Clash of Clans</h2>
          <p className="mx-2.5 truncate ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quaerat!</p>
          <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h.svg" alt="" />
        </div>
        <div className="card group relative w-55 h-65 rounded-2xl hover:bg-slate-800">
          <img className="w-50 h-36 mx-auto my-2.5 rounded-xl" src="/Horse.png" alt="" />
          <h2 className="mx-2.5">Youtube Creator</h2>
          <p className="mx-2.5 truncate ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quaerat!</p>
          <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h.svg" alt="" />
        </div>
        <div className="card group relative w-55 h-65 rounded-2xl hover:bg-slate-800">
          <img className="w-50 h-36 mx-auto my-2.5 rounded-xl" src="/Rabbit.jpg" alt="" />
          <h2 className="mx-2.5">Animal Activist</h2>
          <p className="mx-2.5 truncate ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quaerat!</p>
          <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h.svg" alt="" />
        </div>
        <div className="card group relative w-55 h-65 rounded-2xl hover:bg-slate-800">
          <img className="w-50 h-36 mx-auto my-2.5 rounded-xl" src="/cat.jpg" alt="" />
          <h2 className="mx-2.5">Cat Gamer call of Duty | BGMI</h2>
          <p className="mx-2.5 truncate ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quaerat!</p>
          <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h.svg" alt="" />
        </div>
        <div className="card group relative w-55 h-65 rounded-2xl hover:bg-slate-800">
          <img className="w-50 h-36 mx-auto my-2.5 rounded-xl" src="/dog.jpg" alt="" />
          <h2 className="mx-2.5">Dog Gamer call of Duty | BGMI</h2>
          <p className="mx-2.5 truncate ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quaerat!</p>
          <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h.svg" alt="" />
        </div>
        <div className="card group relative w-55 h-65 rounded-2xl hover:bg-slate-800">
          <img className="w-50 h-36 mx-auto my-2.5 rounded-xl" src="/dog.jpg" alt="" />
          <h2 className="mx-2.5">Dog Gamer call of Duty | BGMI</h2>
          <p className="mx-2.5 truncate ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quaerat!</p>
          <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h.svg" alt="" />
        </div>
        <div className="card group relative w-55 h-65 rounded-2xl hover:bg-slate-800">
          <img className="w-50 h-36 mx-auto my-2.5 rounded-xl" src="/dog.jpg" alt="" />
          <h2 className="mx-2.5">Dog Gamer call of Duty | BGMI</h2>
          <p className="mx-2.5 truncate ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quaerat!</p>
          <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h.svg" alt="" />
        </div>
        <div className="card group relative w-55 h-65 rounded-2xl hover:bg-slate-800">
          <img className="w-50 h-36 mx-auto my-2.5 rounded-xl" src="/dog.jpg" alt="" />
          <h2 className="mx-2.5">Dog Gamer call of Duty | BGMI</h2>
          <p className="mx-2.5 truncate ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quaerat!</p>
          <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h.svg" alt="" />
        </div>
        
        </div>
        
      </div>
      <div className="Topic  mx-6 my-2.5 flex flex-col gap-3">
        <span className="text-xl font-bold">Explore Topics</span>
        <div className="Topics-1 flex gap-5">
          <div className="flex  items-baseline-last justify-between w-61 h-22 border-2 border-blue-600 cursor-pointer text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg">Music
            <img className="w-5 h-5" src="/Music.png" alt="" />
          </div>
          <div className="flex items-baseline-last justify-between w-61 h-22 border-2 border-blue-600 cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg">Podcast and Shows
            <img className="w-5 h-5" src="/mic.png" alt="" />
          </div>
          <div className="flex items-baseline-last justify-between w-61 h-22 border-2 border-blue-600 cursor-pointer text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg">Visual Arts
            <img className="w-5 h-5" src="/Arts.png" alt="" />
          </div>
          <div className="flex items-baseline-last justify-between w-61 h-22 border-2 border-blue-600 cursor-pointer text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg">Video Games
            <img className="w-5 h-5" src="/VG.png" alt="" />
          </div>
          <div className="flex items-baseline-last justify-between w-61 h-22 border-2 border-blue-600 cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg">Tabletop Games
            <img className="w-5 h-5" src="/TT.png" alt="" />
          </div>
          </div>
          <div className="Topics-2 flex gap-5 mb-2.5">
          <div className="flex items-baseline-last justify-between w-61 h-22 border-2 border-blue-600 cursor-pointer text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg">Apps and Software
            <img className="w-6 h-6" src="/Software.png" alt="" />
          </div>
          <div className="flex items-baseline-last justify-between w-61 h-22 border-2 border-blue-600 cursor-pointer text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg">Handicrafts
            <img className="w-5 h-5" src="/HC.png" alt="" />
          </div>
          <div className="flex items-baseline-last justify-between w-61 h-22 border-2 border-blue-600 cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg">LifeStyle
            <img className="w-5 h-5" src="/Cup.png" alt="" />
          </div>
          <div className="flex items-baseline-last justify-between w-61 h-22 border-2 border-blue-600 cursor-pointer text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg">Social Impact
            <img className="w-5 h-5" src="/SI.png" alt="" />
          </div>
          <div className="flex items-baseline-last justify-between w-61 h-22 border-2 border-blue-600 cursor-pointer text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg">Creative Writings
            <img className="w-6 h-6" src="/Write.png" alt="" />
          </div>
          </div>
        
      </div>
    </div>
  )
}

export default page
