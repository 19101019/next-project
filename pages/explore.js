import React from "react";
import Nav from "../components/assets/Nav";
import Card from "../components/ExplorePage/Card";

export default function Explore() {
  return (
    <div className="sm:w-full sm:overflow-hidden">
      <Nav />
      <div className="mx-auto md:text-4xl my-7 flex justify-center sm:text-2xl sm:my-5">
        <h2 className="font-medium text-black font-bold sm:font-semibold">
          Explore Collections
        </h2>
      </div>
      <div className="mx-auto lg:text-base mb-5 border-b border-neutral-800/20 sm:text-sm">
        <ul className="flex lg:font-normal lg:justify-center sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-x-hidden md:justify-start sm:justify-start sm:mx-3 
        ">
          <li className="lg:px-5 lg:py-3 md:px-3 md:py-3 mx-1 sm:px-2   sm:w-fit">
            Trending
          </li>
          <li className="lg:px-5 lg:py-3 md:px-3 md:py-3 mx-1 sm:px-2   sm:w-fit">
            Top
          </li>
          <li className="lg:px-5 lg:py-3 md:px-3 md:py-3 mx-1 sm:px-2   sm:w-fit">
            Art
          </li>
          <li className="lg:px-5 lg:py-3  md:px-3 md:py-3 mx-1 sm:px-2   sm:w-fit">
            Collection
          </li>
          <li className="lg:px-5 lg:py-3 md:px-3 md:py-3 mx-1 sm:px-2   sm:w-fit">
            Domain Names
          </li>
          <li className="lg:px-5 lg:py-3 md:px-3 md:py-3 mx-1 sm:px-2   sm:w-fit">
            Music
          </li>
          <li className="lg:px-5 lg:py-3 md:px-3 md:py-3 mx-1 sm:px-2   sm:w-fit">
            Photography
          </li>
          <li className="lg:px-5 lg:py-3 md:px-3 md:py-3 mx-1 sm:px-2   sm:w-fit">
            Sports
          </li>
          <li className="lg:px-5 lg:py-3 md:px-3 md:py-3 mx-1 sm:px-2   sm:w-auto">
            Trading Cards
          </li>
          <li className="lg:px-5 lg:py-3 md:px-3 md:py-3 mx-1 sm:px-2   sm:w-fit">
            Utility
          </li>
          <li className="lg:px-5 lg:py-3 md:px-3 md:py-3 mx-1 sm:px-2   sm:w-fit">
            Virtual Words
          </li>
        </ul>
      </div>

      <div className="mx-auto flex justify-center flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
