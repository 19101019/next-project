import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../images/opensea.svg";
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
export default function Nav() {
  const [showExplore, setShowExplore] = useState(false);
  // const [showExplorePage, setShowExplorePage] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div
      className="
     sm:flex
      lg:flex lg:flex-row  lg:shadow-md 
      xl:w-full lg:font-poppinfont sm:h-20
     
   "
    >
      <div className=" flex flex-row items-center px-2 cursor-pointer ">
        <span className="w-11 h-11 ">
          <Image src={logo} alt="logo" className="w-10 h-10" />
        </span>
        <span className="w-28 mx-3 h-6 mt-1 ">
          <Image src={textlogo} alt="logo" />
        </span>
      </div>
      <div
        className="
     sm:hidden
      lg:h-20   lg:flex lg:flex-row  lg:w-full  lg:justify-evenly lg:items-center   lg:mt-0 "
      >
        <Search />
        <ol className="lg:flex lg:flex-row lg:w-3/4 lg:h-full lg:justify-evenly lg:items-center  lg:font-semibold lg:tracking-wider lg:text-base lg:text-gray-600">
          <Link href="/explore" passHref>
            <li
              className="relative cursor-pointer h-full flex items-center hover:text-gray-900 lg:font-poppinfont lg:font-semibold "
              onMouseEnter={() => setShowExplore(true)}
              // onClick={() => <Explore />}
              onMouseLeave={() => setShowExplore(false)}
            >
              <a>Explore</a>
              {showExplore && <ExploreDropDown />}
            </li>
          </Link>
          <Link href="/stats" passHref>
            <li
              className="relative cursor-pointer h-full flex items-center hover:text-gray-900 lg:font-poppinfont"
              onMouseEnter={() => setShowStats(true)}
              onMouseLeave={() => setShowStats(false)}
            >
              Stats
              {showStats && <StatsDropDown />}
            </li>
          </Link>
          <a href="/resources" target="_blank">
            <li
              className="relative cursor-pointer h-full flex items-center hover:text-gray-900 lg:font-poppinfont "
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <a
                href="/resources"
                target="_blank"
                className="lg:font-poppinfont"
              >
                Resources
              </a>
              {showResources && <ResourcesDropDown />}
            </li>
          </a>
          <Link href="/create" passHref>
            <li className="relative cursor-pointer h-full flex items-center hover:text-gray-900 lg:font-poppinfont lg:font-semibold ">
              <a href="#" className="lg:font-poppinfont">
                Create
              </a>
            </li>
          </Link>
          <li
            className="relative cursor-pointer px-2 h-full flex items-center hover:text-gray-900"
            onMouseEnter={() => setShowProfile(true)}
            onMouseLeave={() => setShowProfile(false)}
          >
            <a href="" className="lg:font-poppinfont">
              <AccountCircleOutlinedIcon className="text-3xl font-bold" />
            </a>
            {showProfile && <ProfileDropDown />}
          </li>
          <li className="cursor-pointer px-2 h-full flex items-center hover:text-gray-900">
            <a href="">
              <ExitToAppOutlinedIcon className="text-3xl font-bold " />
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
