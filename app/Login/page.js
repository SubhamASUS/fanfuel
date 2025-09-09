"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {
    const {data: session ,status} = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === "authenticated") {
            router.replace("/Dashboard/Fan_Dashboard")
        }
    },[status , router])
    return (
        <div className="h-[83vh] mt-16">
            <div className="fixed top-0 left-0 z-[-2] w-full min-h-full bg-slate-950"></div>
            <div className="Log w-100 h-130 mx-auto bg-slate-800 rounded-2xl">
                <div className="flex justify-center items-center gap-3 ">
                    <img className="w-13 h-10 rounded-lg mt-2" src="logo (1).png" alt="" />
                    <span className="text-white text-xl font-bold mt-2">FanFuel</span>
                </div>
                <h1 className="text-3xl text-blue-500 font-bold text-center">Log In</h1>
                <div className="flex flex-col justify-center items-center mt-3 gap-2">
                    <input className="cursor-pointer bg-gray-300 focus:bg-white focus:outline-none w-80 m-3 rounded-lg h-10 p-3" type="text" placeholder="Enter your Email" />
                    <input className="cursor-pointer bg-gray-300 focus:bg-white focus:outline-none w-80 mx-3 mb-3 rounded-lg h-10 p-3" type="text" placeholder="Enter your Password" />
                    <button type="button" className="w-80 cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log In</button>
                </div>
                <div className="Or flex justify-between items-center mt-3">
                    <div className="w-35 h-0.5 border-1 border-slate-500 ml-2 my-3"></div>
                    <span className="text-xs text-gray-300">Or Log In with</span>
                    <div className="w-35 h-0.5 border-1 border-slate-500 mr-2 my-3"></div>
                </div>
                <div className="social-button mx-10 mt-3 flex flex-col gap-3">
                    <button className="flex gap-5 items-center px-3 py-1 w-80 cursor-pointer bg-purple-500 rounded-lg" onClick={()=>{signIn("google"),{callbackUrl: "http://localhost:3000/Dashboard/Fan_Dashboard"}}}>
                        <img className="w-10 h-10 rounded-2xl" src="Google.gif" alt="" />
                        <span className="font-bold">Log in with Google</span>
                    </button>
                    <button className="flex gap-5 items-center px-3 py-1 w-80  rounded-lg cursor-pointer bg-purple-500" onClick={()=>{signIn("github"),{callbackUrl: "http://localhost:3000/Dashboard/Fan_Dashboard"}}}>
                        <img className="w-10 h-10 rounded-2xl" src="Github.gif" alt="" />
                        <span className="font-bold">Log in with GitHub</span>
                    </button>
                </div>
                <div className="mt-5 text-center text-xm text-gray-300">Not Having an account ? <Link href={"/SignUp"} className="text-blue-600 border-b-2 border-blue-600">Sign Up </Link> </div>
            </div>
        </div>
    )
}

export default Login
