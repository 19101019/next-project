import React from "react";
import Image from "next/image";
import Img from "../../images/cover.jpeg";


export default function Card() {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white mx-5 my-3 rounded-2xl hover:shadow-black/70 border border-slate-900/20 flex flex-col items-center ">
      <div className="max-auto h-32 overflow-hidden ">
        {/* bg-[url('../images/cover.jpeg')] bg-center bg-no-repeat bg-cover */}
        <Image
          src={Img}
          alt=""
          // height={80}
          // width={80}
          className=""
        />
      </div>
      {/* <div className="h-12 w-12 -mt-6 bg-[url('../images/cover.jpeg')] bg-center bg-no-repeat bg-cover rounded-full border-4 border-white"> */}
      <div className=" w-12 h-12 -mt-6 overflow-hidden flex flex-col align-center rounded-full border-4 border-white z-10">
        <Image src={Img} alt="" height={80} width={80} className="" />
      </div>
      <div className="px-6 py-4 text-center -mt-4">
        <div className="font-bold text-xl font-normal mb-1 ">
          Founder Bricks
        </div>
        <div className="font-bold text-sm font-normal mb-2">
          by <span className="text-cyan-600">FounderBricks</span>
        </div>
        <p className="text-gray-700 text-base mx-5 my-5">
          Founder Bricks are a rare art collection of 8,888 unique 4k quality
          NFTs - 3D digital art collectibl...
        </p>
      </div>
    </div>
  );
}
