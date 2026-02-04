"use client"
import React from 'react'
import { useRef } from 'react'
const page = () => {
  const ref = useRef()
  const toggle = () =>{
    if (ref.current.src.includes("/Off.svg")) {
      ref.current.src = "/On.svg"
    }
    else{
      ref.current.src ="/Off.svg"
    }
  }
  return (
    <div className="w-[50%] mx-auto p-5">
      <h1 className="text-[26px] font-bold pb-5">New Tier</h1>
      <div className="bg-slate-800 p-3 mb-5 pb-20 flex flex-col gap-5 rounded-2xl">
        <h2 className="text-xl font-bold ">Customize Tier</h2>
        <div className="flex flex-col gap-2">
          <span className=" font-bold">Name</span>
          <input type="text" className="px-2 py-1 border-2 rounded-xl border-slate-600" placeholder="Tier Name" />
        </div>
         <div className="flex flex-col gap-2">
          <span className=" font-bold">Monthly Price</span>
          <div className="relative ">
          <input type="text" className="w-full px-5 py-1 border-2 rounded-xl border-slate-600" placeholder="Price" />
          <img className="absolute top-2 w-5 h-5" src="/Currency.svg" alt="" />
          </div>
        </div>
         <div className="flex flex-col gap-2">
          <span className=" font-bold">Tier Description</span>
          <input type="text" className="px-2 pb-20 pt-1 border-2 rounded-xl border-slate-600" placeholder="Describe the benefit and exclusive content after joining this tier." />
        </div>
        <div className="flex flex-col gap-2">
          <span className=" font-bold">Tier Benefits</span>
          <span>Add benefits for the Members of this Tier.</span>
          <button className="w-40 p-2 border-2 rounded-xl flex gap-2 items-center">
          <img src="/add.svg" alt="" />
          <span>Add Benefit</span>
          </button>
        </div>
         <div className="flex flex-col gap-2 pt-2">
          <div className="flex justify-between items-center">
          <span className=" font-bold">Free Trial</span>
          <button onClick={toggle} >
          <img className="w-10 h-8 cursor-pointer" ref={ref} src="/Off.svg" alt="" />
          </button>
          </div>
          <span>Allow members to try this tier for 7 days before charging them.</span>
        </div>
      </div>
      <div className="flex justify-between mb-5">
      <button className="w-[20%] border-2 rounded-2xl px-2 py-1 border-slate-500 bg-slate-500 cursor-pointer">Cancel</button>
      <button className="w-[20%] border-2 rounded-2xl px-2 py-1 border-purple-500 bg-purple-500 cursor-pointer">Save</button>
      </div>
    </div>
  )
}

export default page
