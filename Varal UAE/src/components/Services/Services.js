import React from "react";
import servicesData from "./servicesList";
import CompanyBenefit from "./companyBenefit";
import crown from '../Assets/Vector-2.png';
import { Element } from "react-scroll";

const Services = () => {
  return (
    <Element id='services'>
      <div className=" md:mx-8 mx-6 my-10">
        <section>
          <div className="text-3xl font-bold flex flex-col justify-center items-center leading-tight text-center ">
            <h3 className="border-b-8 border-amber-500 "> Dedicated</h3>
            <h3 className="mb-6">to our mission we are</h3>
            <p className="text-slate-400 text-xl md:w-4/6 w-full font-medium md:px-40 mb-20">
              Our services include Company Formation & Renewals, Trust &
              Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote
              Management, Stock Trading Platforms, Ownership Solutions.
            </p>
          </div>
          <div>
            <div className="container md:mx-8  px-10 ">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-16 gap-y-20 text-center md:text-justify">
                {servicesData.map((data, key) => {
                  return (
                    <div
                      key={key}
                      className=" flex flex-col md:gap-y-3 gap-y-3 "
                    >
                      <img src={crown} alt="icon" className="w-20 h-18 md:w-12 md:h-11 mx-auto md:mx-0 mb-2" />
                      <h3 className="text-2xl font-semibold">{data.title}</h3>
                      <p className="text-gray-500 text-[17px]">{data.para}</p>
                      <p className="text-xl text-yellow-500 font-medium">
                        {data.get}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <CompanyBenefit />
      </div>
    </Element>
  );
};

export default Services;
