import React, { useState } from "react";
import Product from "../components/productPage/product";
import Nav from "../components/assets/Nav";
import Footer from "../components/LandingPage.js/Footer";
import UniqueCard from "../components/productPage/UniqueCard";
import Image from "next/image";
import Img from "../images/cover.jpeg";

const Products = (props) => {
  const [detailPageInfo, setDetailPageInfo] = useState(0);
  const productsData = [
    {
      name: "User Experience Design",
      address: "Westhemer Rd. Santa Ana.",
      overview:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,sometimes on purpose (injected humour and the like)",
      job: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,sometimes on purpose (injected humour and the like)",
    },
    {
      name: "Sr. Product Designer",
      address: "Tharanbridge, Hawaii",
      overview:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,sometimes on purpose (injected humour and the like)",
      job: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,sometimes on purpose (injected humour and the like)",
    },
    {
      name: "User Experience Design",
      address: "Westhemer Rd. Santa Ana.",
      overview:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,sometimes on purpose (injected humour and the like)",
      job: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,sometimes on purpose (injected humour and the like)",
    },
    {
      name: "Sr. Product Designer",
      address: "Tharanbridge, Hawaii",
      overview:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,sometimes on purpose (injected humour and the like)",
      job: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,sometimes on purpose (injected humour and the like)",
    },
  ];
  return (
    <>
      <Nav />
      <div className="flex justify-between lg:flex-row sm:flex-col-reverse lg:items-center sm:items-center lg:justify-around">
        <div className="lg:w-[24%] md:w-[50%] sm:w-[95%] lg:flex my-2 md:flex-wrap ">
          <div className=" mx-2">
            {productsData.map((product, index) => (
              <UniqueCard
                name={product.name}
                address={product.address}
                key={index}
                onClick={() => {
                  setDetailPageInfo(index);
                }}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-[74%] md:w-[95%] sm:w-[95%] my-2 lg:h-fit sm:h-[400px] lg:overflow-hidden  sm:overflow-y-scroll sm:border-2 sm:border-[#89CFF0] sm:rounded-lg">
          <div className="my-2 p-2 ">
            <div className="flex items-center">
              <div className="w-[70px] h-[70px] rounded-[4px] mx-2 my-1 overflow-hidden items-center border-[3px] border-[#89CFF0]">
                <Image
                  src={Img}
                  alt=""
                  height={70}
                  width={70}
                  className=""
                  layout="fixed"
                />
              </div>
              <div className="flex-col text-lg font-semibold mx-3">
                <h1>{productsData[detailPageInfo].name}</h1>
                <p className="text-sm font-light">
                  {productsData[detailPageInfo].address}
                </p>
              </div>
            </div>
            <div className="my-3">
              <h1 className="text-xl font-semibold mx-2 my-4">Overview</h1>
              <p className="text-base font-medium lg:mx-2 sm:mx-1 my-4 px-4 text-justify">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for lorem ipsum
                will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like)
              </p>
            </div>

            <div className="my-3">
              <h1 className="text-xl font-semibold lg:mx-2 sm:mx-1 my-4">
                Job Description
              </h1>
              <p className="text-base font-medium mx-2 my-4 px-4 text-justify">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for lorem ipsum
                will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like)
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
