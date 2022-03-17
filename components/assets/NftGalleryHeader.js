import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { CgLayoutGrid } from "react-icons/cg";
export default function NftGalleryHeader(props) {
  // const [gridCol, setGridCol] = useState("4");

  return (
    <section className="  w-full h-14  mb-8 flex flex-row justify-between items-center">
      <span>555555 items</span>
      <div className="flex flex-row w-3/4 items-center justify-end">
        {/* <SelectMenu /> */}
        <div className="flex flex-row items-center ml-8  rounded-md border-y border-x">
          <span
            className={
              "text-5xl border-r hover:shadow-xl rounded-l-md" +
              (props.gridCols === "3" ? " bg-gray-200" : " bg-white")
            }
            onClick={() => {
              props.setGridCols("3");
            }}
          >
            <CgLayoutGrid />
          </span>
          <span
            className={
              "text-3xl hover:shadow-xl rounded-r-md  " +
              (props.gridCols === "4" ? " bg-gray-200" : " bg-white")
            }
            style={{ padding: "9px 9px" }}
            onClick={() => {
              props.setGridCols("4");
              console.log(props.gridCols);
            }}
          >
            <CgMenuGridR />
          </span>
        </div>
      </div>
    </section>
  );
}
