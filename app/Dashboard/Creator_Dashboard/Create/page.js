"use client"
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
const page = () => {
    const [value, setvalue] = useState("")
    const [error, seterror] = useState("")

    const handleChange =(e)=>{
        if(!value.trim()){
            e.preventDefault();
            seterror("Enter a name first");
        }else{
        seterror("");
        }
    }
  return (
    <div className="m-5">
      <img className="w-16 h-12" src="/logo (1).png" alt="" />
      <div className="w-[50%] mx-auto pt-20">
      <h1 className="w-[50%] mx-auto text-4xl font-bold text-purple-600 ">Let's start your Page</h1>
      <h2 className=" mt-3 text-lg text-center w-[65%] mx-auto">You can be creative or start with your name. You can always change the name later. </h2>
      <div className=" flex flex-col justify-center items-center mt-10 w-[50%] mx-auto gap-3 ">
      <input type="text" value={value} 
            onChange={(e) =>{
            setvalue(e.target.value); 
            seterror("");}} 
            className="border-2 border-amber-50 w-full rounded-lg px-2 py-1" placeholder="Your Creator name" />
            {error && <p className="text-red-500 text-lg">{error}</p>}
      <Link href={"/Dashboard/Creator_Dashboard/First_Dash/Home"} onClick={handleChange}><button  type="button" className=" cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center w-94">Continue</button></Link>
      </div>
      </div>
    </div>
  )
}

export default page




