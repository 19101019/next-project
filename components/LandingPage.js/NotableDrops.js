import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import slide1 from "../../images/landingPage/slide1.jpg";
import slide2 from "../../images/landingPage/slide2.jpg";
import slide3 from "../../images/landingPage/slide3.jpg";
import slide4 from "../../images/landingPage/slide4.jpg";
import slide5 from "../../images/landingPage/slide5.jpg";
//use sample button in another slider
function SamplePrevArrow(props) {
  return (
    <div
      onClick={props.onClick}
      className="sm:bg-white sm:cursor-pointer sm:hidden sm:rounded-full sm:absolute sm:top-2/4 sm:w-10 sm:h-10 sm:-translate-y-2/4 sm:left-1 sm:z-10
      md:left-1 md:shadow-dreamy md:block
      lg:block z-10 lg:left-8"
    >
      <span className="fa-solid fa-angle-left sm:text-gray-500 sm:w-2 sm:h-4 sm:absolute sm:top-2/4 sm:-translate-y-2/4 sm:left-2/4 sm:-translate-x-2/4  sm:block"></span>
    </div>
  );
}
function SampleNextArrow(props) {
  return (
    <div
      onClick={props.onClick}
      className="sm:bg-white sm:hidden sm:cursor-pointer  sm:rounded-full sm:absolute sm:top-2/4 sm:w-10 sm:h-10 sm:-translate-y-2/4 sm:right-1
       md:right-1 md:shadow-dreamy md:block
       lg:block lg:absolute lg:-right-20"
    >
      <span className="fa-solid fa-angle-right sm:text-gray-500 sm:w-2 sm:h-4 sm:absolute sm:top-2/4 sm:-translate-y-2/4 sm:left-2/4 sm:-translate-x-2/4  sm:block"></span>
    </div>
  );
}

export default function NotableDrops() {
  const [slideNumber, setslideNumber] = useState(1);
  const Resizefunc = () => {
    if (window.innerWidth < 600) setslideNumber(1);
    if (window.innerWidth > 900) setslideNumber(3);
    if (window.innerWidth > 600 && window.innerWidth < 900) setslideNumber(2);
  };
  useEffect(() => {
    window.addEventListener("resize", () => Resizefunc());
    Resizefunc();
    return window.removeEventListener("resize", () => Resizefunc());
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideNumber,
    slidesToScroll: slideNumber,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="">
      <h1
        style={{
          color: "rgb(4, 17, 29)",
          lineHeight: "110%",
        }}
        className="sm:w-full sm:text-center sm:font-semibold sm:text-2xl sm:font-poppinfont sm:my-9  "
      >
        Notable Drops
      </h1>

      <Slider
        {...settings}
        className="sm:items-center   sm:w-full md:mx-auto   md:w-full md:px-5 lg:mx-auto lg:px-0  lg:max-w-6xl lg:w-full    "
      >
        <div className="sm:w-full sm:relative sm:max-w-2xl sm:px-1 sm:h-px-550 lg:max-w-sm lg:px-2 lg:w-64 lg:h-px-550 lg:overflow-hidden ">
          <a href="#">
            <div className="sm:overflow-hidden sm:relative  sm:w-full sm:h-full sm:rounded-xl ">
              <div className="sm:absolute sm:top-4 sm:right-4 sm:z-20">
                <span className="sm:text-base  sm:tracking-normal sm:text-gray-100 sm:border-2 sm:px-2.5 sm:py-px sm:rounded-lg sm:bg-slate-500">
                  Live
                </span>
              </div>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(189,189,189,0) 49%, rgba(189,189,189,0.8) 90%)",
                }}
                className="sm:absolute sm:z-10 sm:bottom-0 sm:bg  sm:pb-6 sm:pt-16 sm:pl-6 sm:w-full "
              >
                <h1 className="sm:text-xl sm:font-semibold sm:tracking-normal sm:text-gray-100  ">
                  web developer
                </h1>
                <p className="sm:text-sm sm:font-medium sm:text-gray-100">
                  Genesis drop unlocking exclusive access in the Iconic Images
                  ecosystem
                </p>
              </div>
              <Image src={slide1} alt="" objectFit="cover" layout="fill" />
            </div>
          </a>
        </div>
        <div className="  sm:w-64 sm:relative sm:max-w-2xl      sm:px-1 sm:h-px-550   lg:max-w-sm lg:px-2 lg:w-64 lg:h-px-550">
          <a href="#">
            <div className="sm:overflow-hidden sm:relative  sm:w-full sm:h-full sm:rounded-xl">
              <div className="sm:absolute sm:top-4 sm:right-4 sm:z-20">
                <span className="sm:text-base  sm:tracking-normal sm:text-gray-100 sm:border-2 sm:px-2.5 sm:py-px sm:rounded-lg sm:bg-slate-500">
                  Live
                </span>
              </div>

              <div
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(189,189,189,0) 49%, rgba(189,189,189,0.8) 90%)",
                }}
                className="sm:absolute sm:z-10 sm:bottom-0 sm:bg  sm:pb-6 sm:pt-16 sm:pl-6 sm:w-full"
              >
                <h1 className="sm:text-xl sm:font-semibold sm:tracking-normal sm:text-gray-100 ">
                  web developer
                </h1>
                <p className="sm:text-sm sm:font-medium sm:text-gray-100">
                  Genesis drop unlocking exclusive access in the Iconic Images
                  ecosystem
                </p>
              </div>
              <Image src={slide2} alt="" objectFit="cover" layout="fill" />
            </div>
          </a>
        </div>
        <div className=" sm:overflow-hidden sm:w-64 sm:relative   sm:max-w-2xl   sm:px-1 sm:h-px-550   lg:max-w-sm lg:px-2 lg:w-64 lg:h-px-550">
          <a href="#">
            <div className="sm:overflow-hidden sm:relative  sm:w-full sm:h-full sm:rounded-xl">
              <div className="sm:absolute sm:top-4 sm:right-4 sm:z-20">
                <span className="sm:text-base  sm:tracking-normal sm:text-gray-100 sm:border-2 sm:px-2.5 sm:py-px sm:rounded-lg sm:bg-slate-500">
                  Live
                </span>
              </div>

              <div
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(189,189,189,0) 49%, rgba(189,189,189,0.8) 90%)",
                }}
                className="sm:absolute sm:z-10 sm:bottom-0 sm:bg  sm:pb-6 sm:pt-16 sm:pl-6 sm:w-full"
              >
                <h1 className="sm:text-xl sm:font-semibold sm:tracking-normal sm:text-gray-100  ">
                  web developer
                </h1>
                <p className="sm:text-sm sm:font-medium sm:text-gray-100">
                  Genesis drop unlocking exclusive access in the Iconic Images
                  ecosystem
                </p>
              </div>
              <Image src={slide3} alt="" objectFit="cover" layout="fill" />
            </div>
          </a>
        </div>
      </Slider>
    </div>
  );
}
