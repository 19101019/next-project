import React, { useState } from "react";
import Image from "next/image";
import Img from "../../images/metamask.webp";
// import "./connectionList.css";


export default function ConnectionList({children}) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    const readHide = document.querySelector(".read-hide");
    if(isReadMore){
      readHide.style.display = "none";
    }else{
      readHide.style.display = null;
    }
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <div className="flex items-center justify-between py-3 px-3 rounded-lg border-b border-slate-800/20 ">
        {/* hover:shadow-[2px_2px_2px_2px_rgb(4 17 29 0.4)] */}
        <div className="flex items-center">
          <div className="w-6 h-6">
            <Image src={Img} alt="" height={80} width={80} className="" />
          </div>

          <h5 className="font-bold mx-4 text-sm">Metamask</h5>
        </div>
        <p className="text-[#707A83]/90 font-thin text-sm">Popular</p>
      </div>

      <div className="flex items-center justify-between py-3 px-3 rounded-lg border-b border-slate-800/20 ">
        {/* hover:shadow-[2px_2px_2px_2px_rgb(4 17 29 0.4)] */}
        <div className="flex items-center">
          <div className="w-6 h-6">
            <Image src={Img} alt="" height={50} width={50} className="" />
          </div>

          <h5 className="font-bold mx-4 text-sm">Metamask</h5>
        </div>
        <p className="text-[#707A83]/90 font-thin text-sm hidden">Popular</p>
      </div>

      <div className="read-hide w-full">
        <div className="flex items-center justify-between py-3 px-3 rounded-lg border-b border-slate-800/20 ">
          {/* hover:shadow-[2px_2px_2px_2px_rgb(4 17 29 0.4)] */}
          <div className="flex items-center">
            <div className="w-6 h-6">
              <Image src={Img} alt="" height={50} width={50} className="" />
            </div>

            <h5 className="font-bold mx-4 text-sm">Metamask</h5>
          </div>
          <p className="text-[#707A83]/90 font-thin text-sm hidden">Popular</p>
        </div>

        <div className="flex items-center justify-between py-3 px-3 rounded-lg border-b border-slate-800/20 ">
          {/* hover:shadow-[2px_2px_2px_2px_rgb(4 17 29 0.4)] */}
          <div className="flex items-center">
            <div className="w-6 h-6">
              <Image src={Img} alt="" height={50} width={50} className="" />
            </div>

            <h5 className="font-bold mx-4 text-sm">Metamask</h5>
          </div>
          <p className="text-[#707A83]/90 font-thin text-sm hidden">Popular</p>
        </div>

        <div className="flex items-center justify-between py-3 px-3 rounded-lg border-b border-slate-800/20 ">
          {/* hover:shadow-[2px_2px_2px_2px_rgb(4 17 29 0.4)] */}
          <div className="flex items-center">
            <div className="w-6 h-6">
              <Image src={Img} alt="" height={50} width={50} className="" />
            </div>

            <h5 className="font-bold mx-4 text-sm">Metamask</h5>
          </div>
          <p className="text-[#707A83]/90 font-thin text-sm hidden">Popular</p>
        </div>
      </div>

      <div className="flex items-center justify-center py-3 px-3 rounded-lg border-b border-slate-800/20 ">
        <div className="flex items-center">
          <h5
            onClick={toggleReadMore}
            className="flex justify-center font-bold items-center text-sm"
          >
            {isReadMore ? "Show More" : " Show Less"}
          </h5>
        </div>
      </div>
    </>
  );
}
