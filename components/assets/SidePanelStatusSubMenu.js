import React from "react";

export default function SidePanelStatusSubMenu() {
  return (
    <div className="w-full h-40 font-semibold border-b border-gray-200  text-gray-800 text-sm  mb-px grid grid-flow-row grid-cols-2 gap-4 p-6">
      <span className="hover:shadow-md border   h-10 rounded-lg flex items-center justify-start pl-1 ">
        Buy Now
      </span>
      <span className="border h-10 rounded-lg flex items-center  justify-start pl-1">
        On Auction
      </span>
      <span className="border h-10 rounded-lg flex items-center  justify-start pl-1">
        New
      </span>
      <span className="border h-10 rounded-lg flex items-center  justify-start pl-1">
        Has Offers
      </span>
    </div>
  );
}
