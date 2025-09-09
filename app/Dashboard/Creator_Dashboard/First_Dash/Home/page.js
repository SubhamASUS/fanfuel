"use client"
import React, {useState} from 'react'

const page = () => {
    const [Show, setShow] = useState(false)
  return (
    <div className=" w-[50%] mx-auto mr-80">
        <div className="flex justify-between ">
          <h2 className="text-[22px] font-bold">Home</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 bg-purple-500 border-2 border-purple-500 rounded-lg px-2 py-1">
              <img src="/add.svg" alt="" />
              <span> Create </span>
            </button>
            <div className="relative inline-block">
            <button id="dropdownDefaultButton" onClick={() => setShow(!Show)} data-dropdown-toggle="dropdown" className=" bg-purple-500 border-2 border-purple-500 rounded-lg px-2 py-1" type="button"><img className="w-6 h-6" src="/more_h_w.svg" alt="" />
            </button>
            <div id="dropdown" className={`absolute z-10 ${Show ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-30 dark:bg-slate-700`}>
              <ul className="py-2 text-sm text-slate-400 dark:text-slate-300" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white">View Page </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white">Edit Page</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white">Page Details</a>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        <div className="p-3 pb-8 mx-auto mt-5 bg-slate-800 rounded-xl">
          <h2 className="text-xl font-bold">Welcome to FanFuel</h2>
          <h3 className="text-slate-400">let's set up your page and start growing your Community.</h3>
          <div className="mt-8 flex items-center justify-between mb-10 ">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="/profile.svg" alt="" />
              <h2 className="text-lg font-bold">Set up your Profile</h2>
            </div>
            <button className="cursor-pointer flex items-center justify-center  "><img className="block border-2 rounded-full w-6 h-6" src="/arrow.svg" alt="" /></button>
          </div>
          <div className="mt-8 flex items-center justify-between mb-10 ">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="/post.svg" alt="" />
              <h2 className="text-lg font-bold">Create Post/Product</h2>
            </div>
            <button className="cursor-pointer flex items-center justify-center  "><img className="block border-2 rounded-full w-6 h-6" src="/arrow.svg" alt="" /></button>
          </div>
          <div className="mt-8 flex items-center justify-between mb-10 ">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="/Launch.svg" alt="" />
              <h2 className="text-lg font-bold">Publish your page</h2>
            </div>
            <button className="cursor-pointer flex items-center justify-center  "><img className="block border-2 rounded-full w-6 h-6" src="/arrow.svg" alt="" /></button>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="/promotion.svg" alt="" />
              <h2 className="text-lg font-bold">Promote your Profile</h2>
            </div>
            <button className="cursor-pointer flex items-center justify-center  "><img className="block border-2 rounded-full w-6 h-6" src="/arrow.svg" alt="" /></button>
          </div>
        </div>
      </div>
  )
}

export default page
