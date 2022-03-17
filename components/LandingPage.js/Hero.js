import React from "react";
import wImage from "../../images/landingPage/window-image.jpg";
import styles from "../../styles/Hero.module.css";
import Card from "./Card";
import Link from "next/link";
import { AiFillPlayCircle } from "react-icons/ai";
export default function Hero() {
  return (
    <div className="sm:relative top-0 sm-w-full sm:font-poppinfont sm:select-none sm:w-full sm:flex sm:flex-col sm:justify-start sm:items-center lg:w-full lg:grid lg:grid-cols-2 lg:gap-2 lg:pt-5">
      {/* blurred bg */}
      <div
        className={
          "sm:absolute -z-10 sm:top-0 sm:w-full lg:items-start   " + styles.hero
        }
      >
        <div className={" sm:w-full sm:h-full " + styles.bgContainer}></div>
      </div>
      {/* text group and button group */}
      <div
        style={{ minWidth: "330px" }}
        className="  sm:h-80  sm:overflow-hidden   sm:flex sm:flex-col sm:justify-center sm:items-center  lg:items-start lg:pl-6 lg:w-full lg:h-96 lg:mt-5 lg:justify-start lg:ml-11 lg:pr-0"
      >
        <h3
          className=" sm:font-semibold sm:font-poppinfont sm:text-center sm:text-3xl sm:mt-12 sm:max-w-sm lg:text-left lg:text-4xl  lg:w-full lg:block lg:max-w-2xl "
          style={{
            color: "rgb(4, 17, 29)",
            // fontSize: "28px",
            lineHeight: "110%",
          }}
        >
          Discover, collect, and sell extraordinary NFTs
        </h3>
        <h6 className="sm:font-poppinfont sm:text-center  sm:font-thin sm:text-lg sm:text-slate-800 sm:mt-8 sm:max-w-xs lg:text-left lg:text-2xl lg:max-w-md">
          {"OpenSea is the world's first and largest NFT marketplace"}
        </h6>
        {/* button group */}
        <div className="sm:mt-8  sm:flex sm:flex-row  sm:justify-center ">
          <button
            className={
              "sm:h-14 sm:border  sm:border-blue-700 sm:font-bold sm:px-10 sm:rounded-xl sm:bg-blue-700 sm:text-white sm:text-lg sm:cursor-pointer sm:mr-6 sm:text-center lg:px-14  " +
              styles.explore
            }
          >
            Explore
          </button>
          <button
            className="sm:h-14 sm:border sm:text-center sm:border-blue-700 sm:font-bold sm:px-10 sm:rounded-xl sm:text-blue-700 sm:text-lg sm:cursor-pointer lg:px-14 "
            style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
          >
            Create
          </button>
        </div>
      </div>
      <div className="lg:ml-14 lg:flex lg:justify-center    lg:place-items-center lg:mt-4">
        <Card />
      </div>
      <div className="sm:w-full sm:h-20 sm:text-base sm:align-middle sm:flex sm:flex-row sm:items-center sm:justify-center  ">
        <a
          href=""
          className="sm:w-full sm:text-blue-500  sm:h-full sm:active:bg-transparent sm:flex sm:flex-row sm:items-center sm:justify-center lg:justify-start  lg:pl-6 lg:ml-11 "
        >
          <AiFillPlayCircle className="text-4xl" />
          <p className="sm:ml-3 sm:font-semibold sm:font-poppinfont sm:text-base lg:text-left ">
            Learn more about OpenSea
          </p>
        </a>
      </div>
    </div>
  );
}
