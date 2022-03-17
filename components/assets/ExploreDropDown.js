import React from "react";
import Image from "next/image";
import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import Allnfts from "../../images/exploreMenu/allnfts-light.svg";
import Artlight from "../../images/exploreMenu/art-light.svg";
import Collectibles from "../../images/exploreMenu/collectibles-light.svg";
import DomainNames from "../../images/exploreMenu/domain-names-light.svg";
import Music from "../../images/exploreMenu/music-light.svg";
import Photography from "../../images/exploreMenu/photography-category-light.svg";
import Sports from "../../images/exploreMenu/sports-light.svg";
import TradingCards from "../../images/exploreMenu/trading-cards-light.svg";
import Utility from "../../images/exploreMenu/utility-light.svg";
import VirtualWorlds from "../../images/exploreMenu/virtual-worlds-light.svg";

export default function ExploreDropDown() {
  return (
    <ol className="absolute -left-20 z-10 top-full shadow-xl w-56 bg-white rounded-b-xl text-gray-700 lg:font-poppinfont lg:font-semibold">
      <li className="hover:shadow-md  w-full h-14 border-b  text-base font-semibold capitalize flex items-center lg:font-poppinfont lg:font-semibold">
        <span className="h-8 w-8 mx-2">
          <Image src={Allnfts} alt="logo" className=" h-8 w-8" />
        </span>
        All NFTs
      </li>

      <li className="hover:shadow-md w-full h-14 border-b  text-base font-semibold capitalize flex items-center lg:font-poppinfont lg:font-semibold">
        <span className="h-8 w-8 mx-2">
          <Image src={Artlight} alt="logo" className=" h-8 w-8" />
        </span>
        Art
      </li>
      <li className="hover:shadow-md w-full h-14 border-b  text-base font-semibold capitalize flex items-center lg:font-poppinfont lg:font-semibold">
        <span className="h-8 w-8 mx-2">
          <Image src={Collectibles} alt="logo" className=" h-8 w-8" />
        </span>
        Colllectibles
      </li>
      <li className="hover:shadow-md w-full h-14 border-b  text-base font-semibold capitalize flex items-center lg:font-poppinfont lg:font-semibold">
        <span className="h-8 w-8 mx-2">
          <Image src={DomainNames} alt="logo" className=" h-8 w-8" />
        </span>
        Domain Names
      </li>
      <li className="hover:shadow-md w-full h-14 border-b  text-base font-semibold capitalize flex items-center lg:font-poppinfont lg:font-semibold">
        <span className="h-8 w-8 mx-2">
          <Image src={Music} alt="logo" className=" h-8 w-8" />
        </span>
        Music
      </li>
      <li className="hover:shadow-md w-full h-14 border-b  text-base font-semibold capitalize flex items-center lg:font-poppinfont lg:font-semibold">
        <span className="h-8 w-8 mx-2">
          <Image src={Photography} alt="logo" className=" h-8 w-8" />
        </span>
        Photography
      </li>
      <li className="hover:shadow-md w-full h-14 border-b  text-base font-semibold capitalize flex items-center lg:font-poppinfont lg:font-semibold">
        <span className="h-8 w-8 mx-2">
          <Image src={Sports} alt="logo" className=" h-8 w-8" />
        </span>
        Sports
      </li>
      <li className="hover:shadow-md w-full h-14 border-b  text-base font-semibold capitalize flex items-center lg:font-poppinfont lg:font-semibold">
        <span className="h-8 w-8 mx-2">
          <Image src={DomainNames} alt="logo" className=" h-8 w-8" />
        </span>
        Trading Cards
      </li>
      <li className="hover:shadow-md w-full h-14 border-b  text-base font-semibold capitalize flex items-center lg:font-poppinfont lg:font-semibold">
        <span className="h-8 w-8 mx-2">
          <Image src={Utility} alt="logo" className=" h-8 w-8" />
        </span>
        Utility
      </li>
      <li className="hover:shadow-md w-full h-14 border-b text-base font-semibold capitalize flex items-center lg:font-poppinfont lg:font-semibold">
        <span className="h-8 w-8 mx-2">
          <Image src={VirtualWorlds} alt="logo" className=" h-8 w-8" />
        </span>{" "}
        Virtual Worlds
      </li>
    </ol>
  );
}
