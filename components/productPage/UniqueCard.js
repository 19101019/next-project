import React,{useState} from 'react';
import Image from "next/image";
import Img from "../../images/cover.jpeg";

const UniqueCard = (props) => {
  const func=props.onClick;
  return (
    <>
      <div
        className="p-2 bg-[#F0FFFF] flex flex-col rounded-lg my-3 hover:bg-[#89CFF0]"
        onClick={func}
      >
        <div className="flex items-center justify-between">
          <div className="w-[50px] h-[50px] rounded-[4px] mx-2 my-1 overflow-hidden items-center">
            <Image
              src={Img}
              alt=""
              height={50}
              width={50}
              className=""
              layout="fixed"
            />
          </div>
          <div className=" mx-2">
            <h2 className="text-md font-medium">{props.name}</h2>
            <p className="text-sm">{props.address}</p>
          </div>
          <div className="mx-2">
            <i
              className="fa fa-heart text-lg bg-transparent p-2 border rounded-lg border-black"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="flex itms-center my-2">
          <button className="p-[7px] text-sm bg-[#2081E2] text-[#fff] rounded-lg mx-2 hover:bg-[#fff] hover:border-2 hover:border-[#2081E2] hover:text-black">
            Full Time
          </button>
          <button className="p-[7px] text-sm bg-[#2081E2] text-[#fff] rounded-lg mx-2 hover:bg-[#fff] hover:border-2 hover:border-[#2081E2] hover:text-black">
            Senior Level
          </button>
        </div>
      </div>
    </>
  );
}

export default UniqueCard;