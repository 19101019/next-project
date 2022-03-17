import React from "react";
import NftGallery from "./NftGallery";
import SidePanel from "./SidePanel";

export default function Content() {
  return (
    <div className="flex flex-row">
      <SidePanel />
      <NftGallery />
    </div>
  );
}
