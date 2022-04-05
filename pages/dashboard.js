import React, { useState } from "react";
import Nav from "../components/assets/Nav";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Board from "../components/dashboardPage/board";
import LastDaysDown from "../components/StatsPage/lastDays";
// import Card from "../components/ExplorePage/Card";

export default function Dashboard() {
  const [showDays, setShowDays] = useState(false);

  return (
    <div className="sm:w-full sm:overflow-hidden">
      <Nav />
      <div className="mx-auto my-10 flex flex-col justify-center sm:text-2xl sm:my-5 items-center">
        <h2 className="font-medium  md:text-4xl text-black my-4 font-bold sm:font-semibold">
          Top NFTs
        </h2>
        <p className="font-thin text-lg my-3 mx-5 text-center">
          The top NFTs on OpenSea, ranked by volume, floor price and other
          statistics.
        </p>
        <div className="lg:w-[60%] md:w-[80%] sm:w-[95%] flex lg:justify-evenly md:justify-start sm:justify-start lg:overflow-x-hidden sm:overflow-x-scroll md:overflow-x-scroll">
          <div
            className="p-3 cursor-pointer lg:w-[30%] md:w-[70%] sm:w-[100%] border border-slate-800/20 sm:mx-2 flex justify-around items-center my-2 rounded-lg min-w-[170px]"
            onMouseEnter={() => setShowDays(true)}
            onMouseLeave={() => setShowDays(false)}
          >
            <h6 className="text-base">
              <i
                className="fa fa-calendar mr-3 text-[#2BCDE4]"
                aria-hidden="true"
              ></i>{" "}
              Last 7 days
            </h6>
            <KeyboardArrowDownIcon />
            {showDays && <LastDaysDown />}
          </div>
          <div className="p-3 lg:w-[25%] md:w-[70%] sm:w-[100%] border border-slate-800/20 flex sm:mx-2 justify-around items-center my-2 rounded-lg min-w-[170px]">
            <h6 className="text-base flex items-center">
              <span className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="49.5"
                    fill="#fff"
                    stroke="#E5E8EB"
                  />
                  <path
                    fill="#1868B7"
                    d="M23 25C23 23.8954 23.8954 23 25 23H37C38.1046 23 39 23.8954 39 25V37C39 38.1046 38.1046 39 37 39H25C23.8954 39 23 38.1046 23 37V25Z"
                  />
                  <path
                    fill="#2BCDE4"
                    d="M23 44C23 42.8954 23.8954 42 25 42H37C38.1046 42 39 42.8954 39 44V56C39 57.1046 38.1046 58 37 58H25C23.8954 58 23 57.1046 23 56V44Z"
                  />
                  <path
                    fill="#1868B7"
                    d="M23 63C23 61.8954 23.8954 61 25 61H37C38.1046 61 39 61.8954 39 63V75C39 76.1046 38.1046 77 37 77H25C23.8954 77 23 76.1046 23 75V63Z"
                  />
                  <path
                    fill="#2BCDE4"
                    d="M42 25C42 23.8954 42.8954 23 44 23H56C57.1046 23 58 23.8954 58 25V37C58 38.1046 57.1046 39 56 39H44C42.8954 39 42 38.1046 42 37V25Z"
                  />
                  <path
                    fill="#1868B7"
                    d="M42 44C42 42.8954 42.8954 42 44 42H56C57.1046 42 58 42.8954 58 44V56C58 57.1046 57.1046 58 56 58H44C42.8954 58 42 57.1046 42 56V44Z"
                  />
                  <path
                    fill="#2BCDE4"
                    d="M42 63C42 61.8954 42.8954 61 44 61H56C57.1046 61 58 61.8954 58 63V75C58 76.1046 57.1046 77 56 77H44C42.8954 77 42 76.1046 42 75V63Z"
                  />
                  <path
                    fill="#1868B7"
                    d="M61 25C61 23.8954 61.8954 23 63 23H75C76.1046 23 77 23.8954 77 25V37C77 38.1046 76.1046 39 75 39H63C61.8954 39 61 38.1046 61 37V25Z"
                  />
                  <path
                    fill="#2BCDE4"
                    d="M61 44C61 42.8954 61.8954 42 63 42H75C76.1046 42 77 42.8954 77 44V56C77 57.1046 76.1046 58 75 58H63C61.8954 58 61 57.1046 61 56V44Z"
                  />
                  <path
                    fill="#1868B7"
                    d="M61 63C61 61.8954 61.8954 61 63 61H75C76.1046 61 77 61.8954 77 63V75C77 76.1046 76.1046 77 75 77H63C61.8954 77 61 76.1046 61 75V63Z"
                  />
                </svg>
              </span>{" "}
              <span>All Categories</span>
            </h6>
            <KeyboardArrowDownIcon />
          </div>
          <div className="p-3 lg:w-[25%] md:w-[70%] sm:w-[100%] border border-slate-800/20 flex sm:mx-2 justify-around items-center my-2 rounded-lg min-w-[170px]">
            <h6 className="text-base">
              <i
                className="fa fa-link mr-3 text-[#2BCDE4]"
                aria-hidden="true"
              ></i>{" "}
              All Chains
            </h6>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>

      <div className="mx-auto w-[85%] border-b border-slate-800/20 flex items-center justify-between mt-3">
        <div className="w-[25%] my-3 p-2">
          <h3 className="text-base font-semibold">Collection</h3>
        </div>
        <div className="w-[125px] m-3 p-2 lg:block md:hidden sm:hidden">
          <h3 className="text-base font-semibold float-right">Volume</h3>
        </div>
        <div className="w-[125px] m-3 p-2 lg:block md:hidden sm:hidden">
          <h3 className="text-base font-semibold float-right">24h %</h3>
        </div>
        <div className="w-[125px] m-3 p-2 lg:block md:hidden sm:hidden">
          <h3 className="text-base font-semibold float-right">7d %</h3>
        </div>
        <div className="w-[125px] m-3 p-2 lg:block md:hidden sm:hidden">
          <h3 className="text-base font-semibold float-right">Floor Price</h3>
        </div>
        <div className="w-[125px] m-3 p-2 lg:block md:hidden sm:hidden">
          <h3 className="text-base font-semibold float-right">Owners</h3>
        </div>
        <div className="w-[125px] m-3 p-2">
          <h3 className="text-base font-semibold float-right">Items</h3>
        </div>
      </div>
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
    </div>
  );
}
