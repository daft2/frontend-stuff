import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeadLink from "./HeadLink";

const Headbar: React.FC = () => {
  return (
    <div className="text-gray-600 flex flex-row justify-around xl:justify-end gap-4 xl:gap-8 text-xs lg:text-base p-2 xl:p-10 items-center">
      <span className="lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="bg-orange-600 p-2 text-white rounded-lg"
        />
      </span>
      <HeadLink label="Product" icon />
      <HeadLink label="About" />
      <HeadLink label="Blog" />
      <HeadLink label="Contact Us" />
      <a href="" className="relative">
        <FontAwesomeIcon
          icon={faBagShopping}
          className="bg-orange-600 text-white p-2 xl:p-3 rounded-lg xl:rounded-xl shadow-xl hover:bg-orange-500"
        />
        <span className="absolute text-black -top-1 left-5 xl:left-7 bg-white shadow-around rounded-full text-[0.50rem] xl:text-xs w-4 h-4 text-center">
          2
        </span>
      </a>
    </div>
  );
};

export default Headbar;
