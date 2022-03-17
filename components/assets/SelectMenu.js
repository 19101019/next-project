import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SelectMenu() {
  return (
    <div className="border relative h-12 w-56 flex items-center justify-start px-4 font-poppinfont rounded-xl">
      <div>all items</div>
      <span className="absolute right-2">
        <KeyboardArrowDownIcon />
      </span>
      <section className="absolute left-0 top-full mt-1">
        <div className="w-56 h-12 bg-green-400 rounded-xl flex items-center justify-start px-4 my-1 ">
          All Items
        </div>
        <div className="w-56 h-12 bg-green-400 rounded-xl flex items-center justify-start px-4 my-1">
          Item One
        </div>
        <div className="w-56 h-12 bg-green-400 rounded-xl flex items-center justify-start px-4 my-1 ">
          Item One
        </div>
      </section>
    </div>
  );
}
