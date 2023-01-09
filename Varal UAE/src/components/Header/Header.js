import React, { useState } from "react";
import Logo from "../Assets/Group 114.png";
import { Link } from "react-scroll";
import "./Header.css";
import { BsList } from "react-icons/bs";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="bg-white md:h-24 h-auto  flex items-center justify-between px-10 py-4 flex-wrap w-full">
        
          <img src={Logo} alt="logo" />
          <BsList className="h-12 w-20 md:hidden block" onClick={() => setNavbar(!navbar)} />
       
        <ul
          className={`${
            navbar ? "block" : "hidden"
          } md:flex md:items-center md:justify-between  text-lg font-semibold md:w-auto w-full text-gray-400 p-3 duration-300 `}
        >
          <li className="mx-2  py-2  rounded-md  cursor-pointer transition-all hover:bg-blue-500  hover:text-white duration-300 ease-out">
            <Link to="home" className="md:px-3" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="mx-2  py-2  rounded-md cursor-pointer  transition-all hover:bg-blue-500  hover:text-white duration-300 ease-out">
            <Link to="services" className="md:px-3 " smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li className="mx-2  py-2  rounded-md cursor-pointer  transition-all hover:bg-blue-500  hover:text-white duration-300 ease-out">
            <Link to="pricing" className="md:px-3 " smooth={true} duration={500}>
              Pricing
            </Link>
          </li>
          <li className="mx-2  py-2  rounded-md cursor-pointer  transition-all hover:bg-blue-500 hover:text-white duration-300 ease-out">
            <Link to="about" className="md:px-3   " smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li className="mx-2  py-2  rounded-md cursor-pointer  transition-all hover:bg-blue-500  hover:text-white duration-300 ease-out bg-blue-700 ">
            <Link to="home" className="md:px-3   text-white" smooth={true} duration={500}>
              Start a Company
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

