import React, { useState } from "react";
import Nav from "../components/assets/Nav";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Stat from "../components/StatsPage/stat";
import LastDaysDown from "../components/StatsPage/lastDays";
// import Card from "../components/ExplorePage/Card";

export default function Stats() {
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
            <h6 className="text-base">Last 7 days</h6>
            <KeyboardArrowDownIcon />
            {showDays && <LastDaysDown />}
          </div>
          <div className="p-3 lg:w-[25%] md:w-[70%] sm:w-[100%] border border-slate-800/20 flex sm:mx-2 justify-around items-center my-2 rounded-lg min-w-[170px]">
            <h6 className="text-base">All Categories</h6>
            <KeyboardArrowDownIcon />
          </div>
          <div className="p-3 lg:w-[25%] md:w-[70%] sm:w-[100%] border border-slate-800/20 flex sm:mx-2 justify-around items-center my-2 rounded-lg min-w-[170px]">
            <h6 className="text-base">All Chains</h6>
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
      <Stat />
      <Stat />
      <Stat />
      <Stat />
      <Stat />
      <Stat />
    </div>
  );
}
