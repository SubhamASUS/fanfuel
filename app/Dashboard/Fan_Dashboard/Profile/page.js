"use client"
import React from 'react'
import { useState } from 'react'

export default function page() {
  const [open, setopen] = useState(false)
   const [open1, setopen1] = useState(false)
  const [selected, setselected] = useState("English(us")
  const [Curr, setCurr] = useState("Choose Currency")
  const handleSelect = (lang) => {
    setselected(lang)
    setopen(false)
  }
  const handleCurr = (lang) => {
    setCurr(lang)
    setopen1(false)
  }
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center ">Profile</h1>
      <div className="info mx-auto w-[55%] h-[78vh] bg-slate-800  mt-5 p-2 rounded-2xl " >
        <h2 className="font-bold text-xl text-center">My Information</h2>
        <div className="img relative w-35 mx-auto mt-3">
          <img className="h-35 w-35 border-2 border-slate-700 rounded-full" src="/dog.jpg" alt="" />
          <button className="cursor-pointer absolute right-1 bottom-1 ">
            <img className="h-9 rounded-3xl border-2 border-slate-700 bg-gray-300 p-1 " src="/edit.svg" alt="" />
          </button>
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <span className="font-bold text-sm">Display Name</span>
          <input className="border-2 border-slate-500 rounded-2xl px-2.5 py-1" type="text" />
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <span className="font-bold text-sm">Email</span>
          <input className="border-2 border-slate-500 rounded-2xl px-2.5  py-1" type="text" />
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <span className="font-bold text-sm">Nationality </span>
          <input className="border-2 border-slate-500 rounded-2xl px-2.5 py-1" type="text" />
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <span className="font-bold text-sm">State of residence</span>
          <input className="border-2 border-slate-500 rounded-2xl px-2.5 py-1" type="text" />
        </div>
        <div className="save flex justify-center   items-center" >
          <button type="button" className="w-20 mt-3 cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">save</button>
        </div>
      </div>
      <div className="info mx-auto w-[55%] h-[50vh] bg-slate-800  mt-5 p-2 rounded-2xl " >
        <h2 className="font-bold text-xl text-center">Social Accounts</h2>
        <p className="text-sm mt-3 text-slate-400">Add your social media accounts for engagement with communities.You can disconnect your account any time you want. </p>
        <div className="mt-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img className="w-10 h-10" src="/youtube.png" alt="" />
            <span className="font-bold text-xl">Youtube</span>
          </div>
          <button className="border-2 border-slate-500 p-1 font-bold rounded-2xl">Connect</button>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img className="w-10 h-10" src="/instagram.png" alt="" />
            <span className="font-bold text-xl">Instgram</span>
          </div>
          <button className="border-2 border-slate-500 p-1 font-bold rounded-2xl">Connect</button>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img className="w-10 h-10" src="/facebook.png" alt="" />
            <span className="font-bold text-xl">Facebook</span>
          </div>
          <button className="border-2 border-slate-500 p-1 font-bold rounded-2xl">Connect</button>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img className="w-10 h-10" src="/twitter.png" alt="" />
            <span className="font-bold text-xl">Twitter</span>
          </div>
          <button className="border-2 border-slate-500 p-1 font-bold rounded-2xl">Connect</button>
        </div>
      </div>
      <div className="info mx-auto w-[55%] h-[35vh] bg-slate-800  mt-5 p-2 rounded-2xl " >
        <h2 className="font-bold text-xl text-center">Language Preference</h2>
        <p className="text-sm mt-3 text-slate-400">Choose your preffered language</p>

        <button id="dropdownDefaultButton" onClick={() => setopen(!open)} data-dropdown-toggle="dropdown" className="w-full mt-3 text-white border-2 border-slate-700 focus:ring-1 focus:outline-none  font-medium rounded-lg text-l px-5 py-2.5 text-center inline-flex justify-between items-center " type="button">{selected}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>
        <div id="dropdown" className={`z-10 ${open ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <button onClick={() => handleSelect("English(us)")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English(us)</button>
            </li>
            <li>
              <button onClick={() => handleSelect("Hindi")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hindi</button>
            </li>
            <li>
              <button onClick={() => handleSelect("Tamil")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tamil</button>
            </li>
            <li>
              <button onClick={() => handleSelect("Telgu")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Telgu</button>
            </li>
            <li>
              <button onClick={() => handleSelect("Marathi")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Marathi</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="info mx-auto w-[55%] h-[20vh] bg-slate-800  mt-5 p-2 rounded-xl " >
        <h2 className="font-bold text-xl text-center">Currency Preference</h2>
        <p className="text-sm mt-3 text-slate-400">Choose your preffered Currency you like to receive aur give.</p>

        <button id="dropdownDefaultButton" onClick={()=>setopen1(!open1)} data-dropdown-toggle="dropdown" className="w-50 mt-3 text-white border-2 border-slate-700 focus:ring-1 focus:outline-none  font-medium rounded-lg text-l px-5 py-2.5 text-center inline-flex justify-between items-center " type="button">{Curr}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>
        <div id="dropdown" className={`z-10 ${open1?"block":"hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <button onClick={()=> handleCurr("USD")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">USD</button>
            </li>
            <li>
              <button onClick={()=> handleCurr("INR")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">INR</button>
            </li>
            <li>
              <button onClick={()=> handleCurr("Pound")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pound</button>
            </li>
            <li>
              <button onClick={()=> handleCurr("Euro")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Euro</button>
            </li>
            <li>
              <button onClick={()=> handleCurr("AUD")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">AUD</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
