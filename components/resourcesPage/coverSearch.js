import React from "react";
import Search from "../assets/Search";


export default function CoverSearch() {
  return (
    <>
      <div className="w-full h-80 bg-cover bg-center bg-[#000] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <Search />
        </div>
      </div>
    </>
  );
}
