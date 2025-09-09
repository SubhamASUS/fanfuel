import React from 'react'

const page = () => {
  return (
    <div className="w-[70%] mx-auto mt-[-10]">
      <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">Collections</h2>
      <button className="flex items-center border-2 rounded-2xl px-2 py-1 border-purple-500 bg-purple-500 cursor-pointer">
        <img src="/add.svg" alt="" />
        <span>Create Collection</span>
      </button>
      </div>
      <div className="text-center pt-20">
        <span className="text-xl">No Collection to show </span>
        <p className="text-sm text-slate-400">Add Collections.All Your collection will be shown here</p>
      </div>
    </div>
  )
}

export default page
