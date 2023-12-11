import React, { useEffect } from "react";
import "../index.css";
import ellipse from "../Icons/Ellipse 26.svg";
import axios from "axios";
import { Clients } from "./Clients";

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
                <div className="w-11/12 rounded-2xl bg-gradient-to-r from-light-blue to-light-green flex flex-row justify-stretch pl-24 gap-12 z-1000 relative h-159 ">

                    <div className="flex flex-col justify-evenly w-1/2 h-auto flex-wrap">
                        <p className="text-regal-blue text-base font-bold">SUMMER 2020</p>
                        <p className="text-header-blue text-6xl font-bold">NEW COLLECTION</p>
                        <p className="text-gray-500 text-xl font-normal">We know how large objects will act,<br />
                            but things on a small scale.</p>
                        <button className="rounded bg-sky-500 text-white text-2xl font-bold w-60 h-16">SHOP NOW</button>

                    </div>

                    <div className="w-1/2 flex justify-end z-2000 absolute ml-160">

                        <img src="https://cdn.discordapp.com/attachments/1179758368726982712/1183781503084281907/none.png?ex=6589956f&is=6577206f&hm=7b95f5a80277148177bad160f47e425c9a5859bd7a77199f00d805df5b816546&" className="" />

                    </div>

                </div>
            </div>
            <Clients />
            <div className="flex flex-row w-screen pl-52 pr-44 py-20 h-180 justify-between flex-wrap ">

                <div className="bg-shopping-card-1 w-1/2 h-auto bg-no-repeat  bg-scroll">

                </div>

                <div className="w-1/2 h-auto flex flex-col gap-7">
                    <div className="bg-shopping-card-2 h-64 w-auto bg-no-repeat bg-center">
                    </div>
                    <div className="bg-shopping-card-3 h-64 w-auto bg-no-repeat bg-center">
                    </div>

                </div>

            </div>



        </div>
    )
}