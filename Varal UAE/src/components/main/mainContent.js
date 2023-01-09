import React from "react";
import Heroimg from "../Assets/ILLUSTRATION.png";
import Palyicon from "../Assets/Group 117.png";
import { Element } from "react-scroll";
const mainContent = () => {
  return (
    <Element id="home">
      <div className="py-8  md:mx-8 mx-6 mt-20 ">
        <div className="flex justify-end  items-center ">
          <span className=" cursor-pointer pl-4 ml-6 md:py-3 py-4  h-16 md:h-14 border-y-2 border-l-2 border-blue-600  rounded-tl-md rounded-bl-md text-xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Search a Team | Topic"
            className="w-full h-16 md:w-1/4 md:h-14 border-y-2 border-r-2 border-blue-600 pl-6 pr-4 placeholder-cyan-600 text-xl rounded-tr-md rounded-br-md md:m-0 mr-2  "
          />
        </div>
        <div className="flex md:py-10  flex-col-reverse  md:flex-row ">
          <div className="md:w-1/2 md:mx-4 md:mt-5 mt-14 mx-6 ">
            <h4 className="md:text-xl md:font-medium text-blue-700  text-4xl font-bold mb-2">
              Claim a Free Quote
            </h4>
            <h2 className="md:text-5xl font-extrabold md:leading-snug	leading-normal mb-8 	text-4xl	">
              <span className="border-b-8 border-amber-500 ">Get started</span>{" "}
              on fulfilling your Dubai or UAE dream.
            </h2>
            <h4 className="md:text-2xl text-blue-600 md:mb-8 md:mt-4 md:font-medium text-3xl font-bold mb-8 md:leading-snug">
              UAE & Offshore Company
            </h4>
            <p className="text-gray-400 text-2xl md:leading-tight leading-snug font-semibold md:w-11/12 md:mb-4 mb-8 w-full">
              We provide you with information about UAE or Offshore Company
              Registration & help you setup your company with a bank account and
              visas.
            </p>
            <div className="border-2 border-blue-600 flex md:gap-x-7 gap-x-7 rounded-md font-semibold text-xl md:w-3/4 w-full cursor-pointer mx-auto md:mx-0 ">
              <span className="bg-blue-600 px-2 md:px-4 py-4 text-white hover:bg-blue-500 duration-300">
                Start a Company
              </span>
              <span className=" py-4   text-blue-700 hover:text-sky-600">
                Renew a Company
              </span>
            </div>
          </div>
          <div className="md:w-1/2 md:my-16 my-4 ">
            <img src={Heroimg} alt="Hero image" />
          </div>
        </div>
        <div className="  md:flex block ml-10 items-center justify-center md:mt-6 mt-14 text-center ">
          <h3 className="md:text-lg md:font-medium text-blue-700  font-bold mb-2 md:pt-2 md:mr-3 text-center  md:w-auto">
            Watch the video about UAE or Offshore Company Registration
          </h3>
          <div className="border-2 border-blue-700 rounded-full h-10 w-10 p-1 md:mx-0 mx-auto ">
            <img src={Palyicon} alt="playicon" />
          </div>
        </div>
      </div>
    </Element>
  );
};
export default mainContent;
