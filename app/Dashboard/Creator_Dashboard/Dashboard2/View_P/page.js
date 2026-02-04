import React from 'react'

const page = () => {
    return (
        <div>
            <div className="h-15 px-5 py-2 flex items-center-safe justify-between">
                <div className="flex items-center gap-2 mb-5">
                    <img className="w-10 h-10 border-2 border-slate-700" src="/dog.jpg" alt="" />
                    <h2 className="text-lg font-bold">Freelancer</h2>
                </div>
                <h2 className="text-sm font-bold ">Home</h2>
            </div>
            <div className="h-0.5 border-2 border-slate-700"></div>
            <div className="relative mb-30">
                <img className="w-full h-100 border-b-2 border-slate-700 " src="/WebDesign.jpg" alt="" />
                <div className="absolute inset-0 left-50 top-70">
                    <h2 className="text-[40px] font-bold">Freelancer</h2>
                    <span className="text-sm text-slate-400">0 Posts</span>
                </div>
            </div>
            <div className="h-0.5 border-2 border-slate-700"></div>
            <div className=" px-30 ">
            <span className="flex  pt-3 items-center gap-3 text-slate-400 text-sm">
              <span className="flex items-center"><img className="w-4 h-4" src="/Currency.svg" alt="" />INR</span>
              <span className="text-xl">&#183;</span>
              <span>English(United States)</span>
            </span>
            <span className="  flex items-center gap-3 text-lg">Fanfuel<span className="text-sm text-slate-400">&copy; 2025 Fanfuel</span></span>
          </div>
        </div>
    )
}

export default page
