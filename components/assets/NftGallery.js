import React, { useState } from "react";
import { Grid } from "@mui/material";
import NftCard from "./NftCard";
import NftGalleryHeader from "./NftGalleryHeader";
export default function NftGallery() {
  const [gridCols, setGridCols] = useState("4");
  return (
    <div
      style={{
        minWidth: "calc(100vw - 340px)",
        maxWidth: "calc(100vw - 100px)",
      }}
      className="relative font-poppinfont  w-full  left-0 top-20   pt-12 px-8 overflow-x-hidden"
    >
      <NftGalleryHeader gridCols={gridCols} setGridCols={setGridCols} />

      <div
        className={
          " w-auto h-auto grid gap-3 justify-items-center " +
          (gridCols === "3" ? " grid-cols-3" : " grid-cols-4")
        }
      >
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </div>
    </div>
  );
}
