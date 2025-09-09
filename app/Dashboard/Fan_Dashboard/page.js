"use client"
import React from 'react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
const page = () => {
  const [Count, setCount] = useState(0)
  const likeRef =useRef()
  const scrollRef = useRef(null)
  const [scrollLeft, setscrollLeft] = useState(false)
  const [scrollRight, setscrollRight] = useState(false)

  const Like =()=>{
    if (likeRef.current.src.includes("/heart.svg")) {
      likeRef.current.src ="/heart_F.svg"
      setCount (prev=>prev+1)
    }
    else{
      likeRef.current.src = "/heart.svg"
      setCount (prev=> prev-1)
    }
  }
  

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const check = () => {
      const tolerance = 2
      setscrollLeft(el.scrollLeft > tolerance)
      setscrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - tolerance)
    }
    check()
    el.addEventListener("scroll", check)
    window.addEventListener("resize", check)
    return () => {
      el.removeEventListener("scroll", check)
      window.removeEventListener("resize", check)
    }
  }, [])
  const scrollBy = (dir = 1) => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.38
    el.scrollBy({ left: dir * amount, behavior: "smooth" })
  }
  return (

    <div className="overflow-y-auto behavior-smooth mb-20">
      <div className="h-[26vh] mx-5 my-2.5 text-lg font-bold flex flex-col ">
        <div className="flex justify-between">
          <div className="flex ">
            <span>Memberships</span>
            <Link href={"/Dashboard/Fan_Dashboard/Memberships"}>
              <button className="cursor-pointer" >
                <img className="w-6 h-6 mt-1 " src="/arrow.svg" alt="" />
              </button>
            </Link>
          </div>
          <div className="flex gap-3">
            <button onClick={() => scrollBy(-1)} disabled={!scrollLeft} className="disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"><img className="w-7 h-7 " src="/arrow_L.svg" alt="" /></button>
            <button onClick={() => scrollBy(+1)} disabled={!scrollRight} className="disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"><img className="w-7 h-7 " src="/arrow_R.svg" alt="" /></button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-7.5 overflow-hidden ">
          <div className="pro shrink-0 group relative w-32 h-40 rounded-2xl hover:bg-slate-800">
            <img className="w-28 h-26 mx-auto mt-2 rounded-full border-4 border-slate-700" src="/dog.jpg" alt="" />
            <h2 className="mx-2 text-sm text-center">Dog Gamer call of Duty | BGMI</h2>
            <img className="absolute right-1 top-3 opacity-0 group-hover:opacity-100 transition-opacity " src="/more_h_w.svg" alt="" />
          </div>
          <div className="pro shrink-0 group relative w-32 h-40 rounded-2xl hover:bg-slate-800">
            <img className="w-28 h-26 mx-auto mt-2 rounded-full border-4 border-slate-700" src="/Horse.png" alt="" />
            <h2 className="mx-2 text-sm">Youtube Creator</h2>
            <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h_w.svg" alt="" />
          </div>
          <div className="pro shrink-0 group relative w-32 h-40 rounded-2xl hover:bg-slate-800">
            <img className="w-28 h-26 mx-auto mt-2 rounded-full border-4 border-slate-700" src="/Rabbit.jpg" alt="" />
            <h2 className="mx-2 text-sm">Animal Activist</h2>
            <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h_w.svg" alt="" />
          </div>
          <div className="pro shrink-0 group relative w-32 h-40 rounded-2xl hover:bg-slate-800">
            <img className="w-28 h-26 mx-auto mt-2 rounded-full border-4 border-slate-700" src="/cat.jpg" alt="" />
            <h2 className="mx-2 text-sm">Cat Gamer call of Duty | BGMI</h2>
            <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h_w.svg" alt="" />
          </div>
          <div className="pro shrink-0 group relative w-32 h-40 rounded-2xl hover:bg-slate-800">
            <img className="w-28 h-26 mx-auto mt-2 rounded-full border-4 border-slate-700" src="/dog.jpg" alt="" />
            <h2 className="mx-2 text-sm text-center">Dog Gamer call of Duty | BGMI</h2>
            <img className="absolute right-1 top-3 opacity-0 group-hover:opacity-100 transition-opacity " src="/more_h_w.svg" alt="" />
          </div>
          <div className="pro shrink-0 group relative w-32 h-40 rounded-2xl hover:bg-slate-800">
            <img className="w-28 h-26 mx-auto mt-2 rounded-full border-4 border-slate-700" src="/Horse.png" alt="" />
            <h2 className="mx-2 text-sm">Youtube Creator</h2>
            <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h_w.svg" alt="" />
          </div>
          <div className="pro shrink-0 group relative w-32 h-40 rounded-2xl hover:bg-slate-800">
            <img className="w-28 h-26 mx-auto mt-2 rounded-full border-4 border-slate-700" src="/Rabbit.jpg" alt="" />
            <h2 className="mx-2 text-sm">Animal Activist</h2>
            <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h_w.svg" alt="" />
          </div>
          <div className="pro shrink-0 group relative w-32 h-40 rounded-2xl hover:bg-slate-800">
            <img className="w-28 h-26 mx-auto mt-2 rounded-full border-4 border-slate-700" src="/cat.jpg" alt="" />
            <h2 className="mx-2 text-sm">Cat Gamer call of Duty | BGMI</h2>
            <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h_w.svg" alt="" />
          </div>
          <div className="pro shrink-0 group relative w-32 h-40 rounded-2xl hover:bg-slate-800">
            <img className="w-28 h-26 mx-auto mt-2 rounded-full border-4 border-slate-700" src="/dog.jpg" alt="" />
            <h2 className="mx-2 text-sm text-center">Dog Gamer call of Duty | BGMI</h2>
            <img className="absolute right-1 top-3 opacity-0 group-hover:opacity-100 transition-opacity " src="/more_h_w.svg" alt="" />
          </div>
          <div className="pro shrink-0 group relative w-32 h-40 rounded-2xl hover:bg-slate-800">
            <img className="w-28 h-26 mx-auto mt-2 rounded-full border-4 border-slate-700" src="/Horse.png" alt="" />
            <h2 className="mx-2 text-sm">Youtube Creator</h2>
            <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h_w.svg" alt="" />
          </div>
          <div className="pro shrink-0 group relative w-32 h-40 rounded-2xl hover:bg-slate-800">
            <img className="w-28 h-26 mx-auto mt-2 rounded-full border-4 border-slate-700" src="/Rabbit.jpg" alt="" />
            <h2 className="mx-2 text-sm">Animal Activist</h2>
            <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h_w.svg" alt="" />
          </div>
          <div className="pro shrink-0 group relative w-32 h-40 rounded-2xl hover:bg-slate-800">
            <img className="w-28 h-26 mx-auto mt-2 rounded-full border-4 border-slate-700" src="/cat.jpg" alt="" />
            <h2 className="mx-2 text-sm">Cat Gamer call of Duty | BGMI</h2>
            <img className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity" src="/more_h_w.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="h-0.5 border-2 border-slate-700 mt-3"></div>
      <div className="latest">
        <h1 className="text-2xl text-center  font-extrabold">Latest</h1>
        <div className="posts">
          <div className="w-[50%] h-auto pb-8 mx-auto mt-5 bg-slate-800 rounded-2xl">
            <div className="img flex items-center m-3 ">
              <img className="w-8 h-8   mt-2 rounded-sm " src="/Horse.png" alt="" />
              <h2 className="mx-2 text-sm">Youtube Creator</h2>
            </div>
            <img className="w-[96%]   mx-auto border-2 border-slate-700" src="/post.png" alt="" />
            <div className="m-3  max-h-25 overflow-hidden  ">
              <h2 className="text-xl">Lorem ipsum dolor sit amet.</h2>
              <span className="text-sm text-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto delectus porro consequatur odio id eum natus aut nisi quod enim pariatur corporis amet, ipsum reprehenderit nobis optio dolorum beatae ad placeat incidunt sapiente eligendi architecto. Molestias iusto consequatur minus. Illo optio distinctio magni blanditiis voluptatum cum magnam voluptate eius inventore laboriosam similique autem ea sequi, dolores, quibusdam at error. Ratione, vitae sint. Mollitia fuga temporibus, molestias optio voluptas fugit dicta aspernatur, repudiandae in commodi sit ab possimus doloribus expedita dolore odit itaque impedit. Odio sed iusto amet odit accusantium minima tempore officiis commodi? Nesciunt quasi maxime laboriosam cum ipsum!</span>
            </div>
            <div className="m-3 mt-5 flex gap-5 ">
              <button onClick={Like}  className="flex items-center gap-1">
                <img ref={likeRef} className="w-8 h-8" src="/heart.svg" alt="" />
                <span>{Count}</span>
              </button>
              <button><img className="w-8 h-8" src="/comment.svg" alt="" /></button>
              <button><img className="w-8 h-8" src="/Share.svg" alt="" /></button>
              <button><img className="w-8 h-8" src="/more_h_w.svg" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
