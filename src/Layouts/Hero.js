import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import kivircik from "../photos/kivircik.png";


export const Hero = () => {
    const navigate = useNavigate()
    const handleShopButton = () => {
        navigate("/shop")
    }
    return (
        <div className="sm:flex sm:justify-center flex flex-col  ">
            <div className="sm:w-full rounded-2xl bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] sm:flex sm:flex-row sm:justify-stretch sm:items-center sm:pl-24 sm:gap-12 sm:z-1000 sm:relative sm:h-159 sm:flex-wrap sm:pt-0 flex flex-col justify-between h-[60rem] pt-20 mx-2">

                <div className="sm:flex sm:flex-col sm:justify-between sm:w-1/2 sm:h-80 sm:flex-wrap sm:items-start gap-10 sm:gap-0 flex flex-col items-center sm:text-start text-center justify-center">
                    <p className="text-regal-blue text-base font-bold">SUMMER 2020</p>
                    <p className="text-header-blue sm:text-6xl text-[2.5rem] font-bold">NEW COLLECTION</p>
                    <p className="text-gray-500 text-xl font-normal">We know how large objects will act,<br />
                        but things on a small scale.</p>
                    <button className="rounded bg-sky-500 text-white text-2xl font-bold w-60 h-16" onClick={handleShopButton}>SHOP NOW</button>

                </div>

                <div className="sm:w-1/2 sm:flex sm:justify-end sm:z-2000 sm:absolute sm:ml-160 sm:h-full">

                    <img src={kivircik} className="sm:max-w-full sm:h-full" />

                </div>

            </div>
        </div>


    )
}


