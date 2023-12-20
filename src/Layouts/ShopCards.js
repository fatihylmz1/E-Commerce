import React from "react";
import "../index.css";


export const ShopCards = () => {
    return (
        <div className="sm:flex sm:flex-row  sm:pl-52 sm:pr-44 sm:py-20 sm:h-180 sm:justify-between flex-wrap flex flex-col pl-9 pr-9 sm:gap-0 gap-4">

            <div className="bg-shopping-card-1 sm:w-1/2 sm:h-auto bg-no-repeat  bg-scroll  flex flex-col justify-end items-start w-full h-[35rem] sm:bg-left-top bg-center ">
                <div className=" sm:w-96 h-56 bg-explore-blue opacity-85 flex flex-col justify-center pl-16 pr-36 w-full mb-2 sm:mb-6">
                    <h3 className="text-white text-2xl font-bold opacity-100">Top Product Of<br /> the Week</h3>
                    <button className="rounded-md bg-explore-blue border-2 opacity-100 border-white text-white text-sm font-bold w-44 h-14">EXPLORE ITEMS</button>

                </div>

            </div>

            <div className="sm:w-1/2 h-auto flex flex-col gap-7 w-full ">
                <div className="bg-shopping-card-2 sm:h-64 w-auto bg-no-repeat bg-center flex flex-col justify-end items-start h-[35rem]">
                    <div className="z-2000 sm:w-80 max-w-80 h-44 max-h-44 relative bg-explore-blue opacity-85 sm:ml-4 flex flex-col justify-center gap-4 pl-9 w-full sm:mb-0 mb-2">
                        <h3 className="text-white text-xl font-bold opacity-100">Top Product Of the Week</h3>
                        <button className="rounded-md bg-explore-blue border-2 opacity-100 border-white text-white text-sm font-bold w-44 h-14">EXPLORE ITEMS</button>

                    </div>

                </div>
                <div className="bg-shopping-card-3 sm:h-64 w-auto bg-no-repeat bg-center flex flex-col justify-end items-start h-[35rem]">
                    <div className="z-2000 sm:w-80 max-w-80 h-44 bg-explore-blue opacity-85 sm:ml-4 flex flex-col justify-center gap-4 pl-9 w-full sm:mb-0 mb-2">
                        <h3 className="text-white text-xl font-bold opacity-100">Top Product Of the Week</h3>
                        <button className="rounded-md bg-explore-blue border-2 opacity-100 border-white text-white text-sm font-bold w-44 h-14">EXPLORE ITEMS</button>

                    </div>
                </div>

            </div>

        </div>

    )
}