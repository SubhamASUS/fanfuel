"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../firebase.js';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const router = useRouter();
    const auth = getAuth(app);
    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, Password)
            .then((value) => {
                console.log("signin sucess")
                router.push("/Dashboard/Fan_Dashboard");
            })
            .catch((err) => console.log(err));
    };
    const GoogleProvider = new GoogleAuthProvider
    const signInWithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
            .then((value) => {
                router.push("/Dashboard/Fan_Dashboard");
            })
            .catch((err) => console.log(err));
    }
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
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className="cursor-pointer bg-gray-300 focus:bg-white focus:outline-none w-80 m-3 rounded-lg h-10 p-3" type="text" placeholder="Enter your Email" />
                    <input onChange={(e) => setPassword(e.target.value)} value={Password} className="cursor-pointer bg-gray-300 focus:bg-white focus:outline-none w-80 mx-3 mb-3 rounded-lg h-10 p-3" type="text" placeholder="Enter your Password" />
                    <button onClick={signInUser} type="button" className="w-80 cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log In</button>
                </div>
                <div className="Or flex justify-between items-center mt-3">
                    <div className="w-35 h-0.5 border-1 border-slate-500 ml-2 my-3"></div>
                    <span className="text-xs text-gray-300">Or Log In with</span>
                    <div className="w-35 h-0.5 border-1 border-slate-500 mr-2 my-3"></div>
                </div>
                <div className="social-button mx-10 mt-3 flex flex-col gap-3">
                    <button onClick={signInWithGoogle} className="flex gap-5 items-center px-3 py-1 w-80 cursor-pointer bg-purple-500 rounded-lg">
                        <img className="w-10 h-10 rounded-2xl" src="Google.gif" alt="" />
                        <span className="font-bold">Log in with Google</span>
                    </button>
                    <button className="flex gap-5 items-center px-3 py-1 w-80  rounded-lg cursor-pointer bg-purple-500">
                        <img className="w-10 h-10 rounded-2xl" src="Github.gif" alt="" />
                        <span className="font-bold">Log in with GitHub</span>
                    </button>
                </div>
                <div className="mt-5 text-center text-xm text-gray-300">Not Having an account ? <Link href={"/SignUp"} className="text-blue-600 border-b-2 border-blue-600">Sign Up </Link> </div>
            </div>
        </div>
    )
}
