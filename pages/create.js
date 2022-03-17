import React from "react";
import Nav from "../components/assets/Nav";
import Footer from "../components/LandingPage.js/Footer";
import ConnectionList from "../components/createPage/connectionList";

export default function Create() {
  return (
    <div className="">
      <Nav />
      <div className="lg:mx-auto md:mx-auto sm:mx-0 lg:w-2/5 md:w-3/5 lg:px-3 md:px-2 sm:px-4 md:text-lg mt-8 flex flex-col justify-center sm:text-center lg:text-left md:text-left">
        <h2 className="font-medium text-2xl text-[#04111D] font-bold sm:font-semibold">
          Connect your wallet.
        </h2>
      </div>
      <div className="lg:mx-auto md:mx-auto sm:mx-0 lg:w-2/5 md:w-3/5 mt-4 sm:w-full px-3 flex flex-col justify-center sm:text-center lg:text-left md:text-left">
        <h6 className="font-thin text-[#707A83] text-base mb-1">
          Connect with one of our available{" "}
          <b className="text-[#1868B7] font-semibold">wallet</b> providers or
          create a new one.
        </h6>

        <div className="my-5 rounded-lg border border-slate-800/20">
          <ConnectionList />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
