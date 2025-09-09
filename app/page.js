import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-[130vh] mt-5 mb-20 ">
        <div className="fixed top-0 left-0 z-[-2] w-full min-h-full bg-slate-950 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        <div className="text-white container mx-auto text-center ">
          <h1 className="font-bold text-5xl w-80 text-violet-600 mx-auto">Fuel the creators you love</h1>
          <p className="pt-3 text-xl mx-auto w-100">Support your favorite Creators , Artist, Streamers through FanFuel</p>
          <div className="flex gap-5.5 mx-auto w-64 mt-3">
            <Link href={"/SignUp"}><button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button></Link>
            <Link href={"#LearnMore"}><button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn more</button></Link>
          </div>
        </div>
        <div className="h-0.5 border-1 border-slate-900 mt-3"></div>
        <div className=" text-white">
          <h1 className="text-center text-2xl font-bold my-2">How It Works</h1>
          <div className="Creator mt-5">
            <h1 className="text-2xl font-bold mb-3 text-center text-purple-600">For Creator</h1>
            <div className="work flex justify-around">
              <div className="flex flex-col justify-center items-center">
                <img className="w-10 h-10 " src="Showcase.gif" alt="" />
                <h2>Create your profile</h2>
                <span className="text-sm">Customize your page, add your bio, and showcase your content.</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-10 h-10 " src="Engage.gif" alt="" />
                <h2>Engage Your Supporters</h2>
                <span className="text-sm">Post updates, livestreams, or shoutouts to keep your fans connected.</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-10 h-10 " src="Tier.gif" alt="" />
                <h2>Create Tiers & Rewards</h2>
                <span className="text-sm">Offer exclusive content or perks based on support levels.</span>
              </div>
            </div>
          </div>
          <div className="h-0.5 border-1 border-slate-900 mt-3"></div>
          <div className="Fans mt-6">
            <h1 className="text-2xl font-bold mb-3 text-center text-purple-600">For Fans</h1>
            <div className="work flex justify-around">
              <div className="flex flex-col justify-center items-center">
                <img className="w-10 h-10 " src="Find.gif" alt="" />
                <h2>Find Creators</h2>
                <span className="text-sm">Browse and find creators who match your interests.</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-10 h-10 " src="Tier.gif" alt="" />
                <h2>Choose a Tier</h2>
                <span className="text-sm">Choose how much you want to support and unlock rewards.</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-10 h-10 " src="Gift.gif" alt="" />
                <h2>Get Exclusive</h2>
                <span className="text-sm">Get exclusive perks based on the tier you choose </span>
              </div>
            </div>
          </div>
            <div className="h-0.5 border-1 border-slate-900 mt-3"></div>
          <div id="LearnMore" className="  flex flex-col justify-center items center mt-3 gap-5  ">
            <h1 className="text-center text-2xl text-purple-600 font-bold">Learn More About Us</h1>
            <iframe className="flex justify-center items-center mx-auto" width="360" height="215" src="https://www.youtube.com/embed/Oq7jsbjUJ8Q?si=kf5s59odhdUnkMgD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>          
          </div>
        </div>
      </div>
    </>
  );
}
