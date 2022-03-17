import React from "react";

export default function ResourcesDropDown() {
  return (
    <ol className="absolute -left-20 z-10 top-full shadow-xl w-56 text-gray-700 bg-white rounded-b-xl ">
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">Help Center</a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">Platform Status</a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">Partners</a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">Gas-Free Marketplace</a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">Taxes</a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">Blog</a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">Docs</a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">Newsletter</a>
      </li>
      <li className="hover:shadow-md text-lg text-slate-400  w-full overflow-x-hidden h-14 border-b  font-semibold capitalize flex items-center justify-evenly">
        <i className="fa-brands fa-twitter hover:text-slate-500"></i>
        <i className="fa-brands fa-instagram hover:text-slate-500"></i>
        <i className="fa-brands fa-discord hover:text-slate-500"></i>
        <i className="fa-brands fa-reddit hover:text-slate-500"></i>
        <i className="fa-brands fa-youtube hover:text-slate-500"></i>
      </li>
    </ol>
  );
}
