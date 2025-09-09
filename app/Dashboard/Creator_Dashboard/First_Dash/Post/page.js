"use client"
import React from 'react'
import { useEffect, useRef, useState } from 'react'
const page = () => {
    const [Count, setCount] = useState(0)
    const likeRef = useRef()
    const Like = () => {
        if (likeRef.current.src.includes("/heart.svg")) {
            likeRef.current.src = "/heart_F.svg"
            setCount(prev => prev + 1)
        }
        else {
            likeRef.current.src = "/heart.svg"
            setCount(prev => prev - 1)
        }
    }
    return (
        <>
     <div className="w-[70%] mx-auto mt-[-10]">
      <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">Your Posts</h2>
      <button className="flex items-center border-2 rounded-2xl px-2 py-1 border-purple-500 bg-purple-500 cursor-pointer">
        <img src="/add.svg" alt="" />
        <span>Add Post</span>
      </button>
      </div>
      <div className="NP text-center pt-20 ">
        <span className="text-xl">No Posts to show </span>
        <p className="text-sm text-slate-400">Make Your First Post.All Your Posts will be shown here</p>
      </div>
    </div>
      <div className="posts">
          <div className="w-[50%] h-auto pb-8 mx-auto mt-5 mb-5 bg-slate-800 rounded-2xl">
            <div className="img flex items-center m-3 ">
              <img className="w-8 h-8   mt-2 rounded-sm " src="/Horse.png" alt="" />
              <h2 className="mx-2 text-sm">Youtube Creator</h2>
            </div>
            <img className="w-[96%]   mx-auto border-2 border-slate-700" src="/post.png" alt="" />
            <div className="m-3  max-h-25 overflow-hidden  ">
              <h2 className="text-xl">Lorem ipsum dolor sit amet.</h2>
              <span className="text-sm text-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto delectus porro consequatur odio id eum natus aut nisi quod enim pariatur corporis amet, ipsum reprehenderit nobis optio dolorum beatae ad placeat incidunt sapiente eligendi architecto. Molestias iusto consequatur minus. Illo optio distinctio magni blanditiis voluptatum cum magnam voluptate eius inventore laboriosam similique autem ea sequi, dolores, quibusdam at error. Ratione, vitae sint. Mollitia fuga temporibus, molestias optio voluptas fugit dicta aspernatur, repudiandae in commodi sit ab possimus doloribus expedita dolore odit itaque impedit. Odio sed iusto amet odit accusantium minima tempore officiis commodi? Nesciunt quasi maxime laboriosam cum ipsum!</span>
            </div>
            <div className="m-3 mt-5 flex gap-5 ">
              <button onClick={Like}  className="flex items-center gap-1">
                <img ref={likeRef} className="w-8 h-8" src="/heart.svg" alt="" />
                <span>{Count}</span>
              </button>
              <button><img className="w-8 h-8" src="/comment.svg" alt="" /></button>
              <button><img className="w-8 h-8" src="/Share.svg" alt="" /></button>
              <button><img className="w-8 h-8" src="/more_h_w.svg" alt="" /></button>
            </div>
          </div>
        </div>
        </>
  )
}

export default page
