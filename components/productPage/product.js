import React from "react";
import UniqueCard from "./UniqueCard";

const Product = () => {
    return (
      <>
        <div className="flex my-2" >
          <div className="w-[24%] mx-2">
            <UniqueCard />
          </div>
          <div className="w-[24%] mx-2">
            <UniqueCard />
          </div>
          <div className="w-[50%] mx-2"></div>
        </div>
      </>
    );
}

export default Product;