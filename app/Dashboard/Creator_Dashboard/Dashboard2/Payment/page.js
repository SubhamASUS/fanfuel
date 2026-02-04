import React from 'react'

const page = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Payments Report</h1>
      <div className="w-full mt-5 flex gap-10">
        <div className="w-[30%] h-52 bg-slate-800 flex flex-col rounded-xl">
          <div className="flex-1 flex flex-col justify-center items-center">
            <span className="flex text-[28px] items-center "><img className="h-[30px]" src="/Currency.svg" alt="" />0.00</span>
            <span>Today's Earnings</span>
          </div>
          <div className="h-[35%] w-full flex justify-around bg-slate-700 rounded-b-xl ">
            <span className="flex flex-col text-[18px] mt-5">0 <span className="text-sm">Transactions</span></span>
            <div className="flex flex-col mt-5">
              <span className="flex text-[18px] items-center "><img className="h-[20px]" src="/Currency.svg" alt="" />0.00</span>
              <span className="text-sm">Avg. payments</span>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-52 bg-slate-800 flex flex-col rounded-xl">
          <div className="flex-1 flex flex-col justify-center items-center">
            <span className="flex text-[28px] items-center "><img className="h-[30px]" src="/Currency.svg" alt="" />0.00</span>
            <span>Month to Date Earnings</span>
          </div>
          <div className="h-[35%] w-full flex justify-around bg-slate-700 rounded-b-xl">
            <span className="flex flex-col text-[18px] mt-5">0 <span className="text-sm">Transactions</span></span>
            <div className="flex flex-col mt-5">
              <span className="flex text-[18px] items-center "><img className="h-[20px]" src="/Currency.svg" alt="" />0.00</span>
              <span className="text-sm">Avg. payments</span>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-52 bg-slate-800 flex flex-col rounded-xl">
          <div className="flex-1 flex flex-col justify-center items-center">
            <span className="flex text-[28px] items-center "><img className="h-[30px]" src="/Currency.svg" alt="" />0.00</span>
            <span>Year to Date Earnings</span>
          </div>
          <div className="h-[35%] w-full flex justify-around bg-slate-700 rounded-b-xl">
            <span className="flex flex-col text-[18px] mt-5">0 <span className="text-sm">Transactions</span></span>
            <div className="flex flex-col mt-5">
              <span className="flex text-[18px] items-center "><img className="h-[20px]" src="/Currency.svg" alt="" />0.00</span>
              <span className="text-sm">Avg. payments</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-5 gap-20 pr-10 ">
        <div className="h-[70vh] w-[50%] mx-auto flex flex-col bg-slate-800 rounded-xl">
          <div className="h-[10%] w-full bg-slate-700 rounded-t-xl p-3 text-[18px] font-bold "> Recent Payments</div>
          <span className="text-lg p-3 text-center">You have not received any Payments yet</span>
        </div>
        <div className="h-[70vh] w-[50%] mx-auto  flex flex-col bg-slate-800 rounded-xl">
          <div className="h-[10%] w-full bg-slate-700 rounded-t-xl p-3 text-[18px] font-bold ">Popular memberships</div>
          <span className="text-lg p-3 text-center">You have not received any Payments yet</span>
        </div>
      </div>
    </div>
  )
}

export default page
