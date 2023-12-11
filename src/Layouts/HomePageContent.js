import React, { useEffect } from "react";
import "../index.css";
import card3 from "../photos/card-3.png";
import card4 from "../photos/card-4.png";
import axios from "axios";
import { Clients } from "./Clients";
import book1 from "../photos/bx_bxs-book-reader.svg";
import book2 from "../photos/carbon_book.svg";
import arrow from "../photos/uil_arrow-growth.svg";

export const HomePageContent = () => {


    useEffect(() => {
        axios.get("https://workintech-fe-ecommerce.onrender.com")
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.warn(err);
            })
    }, []);



    return (
        <div className="w-screen">
            <div className="flex justify-center pt-16 w-screen">
                <div className="w-11/12 rounded-2xl bg-gradient-to-r from-light-blue to-light-green flex flex-row justify-stretch items-center pl-24 gap-12 z-1000 relative h-159 flex-wrap ">

                    <div className="flex flex-col justify-between w-1/2 h-80 flex-wrap">
                        <p className="text-regal-blue text-base font-bold">SUMMER 2020</p>
                        <p className="text-header-blue text-6xl font-bold">NEW COLLECTION</p>
                        <p className="text-gray-500 text-xl font-normal">We know how large objects will act,<br />
                            but things on a small scale.</p>
                        <button className="rounded bg-sky-500 text-white text-2xl font-bold w-60 h-16">SHOP NOW</button>

                    </div>

                    <div className="w-1/2 flex justify-end z-2000 absolute ml-160">

                        <img src="https://cdn.discordapp.com/attachments/1179758368726982712/1183781503084281907/none.png?ex=6589956f&is=6577206f&hm=7b95f5a80277148177bad160f47e425c9a5859bd7a77199f00d805df5b816546&" />

                    </div>

                </div>
            </div>
            <Clients />
            <div className="flex flex-row w-screen pl-52 pr-44 py-20 h-180 justify-between flex-wrap ">

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

            <div className="w-screen flex flex-row flex-wrap px-48 py-20 gap-20 items-center">

                <div className="flex flex-row gap-4">
                    <img src={card3} />
                    <img src={card4} />
                </div>
                <div className="flex flex-col flex-wrap justify-between h-64 ">
                    <p className="text-icon-blue text-base font-bold">Featured Products</p>
                    <p className="text-header-blue text-4xl font-bold">We love what we do</p>
                    <p className="text-link-color text-sm font-normal">
                        Problems trying to resolve the conflict between<br />
                        the two major realms of Classical physics:<br />
                        Newtonian mechanics.
                    </p>
                    <p className="text-link-color text-sm font-normal">
                        Problems trying to resolve the conflict between<br />
                        the two major realms of Classical physics:<br />
                        Newtonian mechanics.
                    </p>
                </div>
            </div>

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



        </div>
    )
}