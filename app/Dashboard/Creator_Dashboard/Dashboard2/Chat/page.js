import React from 'react'

const page = () => {
  return (
    <div className="h-full flex">
    <div className="bg-slate-800 h-full w-[35%] ">
      <div className="p-10 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Chats</h1>
      <img className="w-10 h-10 p-2 cursor-pointer hover:bg-slate-950 hover:rounded-xl" src="/chat_edit.svg" alt="" />
      </div>
      <div className="relative w-[90%] mx-auto">
        <input type="text" placeholder="Search the Conversation / Group" className="w-full py-1 px-2 rounded-xl bg-slate-700 hover:bg-slate-600 hover:border-slate-600 focus:outline-2 focus:outline-slate-600 border-2 border-slate-700"/>
        <img  className="absolute right-2 top-1 cursor-pointer" src="/Search.svg" alt="" />
      </div>
      <div className="w-[90%] mx-auto mt-5 h-20 bg-slate-700 rounded-xl">
        <div className="flex gap-3 items-center px-3 py-4">
        <img className="w-12 h-12 rounded-xl" src="/dog.jpg" alt="" />
        <div className="flex flex-col">
          <span>Group</span>
          <span className="truncate w-55">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quos quidem asperiores ipsam iure quo repellat rerum vero id temporibus, voluptates saepe cum, non rem sunt tempora commodi sit. Nobis.</span>
        </div>
        </div>
      </div>
    </div>
    <div className="h-full w-full flex flex-col justify-between pb-8">
      <div>
      <div className="w-full pt-3 pb-1 px-5 flex justify-between items-center">
        <span className="font-bold text-xl">Group</span>
        <img className="w-12 h-12 rounded-xl" src="/dog.jpg" alt="" />
      </div>
      <div className="h-0.5 border-2 border-slate-700 mt-3"></div>
      </div>
      <div className="px-5 relative">
        <input type="text" placeholder="Search the Conversation / Group" className="w-full py-1 px-2 rounded-xl bg-slate-700 hover:bg-slate-600 hover:border-slate-600 focus:outline-2 focus:outline-slate-600 border-2 border-slate-700"/>
        <div className="absolute right-6 top-1 flex gap-2">
        <img className="cursor-pointer" src="/image.svg" alt="" />
        <img className="cursor-pointer" src="/Share.svg" alt="" />
        </div>
        </div>
    </div>
    </div>
  )
}

export default page