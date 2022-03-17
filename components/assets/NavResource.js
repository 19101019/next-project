import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../images/logo-resources.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ExploreDropDown from "./ExploreDropDown";
import textlogo from "../../images/logo.svg";
import StatsDropDown from "./StatsDropDown";
import ResourcesDropDown from "./ResourcesDropDown";
import ProfileDropDown from "./ProfileDropDown";
import Search from "./Search";
import Link from "next/link";
import Explore from "../../pages/explore";
import Create from "../../pages/create";
export default function NavResource() {
  const [showExplore, setShowExplore] = useState(false);
  // const [showExplorePage, setShowExplorePage] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div
      className="
     sm:flex
      lg:flex lg:flex-row  lg:shadow-md lg:h-fit
      xl:w-full lg:font-poppinfont sm:h-20 justify-between
     
   "
    >
      <div className=" flex flex-row items-center cursor-pointer ">
        <span className="w-3/4 mx-8 h-fit">
          <Image src={logo} alt="logo" />
        </span>
      </div>
      <div
        className="
     sm:hidden
      lg:h-20   lg:flex lg:flex-row  lg:w-full  lg:justify-end lg:items-center   lg:mt-0 "
      >
        {/* <Search /> */}
        <button className="mx-8 text-medium p-3 bg-[#1a6dbf] text-[#fff] rounded-xl">
          Submit Request
        </button>
      </div>
    </div>
  );
}
