"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import { getAuth , createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { app } from '../firebase.js';
export default function SignUp() {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const auth = getAuth(app);
    const createUser = ()=>{
        createUserWithEmailAndPassword(auth , email, Password);
    };
    const GoogleProvider = new GoogleAuthProvider
        const signUpWithGoogle =()=>{
            signInWithPopup(auth, GoogleProvider)
        }
    return (
        <div className="h-[83vh] mt-16">
            <div className="fixed top-0 left-0 z-[-2] w-full min-h-full bg-slate-950"></div>
            <div className="Log w-100 h-130 mx-auto bg-slate-800 rounded-2xl">
                <div className="flex justify-center items-center gap-3 ">
                    <img className="w-13 h-10 rounded-lg mt-2" src="logo (1).png" alt="" />
                    <span className="text-white text-xl font-bold mt-2">FanFuel</span>
                </div>
                <h1 className="text-3xl text-blue-500 font-bold text-center">Sign Up</h1>
                <div className="flex flex-col justify-center items-center mt-3 gap-2">
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} className=" cursor-pointer bg-gray-300 focus:bg-white focus:outline-none w-80 m-3 rounded-lg h-10 p-3" type="text" placeholder="Enter your Email" />
                    <input onChange={(e)=> setPassword(e.target.value)} value={Password} className=" cursor-pointer bg-gray-300 focus:bg-white focus:outline-none w-80 mx-3 mb-3 rounded-lg h-10 p-3" type="text" placeholder="Enter your Password" />
                    <button onClick={createUser} type="button" className="w-80 text-white bg-gradient-to-br  cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
                </div>
                <div className="Or flex justify-between items-center mt-3">
                    <div className="w-35 h-0.5 border-1 border-slate-500 ml-2 my-3"></div>
                    <span className="text-xs text-gray-300">Or Sign Up with</span>
                    <div className="w-35 h-0.5 border-1 border-slate-500 mr-2 my-3"></div>
                </div>
                <div className="social-button mx-10 mt-3 flex flex-col gap-3">
                    <button onClick={signUpWithGoogle} className="flex gap-5 items-center px-3 py-1 w-80  cursor-pointer bg-purple-500 rounded-lg">
                        <img className="w-10 h-10 rounded-2xl" src="Google.gif" alt="" />
                        <span className="font-bold">Sign Up with Google</span>
                    </button>
                    <button className="flex gap-5 items-center px-3 py-1 w-80  cursor-pointer bg-purple-500 rounded-lg">
                        <img className="w-10 h-10 rounded-2xl" src="Github.gif" alt="" />
                        <span className="font-bold">Sign Up with GitHub</span>
                    </button>
                </div>
                <div className="mt-5 text-center text-xm text-gray-300">Already Sign Up ? <Link href={"/Login"} className="text-blue-600 border-b-2 border-blue-600">Log In </Link> </div>
            </div>
        </div>
    )

}
