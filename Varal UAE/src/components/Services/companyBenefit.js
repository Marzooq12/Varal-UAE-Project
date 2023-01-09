import React from "react";
import Registration from "../Assets/Group-1.png";
import CompanyVisa from "../Assets/Group-2.png";
import Advice from "../Assets/Group.png";
import BankAccount from "../Assets/ILLUSTRATION 03  1.png";
import Arrow from "../Assets/Vector.png";
const companyBenefit = () => {
    return (
        <div className=" container mx-auto  mt-20  md:px-4">
            <div className=" md:flex flex-wrap  md:px-20 md:relative">
                <div className=" md:pt-24  ">
                    <div className="md:w-1/2 md:absolute md:top-10 md:left-16">
                        <div className=" md:w-[88%]">
                            <div className="  font-semibold md:px-4 px-1 md:py-6 md:text-left text-center">
                                <p className="text-gray-800 md:text-[21px] text-2xl ">
                                    Learn the ways in which you can benefit from a UAE/Offshore
                                    Company. Then get started on fulfilling your UAE dream.
                                </p>
                                <h4 className="md:text-2xl md:font-medium text-blue-700  text-3xl font-medium mt-4 md:mb-0 mb-10">
                                    Claim a Free Quote
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:pt-96">
                    <div className="md:w-[88%] w-full">
                        <div className="border-2 border-blue-500 h-full rounded-lg">
                            <div className="flex justify-center my-12">
                                <img src={BankAccount} alt="" />
                            </div>
                            <div className="mx-16">
                                <h2 className="text-2xl font-bold mb-4">Bank Account Setup</h2>
                                <p className="text-gray-400 text-lg font-medium pl-3 ">
                                    There are many banks in the United
                                    Arab Emirates [UAE]. Both locally
                                    owned and branches of
                                    multinational ones. Foreign banks
                                    adjust according to their parent s
                                    strategies and have changed local
                                    requirements overnight in the past.
                                    But we are here to help you.

                                </p>
                                <p className="flex items-center gap-x-3 md:text-xl md:font-medium text-blue-700  text-lg my-10">
                                    Learn more
                                    <img src={Arrow} alt="Arrow Mark" className="w-5 h-5" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 py-10">
                    <div className="md:w-[88%]">
                        <div className="border-2 border-blue-500 h-full rounded-lg ">
                            <div className="flex justify-center my-12">
                                <img src={Advice} alt="" />
                            </div>
                            <div className="mx-16">
                                <h2 className="text-2xl font-bold mb-4">Advice & Guidance</h2>
                                <p className="text-gray-400 text-lg font-medium pl-3 ">
                                    All activities in the UAE are licensed. Whether manufacturing,
                                    finance, trading, marketing, consultancy or restaurants. In
                                    some countries only manufacturing is licensed. In others there
                                    is a threshold below which business are encouraged. Get our
                                    insightfull guidance today
                                </p>
                                <p className="flex items-center gap-x-3 md:text-xl md:font-medium text-blue-700  text-lg my-10">
                                    Learn more{" "}
                                    <img src={Arrow} alt="Arrow Mark" className="w-5 h-5" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:pt-96">
                    <div className=" md:w-[88%]">
                        <div className="border-2 border-blue-500 h-full rounded-lg">
                            <div className="flex justify-center my-12">
                                <img src={CompanyVisa} alt="" />
                            </div>
                            <div className="mx-16">
                                <h2 className="text-2xl font-bold mb-4">UAE Company Visas</h2>
                                <p className="text-gray-400 text-lg font-medium pl-3 ">
                                    Your application for visas is critical
                                    especially if you intend to move to
                                    Dubai. This becomes even more
                                    urgent if your family will also move
                                    with you. All the paperwork is done
                                    on your behalf smoothly so that you
                                    may only focus on doing what
                                    matters most to you
                                </p>
                                <p className="flex items-center gap-x-3 md:text-xl md:font-medium text-blue-700  text-lg my-10">
                                    Learn more{" "}
                                    <img src={Arrow} alt="Arrow Mark" className="w-5 h-5" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 py-12">
                    <div className="  md:w-[88%]">
                        <div className="border-2 border-blue-500 h-full rounded-lg">
                            <div className="flex justify-center my-12">
                                <img src={Registration} alt="" />
                            </div>
                            <div className="mx-16">
                                <h2 className="text-2xl font-bold mb-4">Registration Document Preparation</h2>
                                <p className="text-gray-400 text-lg font-medium pl-3 ">
                                    Several documents must be
                                    prepared to start the process of
                                    registering a new company in the
                                    United Arab Emirates. Be it a Dubai
                                    local company, a free zone one or an
                                    offshore entity. Your registered
                                    agent is dedicated to get this done
                                    for you for a seamless process.
                                </p>
                                <p className="flex items-center gap-x-3 md:text-xl md:font-medium text-blue-700  text-lg my-10">
                                    Learn more{" "}
                                    <img src={Arrow} alt="Arrow Mark" className="w-5 h-5" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2  md:pt-24  md:absolute md:bottom-0 md:left-[50%]">
                    <div className=" md:w-[88%]">
                        <div className="  font-semibold md:px-4 md:py-6 py-2 text-center md:text-left">
                            <p className="text-gray-800 text-[21px] ">
                                We have gathered a team of professionals to craft adequate
                                services you can rely on for a friction free setup in UAE.
                            </p>
                            <h4 className="flex items-center justify-center md:justify-start md:text-left md:text-2xl text-xl md:font-medium text-blue-700  font-semibold mt-4 mb-2">
                                More about our services
                                <img src={Arrow} alt="Arrow Mark" className="w-6 h-6 md:w-5 md:h-5 ml-2 mt-1" />

                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default companyBenefit;
