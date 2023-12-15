import React from "react";
import "../index.css";
import card3 from "../photos/card-3.png";
import card4 from "../photos/card-4.png";

export const Content = () => {
    return (
        <div className=" flex flex-row flex-wrap px-48 py-20 gap-20 items-center">

            <div className="flex flex-row gap-4">
                <img src={card3} />
                <img src={card4} />
            </div>
            <div className="flex flex-col flex-wrap justify-between h-64 ">
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
        </div>

    )
}