"use client"
import React from 'react'
import { useState } from 'react'
const page = () => {
    const [Show, setShow] = useState(false)
    const [Show2, setShow2] = useState(false)
    const [selected, setselected] = useState("6 Months")
    const [select, setselect] = useState("Past 30 Days")

    const handleSelected = (Option) => {
        setselected(Option)
        setShow(false)
    }

    const handleSelect = (Option1) => {
        setselect(Option1)
        setShow2(false)
    }
    return (
        <div className="pt-10 pl-30">
            <h1 className="text-2xl font-bold ">Statistics</h1>
            <div className="Earning mt-8 w-[80%] h-[70vh] bg-slate-800 rounded-lg">
                <div className="flex gap-6 ">
                    <div className="mt-5 ml-8">
                    <span className="text-lg">Total Earning in the Period</span>
                    <span className="flex text-3xl items-center "><img className="h-[30px]" src="/Currency.svg" alt="" />0.00</span>
                    </div>
                    <div className="relative inline-block mt-5">
                        <button id="dropdownDefaultButton" onClick={() => setShow(!Show)} data-dropdown-toggle="dropdown" className="w-38 cursor-pointer bg-slate-800 border-2 border-slate-500 rounded-lg px-2 py-1" type="button"><span className="flex gap-10">{selected}<img src="/arrow_d.svg" alt="" /></span></button>
                        <div id="dropdown" className={`absolute z-10 ${Show ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-30 dark:bg-slate-700`}>
                            <ul className="py-2 text-sm text-white" aria-labelledby="dropdownDefaultButton">
                                <li onClick={() => handleSelected("3 Months")} className={`block hover:bg-purple-500 ${selected === "3 Months" ? "bg-purple-500" : ""}  px-4 py-2 `}>3 Months</li>
                                <li onClick={() => handleSelected("6 Months")} className={`block hover:bg-purple-500 ${selected === "6 Months" ? "bg-purple-500" : ""}  px-4 py-2 `}>6 Months</li>
                                <li onClick={() => handleSelected("12 Months")} className={`block hover:bg-purple-500 ${selected === "12 Months" ? "bg-purple-500" : ""}  px-4 py-2 `}>12 Months</li>
                                <li onClick={() => handleSelected("All Time")} className={`block hover:bg-purple-500 ${selected === "All Time" ? "bg-purple-500" : ""}  px-4 py-2 `}>All Time</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="graph relative h-[70%] flex flex-col justify-between">
                    <div className="absolute h-20 rounded-xl flex justify-center items-center top-[40%] left-[35%] z-30 bg-slate-700">
                        <img className="pl-3 w-10 h-10" src="/Chart.svg" alt=""/>
                        <span className="pr-3 text-[16px]">Your Earning Graph will appear hear</span>
                    </div>
                    <div className="flex gap-2 mt-2 ">
                        <div className="h-0.5 w-[90%] ml-8 border-2 border-slate-700 mt-3"></div>
                        <span className="flex text-sm items-center "><img className="h-[13px]" src="/Currency.svg" alt="" />2000</span>
                    </div>
                    <div className="flex gap-2 mt-2 ">
                        <div className="h-0.5 w-[90%] ml-8 border-2 border-slate-700 mt-3"></div>
                        <span className="flex text-sm items-center "><img className="h-[13px]" src="/Currency.svg" alt="" />1000</span>
                    </div>
                    <div className="flex gap-2 mt-2 ">
                        <div className="h-0.5 w-[90%] ml-8 border-2 border-slate-700 mt-3"></div>
                        <span className="flex text-sm items-center "><img className="h-[13px]" src="/Currency.svg" alt="" />0</span>
                    </div>
                </div>
                <div className="w-[93%] mx-5 flex justify-between" ><span>Jan</span><span>Dec</span></div>
            </div>
            <div className="Traffic mt-8 mb-10 w-[80%] h-[70vh] bg-slate-800 rounded-lg">
                <div className="flex gap-6 ">
                    <div className="flex flex-col mt-5 ml-8">
                    <span className="text-lg">Total visits</span>
                    <span className="text-3xl">0</span>
                    </div>
                    <div className="relative inline-block mt-5">
                        <button id="dropdownDefaultButton" onClick={() => setShow2(!Show2)} data-dropdown-toggle="dropdown" className="w-42 cursor-pointer bg-slate-800 border-2 border-slate-500 rounded-lg px-2 py-1" type="button"><span className="w-50 flex gap-10">{select}<img src="/arrow_d.svg" alt="" /></span></button>
                        <div id="dropdown" className={`absolute z-10 ${Show2 ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-30 dark:bg-slate-700`}>
                            <ul className="py-2 text-sm text-white" aria-labelledby="dropdownDefaultButton">
                                <li onClick={() => handleSelect("Past 1 Day")} className={`block hover:bg-purple-500 ${select === "Past 1 Day" ? "bg-purple-500" : ""}  px-4 py-2 `}>Past 1 Day</li>
                                <li onClick={() => handleSelect("Past 7 Days")} className={`block hover:bg-purple-500 ${select === "Past 7 Days" ? "bg-purple-500" : ""}  px-4 py-2 `}>Past 7 Days</li>
                                <li onClick={() => handleSelect("Past 30 Days")} className={`block hover:bg-purple-500 ${select === "Past 30 Days" ? "bg-purple-500" : ""}  px-4 py-2 `}>Past 30 Days</li>
                                <li onClick={() => handleSelect("Past 12 Months")} className={`block hover:bg-purple-500 ${select === "Past 12 Months" ? "bg-purple-500" : ""}  px-4 py-2 `}>Past 12 Months</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="graph-2 relative h-[70%] flex flex-col justify-between">
                    <div className="absolute h-20 rounded-xl flex justify-center items-center top-[40%] left-[35%] z-30 bg-slate-700">
                        <img className="pl-3 w-10 h-10" src="/Chart.svg" alt=""/>
                        <span className="pr-3 text-[16px]">Your Traffic Growth will appear hear</span>
                    </div>
                    <div className="absolute bottom-0 h-0.5 w-[90%] ml-8 border-2 border-slate-700 mt-3"></div>

                </div>
                <div className="w-[93%] mx-5 flex justify-between" ><span>Sun</span><span>Sat</span></div>
            </div>
        </div>
    )
}

export default page