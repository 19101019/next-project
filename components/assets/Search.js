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
export default function Search() {
  const [value, setValue] = useState("");

  return (
    <div
      className="
      sm:w-screen sm:relative sm:px-1
      md:relative md:w-96 md:hidden
      lg:w-80 lg:flex
      xl:w-128
  "
    >
      <SearchOutlinedIcon
        size={24}
        className="absolute left-3 top-1/4  text-gray-700"
      />
      <input
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
        placeholder="Search items,collections and accounts"
        className=" 
        sm:h-12 sm:w-full  sm:px-12       sm:rounded-xl sm:text-base sm:text-gray-700 sm:font-poppinfont sm:border 
        lg:w-80
        xl:w-128
        focus:outline-none  focus:shadow-lg
        "
      />
      {value && (
        <ClearIcon
          onClick={() => setValue("")}
          className="absolute right-1 top-2/4 -translate-y-2/4 cursor-pointer text-gray-400 hover:text-gray-700"
        />
      )}
    </div>
  );
}
