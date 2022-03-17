import React from "react";

export default function LastDaysDown() {
  return (
    <ol className="absolute -left-20 z-10 top-full shadow-xl w-56 text-gray-700 bg-white rounded-b-xl ">
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">Rankings</a>
      </li>
      <li className="hover:shadow-md  w-full h-14 border-b pl-4 text-base font-semibold capitalize flex items-center">
        <a href="#">Activity</a>
      </li>
    </ol>
  );
}
