import React from "react";
import Image from "next/image";
import Img from "../../images/cover.jpeg";


export default function List() {
  return (
    <div className="max-w-md lg:w-full md:w-[80%] sm:w-[95%] rounded overflow-hidden shadow-md bg-white lg:mx-3 my-[0px] sm:mx-auto rounded-lg hover:shadow-black/90 border border-slate-900/20 flex flex-col items-center">
      <div className="flex items-center justify-between py-2 px-2 w-full">
        <div className="flex items-center justify-start w-full p-">
          <div className="w-[40px] h-[40px] rounded-[2px] overflow-hidden items-center">
            <Image src={Img} alt="" height={40} width={40} className="" layout="fixed" />
          </div>
          <div className="flex flex-col">
            <h5 className="font-bold mx-4 text-sm">FounderBricks</h5>
            <p className="mx-4 font-thin text-sm">
              Founder Bricks are a rare Founder Bricks are a rare
            </p>
          </div>
        </div> 
      </div>
    </div>
  );
}
