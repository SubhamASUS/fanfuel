import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <div className="w-[60%] h-[65vh] mx-auto mb-10 bg-slate-800 flex rounded-2xl ">
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold p-5 pb-0">Build your Paid Membership</h2>
          <div className="px-5 flex gap-2 items-start">
            <img className="pt-1.5" src="/Currency.svg" alt="" />
            <div className=" flex flex-col">
              <span className="text-lg">Income you can count on</span>
              <span className="text-sm w-80 text-slate-400">Earn recurring income from your biggest fans.</span>
            </div>
          </div>
          <div className="px-5 flex gap-2 items-start">
            <img className="pt-1" src="/check.svg" alt="" />
            <div className=" flex flex-col">
              <span className="text-lg">Start with what you have</span>
              <span className="text-sm w-80 text-slate-400">Offer something you’re already excited to share with your fans, plus some added perks.</span>
            </div>
          </div>
          <div className="px-5 flex gap-2 items-start">
            <img className="pt-1" src="/stats.svg" alt="" />
            <div className=" flex flex-col">
              <span className="text-lg">Grow your creative business</span>
              <span className="text-sm w-80 text-slate-400">Get insights on your members, create exclusive member-only Chats, and more.</span>
            </div>
          </div>
          <div className="pl-20 pt-10">
            <Link href={"/Dashboard/Creator_Dashboard/Dashboard2/Tier"}><button className="w-[40%] border-2 rounded-2xl px-2 py-1 border-purple-500 bg-purple-500 cursor-pointer">Get Started</button></Link>
          </div>
        </div>
        <div className="p-5 pt-10 text-center flex flex-col gap-1">
          <img className="border-2 border-slate-700" src="/EC.png" alt="" />
          <span className="text-xl font-bold">Helper</span>
          <span className="flex items-center justify-center"><img className="w-5 h-5" src="/Currency.svg" alt="" />100/Month</span>
          <button className="w-[60%] mx-auto border-2 bg-purple-500 border-purple-500 text-lg rounded-xl">Join Now</button>
        </div>
      </div>
      <div className="w-[53%] mx-auto flex flex-col gap-5 mb-10">
        <div>
          <h2 className="text-2xl font-bold">Membership Tiers</h2>
        </div>
        <div className="bg-slate-800 rounded-2xl ">
          <div className="px-5 py-2">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold flex items-center gap-2">Supporter Army <button className="cursor-pointer"><img src="/edit_w.svg" alt="" /></button></h2>
                <span className="flex items-center gap-2 text-sm text-slate-400 "><span className="flex items-center"><img className="w-4 h-4" src="/Currency.svg" alt="" />100/Month</span>
                  <span>&#183;</span>
                  <span>7 Days free trial</span> 
                  <span>&#183;</span>
                  <span>0 Members</span>
                </span>
              </div>
              <img className="w-30 h-20 rounded-2xl" src="/WebDesign.jpg" alt="" />
            </div>
            <div className="h-60 overflow-auto no-scrollbar mt-3">
              <span className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae voluptatibus perferendis, quasi saepe ab quisquam eligendi nisi corporis id, ipsam, voluptates veritatis quidem amet quia delectus. Delectus, rem nostrum.</span>
              <div className="h-0.5 w-full border-2 border-slate-700 mt-2"></div>
              <div className="flex flex-col"><h3>Benifits:- </h3>
                <span className="text-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est excepturi ipsa iste dolores recusandae totam doloribus quasi, aut ullam ex reprehenderit eius placeat fugit quisquam nihil vel, modi neque consectetur.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 rounded-2xl ">
          <div className="px-5 py-2">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold flex items-center gap-2">Supporter Army <button className="cursor-pointer"><img src="/edit_w.svg" alt="" /></button></h2>
                <span className="flex items-center gap-2 text-sm text-slate-400 "><span className="flex items-center"><img className="w-4 h-4" src="/Currency.svg" alt="" />100/Month</span>
                  <span>&#183;</span>
                  <span>7 Days free trial</span>
                  <span>&#183;</span>
                  <span>0 Members</span>
                </span>
              </div>
              <img className="w-30 h-20 rounded-2xl" src="/WebDesign.jpg" alt="" />
            </div>
            <div className="h-60 overflow-auto no-scrollbar mt-3">
              <span className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae voluptatibus perferendis, quasi saepe ab quisquam eligendi nisi corporis id, ipsam, voluptates veritatis quidem amet quia delectus. Delectus, rem nostrum.</span>
              <div className="h-0.5 w-full border-2 border-slate-700 mt-2"></div>
              <div className="flex flex-col"><h3>Benifits:- </h3>
                <span className="text-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est excepturi ipsa iste dolores recusandae totam doloribus quasi, aut ullam ex reprehenderit eius placeat fugit quisquam nihil vel, modi neque consectetur.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 rounded-2xl ">
          <div className="px-5 py-2">
            <div className="flex justify-between items-center">
              <div>
               <h2 className="text-lg font-bold flex items-center gap-2">Supporter Army <button className="cursor-pointer"><img src="/edit_w.svg" alt="" /></button></h2>
                <span className="flex items-center gap-2 text-sm text-slate-400 "><span className="flex items-center"><img className="w-4 h-4" src="/Currency.svg" alt="" />100/Month</span>
                  <span>&#183;</span>
                  <span>7 Days free trial</span>
                  <span>&#183;</span>
                  <span>0 Members</span>
                </span>
              </div>
              <img className="w-30 h-20 rounded-2xl" src="/WebDesign.jpg" alt="" />
            </div>
            <div className="h-60 overflow-auto no-scrollbar mt-3">
              <span className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae voluptatibus perferendis, quasi saepe ab quisquam eligendi nisi corporis id, ipsam, voluptates veritatis quidem amet quia delectus. Delectus, rem nostrum.</span>
              <div className="h-0.5 w-full border-2 border-slate-700 mt-2"></div>
              <div className="flex flex-col"><h3>Benifits:- </h3>
                <span className="text-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est excepturi ipsa iste dolores recusandae totam doloribus quasi, aut ullam ex reprehenderit eius placeat fugit quisquam nihil vel, modi neque consectetur.</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="px-2 flex items-center font-bold border-2 bg-purple-500 border-purple-500 text-lg rounded-lg"><img src="/add.svg" alt="" />Add Tier</button>
        </div>
      </div>
    </div>
  )
}

export default page
