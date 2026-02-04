"use client"
import React from 'react'
const page = () => {
  return (
    <div className="flex h-[100vh]">
      <div className="left w-96 border-r-2 border-slate-700 bg-slate-900 p-5 flex flex-col gap-3">
        <h2 className="text-[22px] font-bold">Edit Your Page</h2>
        <div className="h-0.5 border-2 border-slate-700 mt-3"></div>
        <button className="text-lg font-bold flex  items-center justify-between">Details <img src="/arrow.svg" alt="" /></button>
        <div className="h-0.5 border-2 border-slate-700 mt-3"></div>
        <button className="text-lg font-bold flex  items-center justify-between">Layout <img src="/arrow.svg" alt="" /></button>

      </div>
      <div className="right w-full flex-1 p-5 ">
        <div className="border-2 pb-10 border-slate-700 h-[85vh] overflow-auto no-scrollbar rounded-2xl">
          <div className="h-15 px-5 py-2 flex items-center-safe justify-between">
            <div className="flex items-center gap-2 mb-5">
              <img className="w-10 h-10 border-2 border-slate-700" src="/dog.jpg" alt="" />
              <h2 className="text-lg font-bold">Freelancer</h2>
            </div>
            <h2 className="text-sm font-bold ">Home</h2>
          </div>
          <div className="h-0.5 border-2 border-slate-700"></div>
          <div className="relative">
            <img className="w-full h-90 border-b-2 border-slate-700 " src="/WebDesign.jpg" alt="" />
            <div className="absolute inset-0 left-30 top-50">
              <h2 className="text-3xl font-bold">Freelancer</h2>
              <span className="text-sm text-slate-400">0 Posts</span>
              <div className=" flex items-center gap-3">
                <button className="w-30  border-2 bg-white border-white text-black text-sm rounded-lg mt-2  p-1 font-bold">Join Free</button>
                <button className="w-40  border-2 bg-white border-white text-black text-sm rounded-lg mt-1  p-1 font-bold">Membership Options</button>
              </div>
            </div>
          </div>
          <div className="w-[60%] mx-auto mt-5">
            <span className="text-lg font-bold">Latest Post</span>
            <div className="h-40 border-2 text-slate-400 text-center border-slate-700 rounded-xl">Your Post will be shown here</div>
          </div>
          <div className="w-[60%] mx-auto mt-5">
            <span className="text-lg font-bold">Popular Post</span>
            <div className="h-40 border-2  text-slate-400 text-center border-slate-700 rounded-xl">Your Popular post will be seen here </div>
          </div>
          <div className="w-[60%] mx-auto mt-5">
            <span className="text-lg font-bold">Collections</span>
            <div className="h-40 border-2  text-slate-400 text-center border-slate-700 rounded-xl"> Your Collections will be show here</div>
          </div>
          <div className="h-0.5 border-2 border-slate-700 mt-3"></div>
          <div className="">
            <span className="flex px-10 pt-3 items-center gap-3 text-slate-400 text-sm">
              <span className="flex items-center"><img className="w-4 h-4" src="/Currency.svg" alt="" />INR</span>
              <span className="text-xl">&#183;</span>
              <span>English(United States)</span>
            </span>
            <span className="px-10  flex items-center gap-3 text-lg">Fanfuel<span className="text-sm text-slate-400">&copy; 2025 Fanfuel</span></span>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-end">
          <button className="w-30 cursor-pointer  border-2 bg-slate-800 border-slate-800  text-sm rounded-lg mt-2 px-2  py-1 font-bold">Cancel</button>
          <button className="w-30 cursor-pointer  border-2 bg-purple-600 border-purple-600  text-sm rounded-lg mt-1 px-2 py-1 font-bold">Publish</button>
        </div>
      </div>
    </div>
  )
}

export default page
