import React from "react";
import Image from "next/image";
import wImg from "../../images/landingPage/cardImg.jpg";
import dp from "../../images/landingPage/dp.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function Card() {
  return (
    <div className=" sm:w-80 sm:max-w-sm sm:mt-6 sm:font-poppinfont sm:font-semibold sm:h-auto sm:text-center sm:overflow-hidden sm:rounded-xl sm:shadow-dreamy lg:w-96 lg:max-h-xl lg:max-w-xl   ">
      <div className=" sm:relative sm:w-full sm:h-72  sm:overflow-hidden   sm:object-cover sm:pb-0 ">
        <Image src={wImg} objectFit="cover" layout="fill" alt="" />
      </div>
      <div className="sm:w-full h-20    sm:flex sm:flex-row items-center">
        <div className="sm:w-14 sm:h-14  sm:inline-block sm:mx-3 sm:object-cover sm:rounded-full sm:overflow-hidden">
          <Image src={dp} alt="" width={"100%"} height={"100%"} />
        </div>
        <div className="sm:flex sm:flex-col sm:justify-start  sm:tracking-normal sm:items-start sm:mx-4 sm:text-sm sm:text-gray-800 lg:max-w-xl ">
          <span className="sm:font-poppinfont sm:font-medium sm:text-slate-800">
            salman
          </span>
          <span className="sm:text-blue-500 sm:font-poppinfont sm:font-medium">
            web developer
          </span>
        </div>
        <div className="sm:ml-auto sm:mr-3 sm:w-10 sm:h-10 text-3xl sm:flex sm:flex-row sm:items-center sm:justify-center sm:text-gray-500">
          <AiOutlineInfoCircle />
        </div>
      </div>
    </div>
  );
}
