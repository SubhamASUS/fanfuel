import React from 'react'

const page = () => {
  return (
    <div className="pt-10 pl-32">
      <h1 className=" text-3xl font-bold">Promotion</h1>
      <div className="mt-5 bg-slate-700 w-[80%] border-3 border-slate-500 rounded-2xl">
        <div className="pl-5 py-2">
        <h1 className="text-2xl font-semibold ">Remainders</h1>
        <span>Offers and remainders to turn fans into supporters & Keep the members in community </span>
        </div>
        <div className="h-0.5 border-2 border-slate-500 mb-2"></div>
        <div className="p-5 flex justify-between items-center">
          <div className="flex items-center gap-5 ">
            <img className="w-8 h-8" src="/group.svg" alt="" />
            <div>
            <h1 className="">Upgrade Offer</h1>
            <p>Automatically Send offers to free members to upgrade to paid membership</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-1 bg-slate-800 border-2 border-slate-800 rounded-lg px-2 py-1 cursor-pointer">Inactive</button>
            <img src="/arrow.svg" alt="" />
          </div>
        </div>
        <div className="p-5 flex justify-between items-center">
          <div className="flex items-center gap-5 ">
            <img className="w-8 h-8" src="/calendar.svg" alt="" />
            <div>
            <h1 className="">Annual Membership</h1>
            <p>Give discounts to the supporters to pay for a year of membership</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-1 bg-slate-800 border-2 border-slate-800 rounded-lg px-2 py-1 cursor-pointer">Inactive</button>
            <img src="/arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col  gap-5 bg-slate-700 w-[45%] border-3 border-slate-500 rounded-2xl">
      <div className="text-lg pl-5 pt-5 ">Share Your Page with your friends and followers </div>
      <div className=" pl-5 flex items-center hover:bg-slate-600"><img className="w-10 h-10 p-2" src="/link.svg" alt="" /><span className="font-semibold p-2">Copy Link</span></div>
      <div className=" pl-5 flex items-center hover:bg-slate-600"><img className="w-10 h-10 p-2" src="/instagram.png" alt="" /><span className="font-semibold p-2">Share on Instagram</span></div>
      <div className=" pl-5 flex items-center hover:bg-slate-600"><img className='w-10 h-10 p-2' src="/facebook.png" alt="" /><span className="font-semibold p-2">Share on Facebook</span></div>
      <div className=" pl-5 mb-5 flex items-center hover:bg-slate-600"><img className="w-10 h-10 p-2" src="/twitter.png" alt="" /><span className="font-semibold p-2">Share on Twitter</span></div>
      </div>
    </div>
  )
}

export default page
