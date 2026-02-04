import React from 'react'

const page = () => {
  return (
    <div className="pt-10">
      <h1 className="text-2xl font-bold pl-32">Audience</h1>
      <div className="mt-5 w-[80%] rounded-xl flex h-40 mx-auto bg-slate-800">
        <div className="rounded-xl h-37 w-[35%] m-1.5 flex flex-col hover:bg-slate-700">
          <span className="p-4 text-lg font-bold">Active Members</span>
          <span className="pl-4 text-4xl">0</span>
        </div>
        <div className="rounded-xl flex flex-col h-37 w-[35%] m-1.5 hover:bg-slate-700">
          <span className="p-4 text-lg font-bold">New Members</span>
          <span className="pl-4 text-4xl">0</span>
        </div>
        <div className="rounded-xl flex flex-col h-37 w-[35%] m-1.5 hover:bg-slate-700">
          <span className="p-4 text-lg font-bold">Cancelled</span>
          <span className="pl-4 text-4xl">0</span>
        </div>
      </div>
      <div className="w-full p-10 pl-32 ">
      <div className="  flex gap-4 mb-30">
        <span className="w-18 px-2 font-bold rounded-full hover:border-slate-700 hover:bg-slate-600 ">Overall</span>
        <span className="w-13 px-2 font-bold rounded-full hover:border-slate-700 hover:bg-slate-600 ">Tiers</span>
      </div>
      <div className="text-xl text-center">No data to show</div>
      </div>
    </div>
  )
}

export default page
