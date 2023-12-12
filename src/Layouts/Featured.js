import React from "react";
import "../index.css";
import book1 from "../photos/bx_bxs-book-reader.svg";
import book2 from "../photos/carbon_book.svg";
import arrow from "../photos/uil_arrow-growth.svg";


export const Featured = () => {
    return (
        <div className="w-screen flex flex-col flex-wrap justify-between px-48 py-20">

            <div className="flex flex-col justify-center gap-4 py-20 text-center">
                <h4 className="text-link-color text-xl font-normal">Featured Products</h4>
                <h3 className="text-header-blue text-2xl font-bold">THE BEST SERVICES</h3>
                <p className="text-link-color text-sm font-normal">Problems trying to resolve the conflict between </p>

            </div>
            <div className="flex flex-row flex-wrap justify-between">
                <div className="flex flex-col flex-wrap gap-6 items-center">
                    <img src={book1} />
                    <h3 className="text-header-blue text-2xl font-bold">Easy Wins</h3>
                    <p className="text-link-color text-sm font-normal text-center">Get your best looking smile<br /> now!</p>
                </div>
                <div className="flex flex-col flex-wrap gap-6 items-center">
                    <img src={book2} />
                    <h3 className="text-header-blue text-2xl font-bold">Concrete</h3>
                    <p className="text-link-color text-sm font-normal text-center">Defalcate is most focused in<br /> helping you discover your most<br /> beautiful smile</p>
                </div>
                <div className="flex flex-col flex-wrap gap-6 items-center">
                    <img src={arrow} />
                    <h3 className="text-header-blue text-2xl font-bold">Hack Growth</h3>
                    <p className="text-link-color text-sm font-normal text-center">Overcame any hurdle or any<br /> other problem.</p>
                </div>

            </div>

        </div>


    )
}