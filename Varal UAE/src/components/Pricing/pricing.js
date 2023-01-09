import React from "react";
import { Element } from "react-scroll";
const pricing = () => {
  const pricing = [
    {
      branch: "AJMAN OFFSHORE",
      price: "$2,997",
      dec: "Ajman Offshore New Company formation includes",
      charges: {
        one: "Attestation Charges",
        two: "Registered Agent",
        three: "Registered Office",
        four: "Registered Office",
        five: "Preparing Statutory File",
        six: "Liaising with Registration Authorities",
        seven: "Due Diligence Appraisal",
        eight: "Keeping The Register",
        nine: "Seal Charges",
        ten: "Certificate of Good Standing",
      },
    },
    {
      branch: "RAK ICC",
      price: "$2,997",
      dec: "Rak Icc New Company formation includes",
      charges: {
        one: "Attestation Charges",
        two: "Registered Agent",
        three: "Registered Office",
        four: "Registered Office",
        five: "Preparing Statutory File",
        six: "Liaising with Registration Authorities",
        seven: "Due Diligence Appraisal",
        eight: "Keeping The Register",
        nine: "Seal Charges",
        ten: "Certificate of Good Standing",
      },
    },
    {
      branch: "SHARJAH MEDIA CITY",
      price: "$4,124 ",
      dec: "Sharjah Media City New Company formation include ",
      charges: {
        one: "Attestation Charges",
        two: "Registered Agent",
        three: "Registered Office",
        four: "Registered Office",
        five: "Preparing Statutory File",
        six: "Liaising with Registration Authorities",
        seven: "Due Diligence Appraisal",
        eight: "Keeping The Register",
        nine: "Seal Charges",
        ten: "Certificate of Good Standing",
      },
    },
  ];
  return (
    <Element id="pricing">
      <div className="container md:mx-4  px-6">
        <div className="text-center mt-28 mb-16 ">
          <h2 className="md:text-[28px] text-[22px] font-bold  leading-relaxed  mx-auto md:w-1/2 w-11/12		">
            Most{" "}
            <span className="md:border-b-8 border-b-4 pb-1 border-amber-500 ">
              popular affordable pricing
            </span>{" "}
            per jurisdictions are brought to you to kick off your adventure.
          </h2>
        </div>
        <div className="">
          <div className=" md:flex md:justify-around md:py-6 md:gap-x-4">
            {pricing.map((price, key) => (
              <div
                key={key}
                className="md:w-9/12 px-9 py-5 md:my-0 my-10 border-2 border-gray-200 text-blue-600  rounded-lg transition-all hover:bg-blue-700 hover:text-white  duration-500  cursor-pointer"
              >
                <h2 className="text-2xl font-semibold py-1.5 ">
                  {price.branch}
                </h2>
                <p className="text-4xl font-bold flex items-center py-1.5">
                  {price.price}{" "}
                  <span className="text-lg ml-1 text-gray-400 font-medium">
                    {" "}
                    One Time Payment
                  </span>
                </p>
                <h3 className=" text-lg font-semibold py-1.5 w-11/12	">
                  {price.dec}
                </h3>
                <p className=" text-base   font-medium py-1.5 flex items-center">
                  <span className="font-semibold mx-1">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  {price.charges.one}
                </p>
                <p className=" text-base   font-semibold py-1.5 flex items-center">
                  <span className="font-semibold mx-1">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  {price.charges.two}
                </p>
                <p className=" text-base   font-semibold py-1.5 flex items-center">
                  <span className="font-semibold mx-1">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  {price.charges.three}
                </p>
                <p className=" text-base   font-semibold py-1.5 flex items-center">
                  <span className="font-semibold mx-1">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  {price.charges.four}
                </p>
                <p className=" text-base   font-semibold py-1.5 flex items-center">
                  <span className="font-semibold mx-1">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  {price.charges.five}
                </p>
                <p className=" text-base   font-semibold py-1.5 flex items-center">
                  <span className="font-semibold mx-1">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  {price.charges.six}
                </p>
                <p className=" text-base   font-semibold py-1.5 flex items-center">
                  <span className="font-semibold mx-1">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  {price.charges.seven}
                </p>
                <p className=" text-base   font-semibold py-1.5 flex items-center">
                  <span className="font-semibold mx-1">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  {price.charges.eight}
                </p>
                <p className="  text-base  font-semibold py-1.5   flex items-center">
                  <span className="font-semibold mx-1">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  {price.charges.nine}
                </p>
                <p className=" text-base font-semibold py-1.5   flex items-center">
                  <span className="font-semibold mx-1">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  {price.charges.ten}
                </p>
                <button className="mt-5 py-3 border-2 border-blue-600 w-full h-20 text-xl font-bold rounded-md bg-white text-blue-700">
                  Continue
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default pricing;
