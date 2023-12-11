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
        <div className="w-screen">
            <div className="flex flex-row flex-wrap justify-between px-52 py-20">
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