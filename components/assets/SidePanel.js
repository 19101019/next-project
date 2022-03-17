import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SidePanelStatusSubMenu from "./SidePanelStatusSubMenu";

export default function SidePanel() {
  const [isOpen, setIsOpen] = useState({
    filter: true,
    status: false,
    price: false,
    collections: false,
    chains: false,
    categories: false,
    onSaleIn: false,
  });
  return (
    <div
      style={{ height: "calc(100vh - 80px)" }}
      className={
        " z-10  pt-20 top-0 left-0  bg-white ml-0 font-poppinfont border border-b-0 font-bold tracking-wider" +
        (isOpen.filter ? " sticky w-96 " : " sticky w-20  overflow-hidden")
      }
    >
      <span
        onClick={() => setIsOpen({ filter: !isOpen.filter })}
        className={
          "hover:shadow-md cursor-pointer w-full h-16 flex flex-row items-center  px-5 justify-between " +
          (isOpen.filter ? " border-b" : "border-0")
        }
      >
        <span className={isOpen.filter ? " block" : " hidden"}>
          <FilterListIcon className="mr-3" />
          Filter
        </span>
        <i className="text-gray-500 text-xl">
          {isOpen.filter ? <ArrowBackIcon /> : <ArrowForwardIcon />}
        </i>
      </span>

      <ol
        className={
          " h-full overflow-y-scroll" + (isOpen.filter ? " block" : " hidden")
        }
      >
        <li>
          <div
            onClick={() => setIsOpen({ ...isOpen, status: !isOpen.status })}
            className="hover:shadow-md w-full h-16 flex flex-row items-center border-b px-4 justify-between "
          >
            Status
            <i
              className={
                " text-gray-500" +
                (isOpen.status
                  ? " fa-solid fa-angle-up"
                  : " fa-solid fa-angle-down")
              }
            ></i>
          </div>
          {isOpen.status && <SidePanelStatusSubMenu />}
        </li>

        <li>
          <div
            onClick={() => setIsOpen({ ...isOpen, price: !isOpen.price })}
            className="hover:shadow-md w-full h-16 flex flex-row items-center border-b px-4 justify-between "
          >
            Price
            <i
              className={
                " text-gray-500" +
                (isOpen.price
                  ? " fa-solid fa-angle-up"
                  : " fa-solid fa-angle-down")
              }
            ></i>
          </div>
          {/*change submenu component to corresponding component*/}
          {isOpen.price && <SidePanelStatusSubMenu />}
        </li>

        <li>
          <div
            onClick={() =>
              setIsOpen({ ...isOpen, collections: !isOpen.collections })
            }
            className=" hover:shadow-md w-full h-16 flex flex-row items-center border-b px-4 justify-between "
          >
            Collections
            <i
              className={
                " text-gray-500" +
                (isOpen.collections
                  ? " fa-solid fa-angle-up"
                  : " fa-solid fa-angle-down")
              }
            ></i>
          </div>
          {/*change submenu component to corresponding component*/}
          {isOpen.collections && <SidePanelStatusSubMenu />}
        </li>

        <li>
          <div
            onClick={() => setIsOpen({ ...isOpen, chains: !isOpen.chains })}
            className="hover:shadow-md w-full h-16 flex flex-row items-center border-b px-4 justify-between "
          >
            Chains
            <i
              className={
                " text-gray-500" +
                (isOpen.chains
                  ? " fa-solid fa-angle-up"
                  : " fa-solid fa-angle-down")
              }
            ></i>
          </div>
          {/*change submenu component to corresponding component*/}
          {isOpen.chains && <SidePanelStatusSubMenu />}
        </li>

        <li>
          <div
            onClick={() =>
              setIsOpen({ ...isOpen, categories: !isOpen.categories })
            }
            className="hover:shadow-md w-full h-16 flex flex-row items-center border-b px-4 justify-between "
          >
            Categories
            <i
              className={
                " text-gray-500" +
                (isOpen.categories
                  ? " fa-solid fa-angle-up"
                  : " fa-solid fa-angle-down")
              }
            ></i>
          </div>
          {/*change submenu component to corresponding component*/}
          {isOpen.categories && <SidePanelStatusSubMenu />}
        </li>
        <li>
          <div
            onClick={() => setIsOpen({ ...isOpen, onSaleIn: !isOpen.onSaleIn })}
            className="hover:shadow-md w-full h-16 flex flex-row items-center border-b px-4 justify-between "
          >
            On Sale In
            <i
              className={
                " text-gray-500" +
                (isOpen.onSaleIn
                  ? " fa-solid fa-angle-up"
                  : " fa-solid fa-angle-down")
              }
            ></i>
          </div>
          {/*change submenu component to corresponding component*/}
          {isOpen.onSaleIn && <SidePanelStatusSubMenu />}
        </li>
      </ol>
    </div>
  );
}
