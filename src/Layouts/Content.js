import React from "react";
import "../index.css";
import card3 from "../photos/card-3.png";
import card4 from "../photos/card-4.png";

export const Content = () => {
    return (
        <div className=" sm:flex sm:flex-row sm:flex-wrap sm:px-48 sm:py-20 sm:gap-20 sm:items-center flex flex-col flex-wrap-reverse px-6">

            <div className="hidden sm:flex flex-row sm:gap-4 sm:w-[32rem] w-[24rem] sm:pl-0 pl-3 gap-2 justify-center">
                <img src={card3} className="sm:w-[13.5rem]  w-40 " />
                <img src={card4} className="sm:w-[17.5rem]  w-48" />
            </div>
            <div className="flex flex-col flex-wrap justify-between sm:h-64 sm:w-[28rem] items-start w-full h-80 sm:pb-0 pb-6 ">
                <p className="text-icon-blue text-base font-bold">Featured Products</p>
                <p className="text-header-blue text-4xl font-bold">We love what we do</p>
                <p className="text-[#737373] text-sm font-normal">
                    Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics:<br />
                    Newtonian mechanics.
                </p>
                <p className="text-[#737373] text-sm font-normal">
                    Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics:<br />
                    Newtonian mechanics.
                </p>
            </div>

            <div className="sm:hidden flex flex-row sm:gap-4 sm:w-[32rem] w-[24rem] sm:pl-0 pl-3 gap-2 justify-center">
                <img src={card3} className="sm:w-[13.5rem]  w-40 " />
                <img src={card4} className="sm:w-[17.5rem]  w-48" />
            </div>
        </div>

    )
}