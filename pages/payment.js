import React from "react";
import Nav from "../components/assets/Nav";
import List from "../components/paymentPage/list";
import Footer from "../components/LandingPage.js/Footer";

export default function Payment() {
  return (
    <div className="sm:w-full sm:overflow-hidden">
      <Nav />
      <div className="mx-auto md:text-4xl my-7 flex justify-center sm:text-2xl sm:my-5">
        <h2 className="font-medium text-black font-bold sm:font-semibold">
          Payment Method
        </h2>
      </div>

      <div className="mx-auto my-4 flex items-center justify-center my-1 md:p-2 lg:flex-row md:flex-col sm:flex-col sm:px-1">
        <div className="lg:w-fit md:w-[98%] sm:w-[98%] lg:my-0 sm:my-1 justify-between flex p-2 rounded-lg mx-1 hover:bg-[#2081E2] hover:text-[#fff] items-center border-solid border-2  hover:border-none">
          <p className="py-1 lg:px-2 sm:px-1 lg:text-md sm:text-sm">Currency</p>
          <select
            name="currency"
            id="currency"
            className="py-1 lg:px-2 sm:px-1 rounded-md text-black"
          >
            <option value="Euro">Euro</option>
            <option value="rupay">Rupay</option>
            <option value="dollar">Dollar</option>
          </select>
        </div>
        <div className="lg:w-fit md:w-[98%] sm:w-[98%] lg:my-0 sm:my-1 justify-between flex p-2 hover:bg-[#2081E2] hover:text-[#fff] rounded-lg mx-1 items-center border-2 border-solid hover:border-none">
          <p className="py-1 lg:px-2 sm:px-1 lg:text-md sm:text-sm">
            Predict Price
          </p>
          <input
            className="py-1 lg:px-2 sm:px-1 rounded-md border-2 border-solid text-black"
            type="number"
          />
        </div>
        <div className="lg:w-fit md:w-[98%] sm:w-[98%] lg:my-0 sm:my-1 justify-between flex p-2 rounded-lg mx-1 hover:bg-[#2081E2] hover:text-[#fff] border-2 border-solid hover:border-none items-center">
          <p className="py-1 lg:px-2 sm:px-1 lg:text-md sm:text-sm">
            Form Number
          </p>
          <input
            className="py-1 lg:px-2 sm:px-1 rounded-md border-2 border-solid w-fit text-black"
            type="text"
          />
          <button className="py-1 lg:px-2 sm:px-1 mx-1 rounded-md border-2 border-solid bg-[#2081E2]">
            Search
          </button>
        </div>
      </div>

      <div className="mx-auto my-4 flex items-center justify-center md:p-2 lg:flex-row md:flex-row sm:flex-col sm:px-1">
        <div className="lg:mx-2 md:mx-[0] sm:mx-auto my-0 flex flex-col ">
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
        <div className="lg:mx-2 md:mx-[0] sm:mx-auto my-0 flex flex-col">
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
      </div>

      <Footer />
    </div>
  );
}
