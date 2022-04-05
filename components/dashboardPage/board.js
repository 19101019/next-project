import React from "react";
// import Card from "../components/ExplorePage/Card";
import Pimg from "../../images/statsPage/prof.png";
import Image from "next/image";

export default function Board() {
  return (
    <div className="sm:w-full sm:overflow-hidden">
      <div className="mx-auto w-[85%] border-b border-slate-800/20 flex items-center justify-between my-2">
        <div className="w-[25%] my-2 px-2 flex items-center">
          <p className="text-base font-semibold lg:mx-2 md:mx-1 sm:mx-0">1</p>
          <div className="flex">
            <div className="border-[3px] w-[50px] h-[50px] rounded-full border-[#fff]/900"
            >
              <Image
                src={Pimg}
                alt=""
                height={50}
                width={50}
                className="rounded-full -z-10"
              />
            </div>

            <i
              className="fa fa-check w-[15px] h-[15px] bg-cyan-600 text-white p-[3px] text-[11px] font-bold rounded-lg items-center -ml-[15px] z-10 mt-[37px]"
              aria-hidden="true"
            ></i>
          </div>

          <h3 className="text-base font-semibold mx-3">CryptoPunks</h3>
        </div>
        <div className=" w-[125px] m-3 p-2 lg:block md:hidden sm:hidden">
          <h3 className="text-base font-semibold float-right">11,097.42</h3>
        </div>
        <div className="w-[125px] m-3 p-2 lg:block md:hidden sm:hidden ">
          <h3 className="text-base font-semibold float-right text-[#EC6F6D]">
            + 113.82%
          </h3>
        </div>
        <div className="w-[125px] m-3 p-2 lg:block md:hidden sm:hidden ">
          <h3 className="text-base font-semibold float-right text-[#34C77B]">
            + 216.32%
          </h3>
        </div>
        <div className="w-[125px] m-3 p-2 lg:block md:hidden sm:hidden ">
          <h3 className="text-base font-semibold float-right">---</h3>
        </div>
        <div className="w-[125px] m-3 p-2 lg:block md:hidden sm:hidden">
          <h3 className="text-base font-semibold float-right">3.4k</h3>
        </div>
        <div className="w-[125px] m-3 p-2 ">
          <h3 className="text-base font-semibold float-right">10k</h3>
        </div>
      </div>
    </div>
  );
}
