import React from "react";
import Vector4 from "../Assets/Vector-4.png";
import Vector3 from "../Assets/Vector-3.png";
import Group34 from "../Assets/Group 34.png";
import instagram from "../Assets/Vector-6.png";
import facebook from "../Assets/Vector-5.png";
import linkedIn from "../Assets/Vector-8.png";
import youtube from "../Assets/Vector-7.png";
import { Element } from "react-scroll";

const About = () => {
  const leftAboutTitle1 = [
    {
      Sec_title1: "Read about our blogs for more information on our processes ",
    },
    {
      Sec_title2: "Satidfied We are When Our Customers Are Happy ",
    },
  ];

  const leftAboutSub = [
    {
      title1: "How to start a company formation in Dubai",
      minutes: "5 Minutes",
    },
    {
      title1: " How to start an Offshore company formation in Dubai",
      minutes: "5 Minutes",
    },
    {
      title1: "SEO Dubai: Who benefits the most?",
      minutes: "5 Minutes",
    },
  ];
  return (
    <Element id="about">
      <div className="container md:mx-4 px-16 py-6 mt-20 h-full">
        <div className="md:flex justify-between">
          <div className="md:w-5/12 md:p-4 h-full">
            <div className=" mb-12 p-4 rounded-lg">
              <div className="flex items-center ">
                <span className="w-3 h-20 bg-blue-800 "></span>
                {leftAboutTitle1.map((data, key) => {
                  return (
                    <h4 className="ml-6 text-xl font-bold " key={key}>
                      {data.Sec_title1}
                    </h4>
                  );
                })}
              </div>
            </div>
            {leftAboutSub.map((data, key) => {
              return (
                <div className="flex items-center rounded-lg transition-all hover:bg-blue-700 cursor-pointer hover:text-white  duration-300 text-blue-700 mb-4 h-1/5 px-8 py-6">
                  <div className="border-2 border-blue-700 hover:border-white rounded-md px-4 py-4 mr-6">
                    <img src={Vector4} alt="" className="w-16 h-10" />
                  </div>
                  <div className="flex-cols">
                    <h4 className="text-xl font-bold mb-2 " key={key}>
                      {data.title1}
                    </h4>
                    <p className=" text-lg font-medium">{data.minutes}</p>
                  </div>
                </div>
              );
            })}

            <div className=" my-6 p-4 rounded-lg">
              <div className="flex items-center ">
                <span className="w-3 h-20 bg-blue-800  "></span>
                {leftAboutTitle1.map((data, key) => {
                  return (
                    <h4 className="ml-3 text-xl font-bold " key={key}>
                      {data.Sec_title2}
                    </h4>
                  );
                })}
              </div>
            </div>
            <div className="flex">
              <div className=" w-11/12 mx-auto p-3	mb-5">
                <div className="flex">
                  <div className="flex flex-col justify-center items-center">
                    <div className="border-2 border-blue-700 rounded-full">
                      <img src={Vector3} alt="" className="w-20 h-18 p-2" />
                    </div>
                    <span className="w-14 h-1 bg-blue-700 md:mt-24 mt-28"></span>
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="ml-6 text-lg">
                      {" "}
                      I am very happy with them. I’ll continue to use their
                      services in future & highly recommend them to anyone,
                    </h3>
                    <p className="ml-6 md:mt-7 mt-[78px] text-xl font-bold">
                      Muhib Abrar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className=" w-11/12 mx-auto p-3 mb-5	">
                <div className="flex">
                  <div className="flex flex-col justify-center items-center ">
                    <div className="border-2 border-blue-700 rounded-full">
                      <img src={Vector3} alt="" className="w-20 h-18 p-2" />
                    </div>
                    <span className="w-14 h-1 bg-blue-700 md:mt-24 mt-28"></span>
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="ml-6 text-lg">
                      {" "}
                      Rama has a high level of integrity, intellect, knowledge
                      of his business, resourcefulness and humanity
                    </h3>
                    <p className="ml-6 md:mt-16 mt-[78px] text-xl font-bold">
                      Colin Saldahna
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className=" w-11/12 mx-auto p-3 mb-5	">
                <div className="flex">
                  <div className="flex flex-col justify-center items-center">
                    <div className="border-2 border-blue-700 rounded-full">
                      <img src={Vector3} alt="" className="w-20 h-18 p-2" />
                    </div>
                    <span className="w-14 h-1 bg-blue-700 md:mt-24 mt-28"></span>
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="ml-6 text-lg">
                      {" "}
                      Your advise was so complete that I actually realized how
                      beneficial this would be to my clients and my business.
                    </h3>
                    <p className="ml-6 md:mt-7 mt-[78px] text-xl font-bold">
                      Mark Swann
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-5/12 w-full md:p-4">
            <div className="flex items-center md:p-4 py-8">
              <span className="w-3 h-20 bg-blue-800 "></span>
              <h4 className="ml-7  text-xl font-bold">
                Get to know the whole us and more of our services
              </h4>
            </div>
            <div className="grid  grid-cols-2 w-full	 md:block">
              <div className="mt-8 mx-auto md:px-10 md:py-3">
                <h3 className=" text-2xl font-extrabold text-gray-700 mb-3">
                  Services
                </h3>
                <p className=" text-lg font-extrabold text-gray-400 md:w-2/3">
                  Products Solutions Assurance FAQ Working at Varal-Singhania
                </p>
              </div>
              <div className="md:mt-6 mt-8 ml-10 md:ml-0 md:mx-auto md:px-10  md:py-3">
                <h3 className=" text-2xl font-extrabold text-gray-700 mb-3">
                  Policies
                </h3>
                <p className=" text-lg font-extrabold text-gray-400 md:w-2/3">
                  Privacy Policy Terms & Conditions
                </p>
              </div>
              <div className="md:mt-6 mt-8 mx-auto md:px-10 md:py-3">
                <h3 className=" text-2xl font-extrabold text-gray-700 mb-3">
                  About
                </h3>
                <p className=" text-lg font-extrabold text-gray-400 md:w-2/3">
                  About Us Contact Us
                </p>
              </div>
              <div className="md:mt-6 mt-8 mx-auto md:px-10 md:py-3 ml-10 md:ml-0">
                <h3 className=" text-2xl font-extrabold text-gray-700 mb-4">
                  Address
                </h3>
                <p className=" text-lg font-extrabold text-gray-400 md:w-2/3">
                  608 One Lake Plaza, Cluster T, Al Sarayat Street, Jumeirah
                  Lake Towers Dubai United Arab Emirates
                </p>
              </div>
              <div className="md:mt-6 mx-auto md:px-10 ml-10 md:ml-0 md:py-3 py-2 md:order-1 order-2">
                <p className=" text-lg font-extrabold text-gray-400 md:w-2/3">
                  Office Hours: Sunday to Thursday 8:30 AM to 6:30 PM [GMT+4] M:
                  +971 55 794 2016 O: +971 4 447 2061
                </p>
              </div>
              <div className="md:mt-6 mt-[-150px] mx-auto md:px-10 md:py-3">
                <h3 className=" text-2xl font-extrabold text-gray-700 mb-4">
                  Subscribe Now
                </h3>
                <p className=" text-lg font-extrabold text-gray-400 md:w-2/3">
                  Sunbscribe now to receive our Newsletters about amazing
                  opportunities in Dubai
                </p>
              </div>
            </div>
            <div className="h-14 md:w-10/12 mx-auto mt-10  flex">
              <input
                type="text"
                placeholder="Enter email address"
                className="h-full w-4/5 px-6 placeholder:text-lg font-medium bg-slate-200 cursor-pointer"
              />
              <button className="h-14 w-12">
                <img src={Group34} alt="" />
              </button>
            </div>
            <div className=" h-10 mt-8 mb-6 md:my-10 md:w-7/12	mr-6  md:mx-10 ">
              <div className="flex justify-between h-full ">
                <img src={facebook} alt="facebook" className="cursor-pointer" />
                <img
                  src={instagram}
                  alt="instagram"
                  className="cursor-pointer"
                />
                <img src={linkedIn} alt="linkedIn" className="cursor-pointer" />
                <img src={youtube} alt="youtube" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
