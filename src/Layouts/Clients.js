import React from "react";
import "../index.css";
import hooli from "../Icons/hooli.svg";
import lyft from "../Icons/lyft.svg";
import leaf from "../Icons/leaf.svg";
import stripe from "../Icons/stripe.svg";
import aws from "../Icons/aws.svg";
import teletabi from "../Icons/teletabi.svg";

export const Clients = () => {
    return (
        <div className=" sm:px-48 sm:py-20 bg-[#FAFAFA] px-36 py-20 h-auto w-auto">
            <div className="sm:flex sm:flex-row sm:flex-wrap sm:justify-between sm:gap-0 sm:h-auto gap-14 flex flex-col justify-between h-auto px-6 sm:px-0">
                <img src={hooli} />
                <img src={lyft} />
                <img src={leaf} />
                <img src={stripe} />
                <img src={aws} />
                <img src={teletabi} />
            </div>
        </div>
    )
}