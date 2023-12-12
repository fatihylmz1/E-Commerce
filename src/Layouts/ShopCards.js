import React from "react";
import "../index.css";


export const ShopCards = () => {
    return (
        <div className="flex flex-row  pl-52 pr-44 py-20 h-180 justify-between flex-wrap ">

            <div className="bg-shopping-card-1 w-1/2 h-auto bg-no-repeat  bg-scroll z-1000 flex flex-col justify-end items-start">
                <div className="z-2000 w-96 h-56 bg-explore-blue opacity-85 mb-5 flex flex-col justify-center pl-16 pr-36">
                    <h3 className="text-white text-2xl font-bold opacity-100">Top Product Of<br /> the Week</h3>
                    <button className="rounded-md bg-explore-blue border-2 opacity-100 border-white text-white text-sm font-bold w-44 h-14">EXPLORE ITEMS</button>

                </div>

            </div>

            <div className="w-1/2 h-auto flex flex-col gap-7">
                <div className="bg-shopping-card-2 h-64 w-auto bg-no-repeat bg-center flex flex-col justify-end items-start">
                    <div className="z-2000 w-80 h-44 bg-explore-blue opacity-85 ml-5 flex flex-col justify-center gap-4 pl-9">
                        <h3 className="text-white text-xl font-bold opacity-100">Top Product Of the Week</h3>
                        <button className="rounded-md bg-explore-blue border-2 opacity-100 border-white text-white text-sm font-bold w-44 h-14">EXPLORE ITEMS</button>

                    </div>

                </div>
                <div className="bg-shopping-card-3 h-64 w-auto bg-no-repeat bg-center flex flex-col justify-end items-start">
                    <div className="z-2000 w-80 h-44 bg-explore-blue opacity-85 ml-5 flex flex-col justify-center gap-4 pl-9">
                        <h3 className="text-white text-xl font-bold opacity-100">Top Product Of the Week</h3>
                        <button className="rounded-md bg-explore-blue border-2 opacity-100 border-white text-white text-sm font-bold w-44 h-14">EXPLORE ITEMS</button>

                    </div>
                </div>

            </div>

        </div>

    )
}