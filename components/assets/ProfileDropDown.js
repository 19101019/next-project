import React, { useState } from "react";
import Switch from "react-switch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GridOnIcon from "@mui/icons-material/GridOn";
import ModeNightIcon from "@mui/icons-material/ModeNight";

export default function ProfileDropDown() {
  const [checked, setChecked] = useState(false);
  return (
    <ol className="absolute -left-36 z-10 top-full shadow-xl w-56 text-gray-700 bg-white rounded-b-xl ">
      <li className="hover:shadow-md  w-full   h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">
          <i className="text-lg pr-4 fa-solid fa-user"></i>
          Profile
        </a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">
          <i className="text-lg pr-4 fa-regular fa-heart"></i>
          Favourites
        </a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">
          <i className="pr-3">
            <VisibilityIcon />
          </i>
          Watchlist
        </a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">
          <i className="pr-3">
            <GridOnIcon />
          </i>
          My Collections
        </a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">
          <i className="fa-solid fa-gear text-lg pr-4"></i>
          Settings
        </a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">
          <i className=" pr-3 ">
            <ModeNightIcon className="rotate-45" />
          </i>
          Night Mode
          <span className=" relative pl-2">
            <Switch
              className="absolute top-1.5 ml-1"
              height={24}
              width={44}
              onChange={() => setChecked(!checked)}
              checked={checked}
              uncheckedIcon={false}
              checkedIcon={false}
              offColor="#334155"
              onColor=""
            />
          </span>
        </a>
      </li>
    </ol>
  );
}
